<script setup lang="ts">
/*Basic Configuration for Scene(=Container), Camera and Rendering for Playground*/
import * as THREE from 'three'
import { WebGLRenderer } from 'three'
import { computed, onMounted, ref, watch } from 'vue'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import { useGameStore } from '@/stores/game/gamestore'
import type { IMessageDTD } from '@/stores/game/dtd/IMessageDTD'
import { sendMessage, subscribeTo } from '@/config/stompWebsocket'
import { useRoute } from 'vue-router'
import type { IPlayerPositionDTD } from '@/stores/game/dtd/IPlayerPositionDTD'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import type { ICharacterDTD } from '@/stores/game/dtd/ICharacterDTD'
import type { IChickenPositionDTD } from '@/stores/game/dtd/IChickenPositionDTD'
import Modal from '@/components/Modal.vue'
import { Playerrole } from '@/stores/game/dtd/EPlayerrole';
import { useThemeStore } from '@/stores/themes/themeStore';

const themeStore = useThemeStore();

const gameStore = useGameStore()
const route = useRoute()
const lobbyId = route.params.id.toString()

let nextPosition: THREE.Vector3
let lastSend: number = 0
//let lastMoveValid = false;
const players = new Map<string, number>(); // Spieler mit Namen als Key auf Character Model
const loadingPlayers = new Map<string, boolean>(); // Spielername -> Ladevorgang
const rotatingItems: THREE.Object3D[] = []; // Items, die sich drehen
const map = ref<string[] | undefined>(undefined);


//Movement
let movingForward: boolean,
  movingBackward: boolean,
  movingLeft: boolean,
  movingRight: boolean = false
const slowMovementSpeed = 2
const fastMovementSpeed = 4
let movementSpeed = slowMovementSpeed

const showSettings = ref(false)
const musicVolume = ref(50)
const effectVolume = ref(50)
const spawnX = ref(1);
const spawnZ = ref(2);



//für HuD
//const life = ref(2) //startlife
//const maxLife = ref(3)
//const collectedItems = ref<string[]>([]) //Gesammelte Items

// für springen
let jumpChargeTime = 0  // Zeit, die die Leertaste gedrückt wurde
const maxJumpChargeTime = 1.5 // Maximale Ladezeit für großen Sprung in Sekunden
let isChargingJump = false // Ob der Spieler einen Sprung auflädt
let isJumping = false // Verhindert doppeltes Springen
let isValidatingChargeJump = false
let jumpVelocity = 0 // Vertikale Geschwindigkeit des Sprungs
const gravity = -9.8 // Schwerkraft
const minJumpSpeed = 6 // Startgeschwindigkeit des kleinen Sprung
const maxJumpSpeed = 15 //Geschwindigkeit für großen Sprung

function lockPointer() {
  pointerLockControls.lock();
  pointerLockControls.isLocked = true;
}

//für HUD
// Aktueller Spieler
const currentPlayer = computed(() => {
  const myName = sessionStorage.getItem("myName"); // Name des aktuellen Spielers
  return gameStore.gameState.gamedata?.players.find(player => player.name === myName);
});

// aktueller Charakter
const currentCharacter = computed(() => {
  const myName: string = sessionStorage.getItem("myName") || "";
  if (!myName) return null;

  const character = gameStore.gameState.gamedata?.characters[myName] || null;
  return character;
});


// Aktuelles Leben des Charakters
const life = computed(() => currentCharacter.value?.life ?? 0);

watch(
  () => currentCharacter.value?.life,
  (newLife, oldLife) => {
    if (newLife !== oldLife) {
      console.log(`Life changed from ${oldLife} to ${newLife}`);
    }
  }
);

// Maximales Leben des Charakters
const maxLife = computed(() => currentCharacter.value?.maxLife ?? 0);

const collectedItems = ref<string[]>([]) //Gesammelte Items

// Maximale Punkte
const maxPoints = computed(() => gameStore.gameState.gamedata.maxPointsSnackman);

// Aktuelle Punkte
const points = computed(() => currentCharacter.value?.currentPoints ?? 0);

watch(
  () => currentCharacter.value?.currentPoints,
  (newPoints, oldPoints) => {
    if (newPoints !== oldPoints) {
      console.log(`Points changed from ${oldPoints} to ${newPoints}`);
      // Zusätzliche Logik, z. B. Punkte-Animationen
    }
  }
);

// Typ falsch?
const chickenPositions = ref<IChickenPositionDTD[]>([]);


function addItem(itemName: string) {
  collectedItems.value.push(itemName)
}

function createSceneCameraRendererControlsClockListener() {
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.outerWidth, 0.001, 1000)
  camera.position.set(1, 1, 2)
  camera.rotation.order = "YXZ"

  const listener = new THREE.AudioListener();
  camera.add(listener);

  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true

  const pointerLockControls = new PointerLockControls(camera, renderer.domElement)
  pointerLockControls.pointerSpeed = 1

  const clock = new THREE.Clock()
  return { scene, camera, renderer, pointerLockControls, clock, listener }
}

function registerListeners(window: Window, renderer: WebGLRenderer) {
  renderer.domElement.addEventListener('click', (e) => {
    renderer.domElement.requestPointerLock()
  })

  window.addEventListener('resize', (e) => {
    //renderer und somit auch die komplette szene wird auf neuen Browserfenster bereich angepasst
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    //Durch das Anpassen der ".aspect" bleibt die FOV auch bei Änderung der Fenstergröße konstant
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })

  document.addEventListener('pointerlockchange', (e) => {
    if (!document.pointerLockElement) {
      showSettings.value = true;
    } else {
      showSettings.value = false;
    }
  })

  window.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ShiftLeft':
        if (movementSpeed === slowMovementSpeed) {
          movementSpeed = fastMovementSpeed
        } else {
          movementSpeed = slowMovementSpeed
        }
        break
      case 'KeyW':
        movingForward = true
        break
      case 'KeyA':
        movingLeft = true
        break
      case 'KeyS':
        movingBackward = true
        break
      case 'KeyD':
        movingRight = true
        break
      case 'Space':
          if(gameStore.jumpAllowed){
              isChargingJump = true;
          }
        break;
    }
  })
  window.addEventListener('keyup', (e) => {
    switch (e.code) {
      case 'KeyW':
        movingForward = false
        break
      case 'KeyA':
        movingLeft = false
        break
      case 'KeyS':
        movingBackward = false
        break
      case 'KeyD':
        movingRight = false
        break
      case 'Space':
        isChargingJump = false;
        break
    }
  })
}

//Diese Funktion lädt die Hintergrundmusik
function loadMusic() {
  const audioLoader = new THREE.AudioLoader();

  // Liste der Sound-Dateien
  const soundFilenames = ['bg-music.mp3', 'walking.mp3', 'hit.mp3'];
  const soundList: THREE.Audio[] = []

  const bgSound = new THREE.Audio(listener);
  const bgSoundURL = new URL(`@/assets/game/realistic/sounds/bg-music.mp3`, import.meta.url).href;

  audioLoader.load(bgSoundURL, function (buffer) {
    bgSound.setBuffer(buffer);
    bgSound.setLoop(true);
    bgSound.setVolume(musicVolume.value / 100);
    bgSound.play()
  });
  soundList.push(bgSound);

  const walkingSound = new THREE.Audio(listener);
  const walkingSoundURL = new URL(`@/assets/game/realistic/sounds/walking.mp3`, import.meta.url).href;

  audioLoader.load(walkingSoundURL, function (buffer) {
    walkingSound.setBuffer(buffer);
    walkingSound.setLoop(true);
    walkingSound.setVolume(effectVolume.value / 100);
  });
  soundList.push(walkingSound);

  const hitSound = new THREE.Audio(listener);
  const hitSoundURL = new URL(`@/assets/game/realistic/sounds/hit.mp3`, import.meta.url).href;

  audioLoader.load(hitSoundURL, function (buffer) {
    hitSound.setBuffer(buffer);
    hitSound.setLoop(true);
    hitSound.setVolume(effectVolume.value / 100);
  });
  soundList.push(hitSound);

  return soundList
}

const { scene, camera, renderer, pointerLockControls, clock, listener } =
  createSceneCameraRendererControlsClockListener()

let controllLocked = watch(pointerLockControls, async (oldValue, newValue) => {
  console.log("CHANGE");
  newValue.isLocked;
});

registerListeners(window, renderer)
const [bgMusic, walkingSound, hitSound] = loadMusic()
watch(musicVolume, (newVolume) => bgMusic.setVolume(newVolume / 100))
watch(effectVolume, (newVolume) => {
  walkingSound.setVolume(newVolume / 100);
  hitSound.setVolume(newVolume / 100)
})


const threeContainer = ref<null | HTMLElement>(null)



//Ball
const sphereGeometry = new THREE.SphereGeometry(1, 30, 30)
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0xffff00,
  metalness: 0,
  roughness: 0,
})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
sphere.position.y = 2
sphere.position.x = 3
sphere.position.z = -4

scene.add(sphere)

//lightning
const ambientLight = new THREE.AmbientLight(0x404040, 10)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 1000, 10)
pointLight.position.set(10, 20, 10) //extra Lightning for the ball
scene.add(pointLight)

function animate() {
  setTimeout(function () {
    requestAnimationFrame(animate)
  }, 1000 / 60)

  rotatingItems.forEach((item) => {
    item.rotation.y += 0.01
  })

  renderer.render(scene, camera)
  const delta = clock.getDelta()
  cameraPositionBewegen(delta)
}

async function isValidChargeJump(): Promise<boolean> {
  const restUrl: string = '/api/game';
  const playerId: string = currentPlayer.value?.name ?? "";

  if (playerId === "") {
    console.error('Error: Unable to validate charging jump, player ID is missing');
    return false;
  }

  try {
    // Perform the fetch request
    const response: Response = await fetch(`${restUrl}/ingame/${lobbyId}/${playerId}/isValidChargeJump`);

    // Check if the response is successful
    if (!response.ok) {
      console.error('Error: Unable to validate charging jump', response.statusText);
      return false; // Return false if the backend call fails
    }

    // Parse the JSON response
    const isValid: boolean = await response.json();
    console.log('Charging jump backend validation:', isValid);

    // Return the parsed value
    return isValid;
  } catch (error) {
    console.error('Error while validating charging jump:', error);
    return false; // Return false in case of an error
  }
}

// Funktion, die den Sprung auslöst, wenn die 2 Sekunden um sind
function triggerJumpAfterChargeTime(delta: number) {
  if (isChargingJump) {
    if (isValidatingChargeJump) return
    // Wenn die Leertaste gedrückt wird, erhöhe die Ladezeit

    jumpChargeTime += delta; // Ladezeit hochzählen

    // Der Ladebalken wird hiermit auf dem Bildschirm sichtbar geladen
    const jumpBarContainer = document.getElementById('jumpBarContainer');
    if (jumpBarContainer?.classList.contains('hidden')) {
      jumpBarContainer?.classList.remove('hidden');
    }


    if (jumpChargeTime >= maxJumpChargeTime) {
      isValidatingChargeJump = true;
      isValidChargeJump().then((valid) => {
        jumpChargeTime = 0; // Ladezeit zurücksetzen
        isChargingJump = false; // Leertaste kann losgelassen werden
        if (valid) {
          // Wenn die Ladezeit 2 Sekunden überschreitet, führe den Sprung aus
          jumpVelocity = maxJumpSpeed;  // Erhöhe die Sprunggeschwindigkeit für den großen Sprung
          isJumping = true; // Der Spieler springt jetzt
          console.log(" Großer Sprung ausgelöst mit Geschwindigkeit:", jumpVelocity);
        }
        isValidatingChargeJump = false;
      })
    }
  } else if (jumpChargeTime > 0 && jumpChargeTime < maxJumpChargeTime && !isJumping) {
    jumpChargeTime = 0;
    jumpVelocity = minJumpSpeed;  // Setze die Geschwindigkeit für den kleinen Sprung
    isJumping = true; // Sprung aktivieren
    console.log("Kleiner Sprung ausgelöst mit Geschwindigkeit:", jumpVelocity);
  }
  // Wichtig für den Sprung Ladebalken
  updateJumpBar();


}

function calculateMovementDirection(
  cameraViewDirection: THREE.Vector3,
  yPlaneVector: THREE.Vector3,
  delta: number
): THREE.Vector3 {
  const movementVector = new THREE.Vector3();

  // Forward/backward movement
  if (movingForward && !movingBackward) {
    if (movingRight && !movingLeft) {
      movementVector.addScaledVector(
        cameraViewDirection.clone().applyAxisAngle(yPlaneVector, (7 * Math.PI) / 4),
        movementSpeed * delta
      );
    } else if (movingLeft && !movingRight) {
      movementVector.addScaledVector(
        cameraViewDirection.clone().applyAxisAngle(yPlaneVector, Math.PI / 4),
        movementSpeed * delta
      );
    } else {
      movementVector.addScaledVector(
        cameraViewDirection.clone().applyAxisAngle(yPlaneVector, 2 * Math.PI),
        movementSpeed * delta
      );
    }
  } else if (movingBackward && !movingForward) {
    if (movingRight && !movingLeft) {
      movementVector.addScaledVector(
        cameraViewDirection.clone().applyAxisAngle(yPlaneVector, (5 * Math.PI) / 4),
        movementSpeed * delta
      );
    } else if (movingLeft && !movingRight) {
      movementVector.addScaledVector(
        cameraViewDirection.clone().applyAxisAngle(yPlaneVector, (3 * Math.PI) / 4),
        movementSpeed * delta
      );
    } else {
      movementVector.addScaledVector(
        cameraViewDirection.clone().applyAxisAngle(yPlaneVector, Math.PI),
        movementSpeed * delta
      );
    }
  } else if (movingRight && !movingLeft) {
    movementVector.addScaledVector(
      cameraViewDirection.clone().applyAxisAngle(yPlaneVector, (3 * Math.PI) / 2),
      movementSpeed * delta
    );
  } else if (movingLeft && !movingRight) {
    movementVector.addScaledVector(
      cameraViewDirection.clone().applyAxisAngle(yPlaneVector, Math.PI / 2),
      movementSpeed * delta
    );
  }

  return movementVector;
}

function updateJumpBar() {
  const jumpBar = document.getElementById("jumpBar");
  const progress = Math.min((jumpChargeTime / maxJumpChargeTime) * 100, 100); // Prozent

  if (jumpBar){

    jumpBar.style.width = `${progress}%`; // Breite Balken setzen

  }
  // Ladebalken soll nicht sichtbar sein, wenn man nicht springt
  if (progress === 0) {
    const jumpBarContainer = document.getElementById('jumpBarContainer');
    if (!jumpBarContainer?.classList.contains('hidden')) {
      jumpBarContainer?.classList.add('hidden');
    }
  }
}

function applyJumpLogic(delta: number, nextPosition: THREE.Vector3) {
  if (isJumping) {
    jumpVelocity += gravity * delta; // Beschleunigung durch Schwerkraft
    nextPosition.y += jumpVelocity * delta;

    // Bodenberührung
    if (nextPosition.y <= 1) {
      nextPosition.y = 1;
      jumpVelocity = 0;
      isJumping = false;
      jumpChargeTime = 0;
    }
  } else {
    triggerJumpAfterChargeTime(delta);
  }
}

function cameraPositionBewegen(delta: number) {
  const cameraViewDirection = new THREE.Vector3();
  camera.getWorldDirection(cameraViewDirection);

  // Ignoriere die Y-Komponente, um nur die X-Z-Ebene zu berücksichtigen
  cameraViewDirection.y = 0;
  cameraViewDirection.normalize();

  const yPlaneVector = new THREE.Vector3(0, 1, 0);
  nextPosition = camera.position.clone();

  // Apply jumping logic
  applyJumpLogic(delta, nextPosition);

  // Apply movement logic
  const movementVector = calculateMovementDirection(cameraViewDirection, yPlaneVector, delta);
  nextPosition.add(movementVector);

  // Validate position
  validatePosition(nextPosition);

  // Update camera position
  camera.position.copy(nextPosition);

  // Handle walking sound
  if (movementVector.length() > 0) {
    if (!walkingSound.isPlaying) walkingSound.play();
  } else {
    if (walkingSound.isPlaying) walkingSound.pause();
  }
}

function validatePosition(nextPosition: THREE.Vector3) {
  const currentTime: number = Date.now()

  if (currentTime - lastSend > 10) {
    const cameraAngle = camera.rotation.y
    sendMessage(`/topic/ingame/${lobbyId}/playerPosition`, {
      playerName: sessionStorage.getItem('myName'),
      posX: nextPosition.x,
      posY: nextPosition.z,
      posZ: nextPosition.y,
      angle: cameraAngle,
    })
    lastSend = currentTime
  }
}

function moveCamera() {
  camera.position.copy(nextPosition)
}

function removeModel(object: THREE.Object3D) {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((material) => material.dispose());
        } else {
          child.material.dispose();
        }
      }
    }
  });
  scene.remove(object);
}

function renderCharactersTest(playerPositions: IPlayerPositionDTD[]) {

  const modelLoader = new GLTFLoader();
  const adjustAngle = Math.PI;
  const missingPlayers = Array.from(players.keys()).filter(
    (playerName) =>
      !playerPositions.map((position) => position.playerName).includes(playerName)
  );
  const snackmanModel= themeStore.currentTheme?.character.snackman;
  const ghostModel= themeStore.currentTheme?.character.ghost;

  missingPlayers.forEach((player) => {
    const objectId = players.get(player);
    if (objectId) {
      const object = scene.getObjectById(objectId);
      players.delete(player);
      if (object) {
        removeModel(object);
      }
    }
  });

  playerPositions.forEach(async (playerPosition) => {
    if (!players.has(playerPosition.playerName) && !loadingPlayers.get(playerPosition.playerName)) {
      //const snackmanModelURL = new URL('@/assets/game/realistic/snackman/snackman.glb', import.meta.url).href;
      loadingPlayers.set(playerPosition.playerName, true);
      let modelPath;
      const playersList = gameStore.gameState.gamedata?.players;
      let playerData= undefined;
      if (playersList){
        for (const player of playersList){
          if (player.name == playerPosition.playerName){
            playerData= player;
            break;
          }
        }
      }if (playerData?.playerrole == Playerrole.SNACKMAN) {
          modelPath = snackmanModel;
      } else {
          modelPath = ghostModel;
      }
      if (modelPath){
        let loadingPath: string;
        let scaleNumber: number
        if (typeof modelPath === "string"){
          loadingPath= modelPath;
          scaleNumber=0.5;
        }else{
          loadingPath=modelPath.path;
          scaleNumber= modelPath.scale;
        }
      modelLoader.load(loadingPath, (gltf) => {
        const model = gltf.scene;
        model.scale.set(scaleNumber, scaleNumber,scaleNumber);
        players.set(playerPosition.playerName, model.id);
        scene.add(model);

        model.position.set(playerPosition.x, 1, playerPosition.y);
        model.rotation.y = (playerPosition.angle * Math.PI * 2)+ adjustAngle;

        loadingPlayers.delete(playerPosition.playerName);
      });
    }else{
      console.error("Kein Modell gefunden für", playerPosition.playerName);
    }
    } else {
      //Modell updaten
      const index: number | undefined = players.get(playerPosition.playerName)
      if (index) {
        const model = scene.getObjectById(index)
        if (model) {
          const messungsBox = new THREE.Box3()
          const breite = new THREE.Vector3()
          messungsBox.getSize(breite)
          messungsBox.expandByObject(model)
          model.position.set(playerPosition.x - breite.x / 2, playerPosition.z, playerPosition.y)
          model.rotation.y = playerPosition.angle + adjustAngle
        }
      }
    }
  })
}

function renderChicken(chickenPositions: IChickenPositionDTD[]) {
  const modelLoader = new GLTFLoader()
  const chickenModelURL = new URL('@/assets/game/realistic/chicken/chicken.gltf', import.meta.url).href;

  chickenPositions.forEach((chickenPosition) => {
    modelLoader.load('@/assets/game/realistic/chicken/chicken.gltf', (objekt) => {
      const model = objekt.scene
      model.position.set(chickenPosition.x, 1, chickenPosition.y)
      model.scale.set(0.03, 0.03, 0.03)
      model.rotateY(chickenPosition.angle)
      scene.add(model)
    })
  })
}

const textureCache = new Map<string, THREE.Texture>();

function getCachedTexture(url: string): THREE.Texture {
  if (textureCache.has(url)) return textureCache.get(url)!;

  const texture = new THREE.TextureLoader().load(url);
  textureCache.set(url, texture);
  return texture;
}

function loadMap(map: string[],selectedTheme :{ground: string; wall:string}) {
  const groundGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wallGeometry = new THREE.BoxGeometry(1, 1, 1);
  const groundTexture = getCachedTexture(selectedTheme.ground);
  const wallTexture = getCachedTexture(selectedTheme.wall);
  const groundMaterial = new THREE.MeshStandardMaterial({ map: groundTexture });
  const wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture });

  const mapOffset = 0.5;

  // Instanced meshes for ground and walls
  const groundMesh = new THREE.InstancedMesh(groundGeometry, groundMaterial, map.length * map[0].length);
  const wallMesh = new THREE.InstancedMesh(wallGeometry, wallMaterial, map.length * map[0].length);

  let groundIndex = 0;
  let wallIndex = 0;

  // Model cache for items
  const modelCache = new Map<string, Promise<THREE.Group>>();

  function loadCachedModel(url: string): Promise<THREE.Group> {
    if (!modelCache.has(url)) {
      modelCache.set(url, new Promise((resolve, reject) => {
        new GLTFLoader().load(
          url,
          (gltf) => resolve(gltf.scene),
          undefined,
          (error) => reject(error)
        );
      }));
    }
    return modelCache.get(url)!;
  }
  console.log(map)
  map.forEach((row, rowIndex) => {
    [...row].forEach((tile, colIndex) => {
      const x = rowIndex + mapOffset;
      const z = colIndex + mapOffset;

      switch (tile) {
        case '*': // Wall
          const wallMatrix = new THREE.Matrix4().makeTranslation(x, 1, z);
          wallMesh.setMatrixAt(wallIndex++, wallMatrix);
          break;

        case ' ': // Ground
          const groundMatrix = new THREE.Matrix4().makeTranslation(x, 0, z);
          groundMesh.setMatrixAt(groundIndex++, groundMatrix);
          break;

        case 'E': // Item E
        case 'D': // Item D
        case 'C': // Item C
        case 'B': // Item B
        case 'A': // Item A
          const groundItemMatrix = new THREE.Matrix4().makeTranslation(x, 0, z);
          groundMesh.setMatrixAt(groundIndex++, groundItemMatrix);

          const itemPaths: { [key: string]: URL[] } = {
            E: [
              new URL("@/assets/game/items/D/cotton_candy/cottoncandy.glb", import.meta.url)
            ],
            D: [
              new URL("@/assets/game/items/C/chips/chips.glb", import.meta.url)
            ],
            C: [
              new URL("@/assets/game/items/E/chocolate_bar/chocolatebar.glb", import.meta.url)
              ],
              B: [
              new URL("@/assets/game/items/C/candy_cane/candycane.glb", import.meta.url)
            ],
            A: [
              new URL("@/assets/game/items/E/strawberry_shortcake/strawberry_shortcake.glb", import.meta.url)
            ],
          };

          const randomModelPath = new URL(
            itemPaths[tile][0],
            import.meta.url
          ).href;
          // ITEMS SIND SPIEGELVERKEHRT
          loadCachedModel(randomModelPath).then((model) => {
            const item = model.clone(); // Clone to avoid modifying the cached model
            console.log(randomModelPath)

            if (randomModelPath.includes('chocolatebar')) {
              item.position.set(x, 0.75, z);
              item.scale.set(0.1, 0.1, 0.1);
            } else if (randomModelPath.includes('strawberry_shortcake')) {
              item.position.set(x, 0.5, z);
              item.scale.set(0.25, 0.25, 0.25);
            } else if (randomModelPath.includes('cottoncandy')) {
              item.position.set(x, 0.75, z);
              item.scale.set(0.2, 0.2, 0.2);
            } else if (randomModelPath.includes('popcorn')) {
              item.position.set(x, 0.75, z);
              item.scale.set(0.09, 0.09, 0.09);
            } else if (randomModelPath.includes('candy_cane')) {
              item.position.set(x, 0.8, z);
              item.scale.set(0.07, 0.07, 0.07);
            } else if (randomModelPath.includes('chips')) {
              item.position.set(x, 0.8, z);
              item.scale.set(0.1, 0.1, 0.1);
            }
            scene.add(item);

            rotatingItems.push(item);
          });
          break;

        default:
          // Treat as ground by default
          const defaultGroundMatrix = new THREE.Matrix4().makeTranslation(x, 0, z);
          groundMesh.setMatrixAt(groundIndex++, defaultGroundMatrix);
      }
    });
  });

  localStorage.setItem('gameMap-${lobbyId}', JSON.stringify(map));

  // Add instanced meshes to the scene
  groundMesh.instanceMatrix.needsUpdate = true;
  wallMesh.instanceMatrix.needsUpdate = true;
  scene.add(groundMesh);
  scene.add(wallMesh);
}

function addSkybox(scene: THREE.Scene, skyBoxPath:string | {right: string; left: string; top: string; bottom: string; front: string; back: string }) {
  /*const loader = new GLTFLoader();
  loader.load(
    skyBox,
    (gltf) => {
      console.log("Skybox GLB erfolgreich geladen:", skyBox);
      const sky = gltf.scene;
      sky.scale.set(100,100,100);
      sky.position.set(0,0,0);
      scene.add(sky);
    },
    undefined,
    (error) => {
      console.error("Fehler beim Laden der Skybox GLB:", error);
    }
  );*/

  const loader = new THREE.TextureLoader();
  if (typeof skyBoxPath === 'string'){
    loader.load(
      skyBoxPath,
    (texture) => {
      const sphereGeometry = new THREE.SphereGeometry(500, 64, 64);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide,
      });

      const skySphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(skySphere);
      console.log("SkySphere erfolgreich hinzugefügt!");
    },
    undefined,
    (error) => {
      console.error("Fehler beim Laden der SkySphere-Textur:", error);
    }
  );
  }else{
    const materials = [
      new THREE.MeshBasicMaterial({ map: loader.load(skyBoxPath.right), side: THREE.BackSide }),
      new THREE.MeshBasicMaterial({ map: loader.load(skyBoxPath.left), side: THREE.BackSide }),
      new THREE.MeshBasicMaterial({ map: loader.load(skyBoxPath.top), side: THREE.BackSide }),
      new THREE.MeshBasicMaterial({ map: loader.load(skyBoxPath.bottom), side: THREE.BackSide }),
      new THREE.MeshBasicMaterial({ map: loader.load(skyBoxPath.front), side: THREE.BackSide }),
      new THREE.MeshBasicMaterial({ map: loader.load(skyBoxPath.back), side: THREE.BackSide }),
    ];

    const skyboxGeometry = new THREE.BoxGeometry(500, 500, 500); // Größe des Skybox-Würfels
    const skybox = new THREE.Mesh(skyboxGeometry, materials);
    skybox.position.set(0, 0, 0);
    scene.add(skybox);
  }
}

function loadMapFromLocalStorage(): string[] | null {
  const savedMap = localStorage.getItem(`gameMap-${lobbyId}`);
  if (savedMap) {
    try {
      return JSON.parse(savedMap);
    } catch (error) {
      console.error('Error parsing saved map:', error);
    }
  }
  return null;
}

async function handleCharacters(data: ICharacterDTD[]) {
  let playerPositions: IPlayerPositionDTD[] = [];
  data.forEach(character => {
    if (sessionStorage.getItem('myName') !== character.name) {
      playerPositions.push({
        playerName: character.name,
        x: character.posX,
        y: character.posY,
        z: character.posZ,
        angle: character.angleInDegrees,
      })
    }
  })
  renderCharactersTest(playerPositions)
}

function removeItemFromSceneByPosition(posX: number, posY: number) {
  const itemToRemove = rotatingItems.find(
    (item) =>
      Math.abs(item.position.x - posX) <= 0.5 && Math.abs(item.position.z - posY) <= 0.5
  );

  if (itemToRemove) {
    // Entferne das Item aus der Szene
    scene.remove(itemToRemove);

    // Entferne es aus der rotatingItems-Liste
    const index = rotatingItems.indexOf(itemToRemove);
    if (index > -1) {
      rotatingItems.splice(index, 1);
    }
  } else {
    console.warn(`Kein Item an Position {} {}`, posX, posY)
  }
}

watch([spawnX, spawnZ], ([newX, newZ]) => {
      if (camera) {
        camera.position.z = newZ;
        camera.position.x = newX;
      }
    });

onMounted(async () => {
  try {
    await gameStore.fetchGameStatus()
    const playerName = sessionStorage.getItem('myName');
        if (playerName) {
          console.log(playerName)
          await gameStore.getJumpAllowed(playerName,lobbyId);
        }

  } catch (error) {
    console.error('Error fetching game status:', error)
  }
  const spawnPoints = gameStore.gameState.gamedata.spawnPoints;
  console.log("SPAWNS: ", spawnPoints)

  if (gameStore.gameState.gamedata.chickens === null) {
    chickenPositions.value = []
    console.log("Keine Positionsdaten weil Chicken Array leer")
  } else {
    chickenPositions.value = gameStore.gameState.gamedata.chickens;
    console.log("Chickens-Positionsdaten: " + chickenPositions.value)
  }



  //const chickenList = gameStore.gameState.gamedata.chickens

  subscribeTo(`/ingame/playerPositions/${lobbyId}`, async (message: any) => {
    switch (message.type) {
      case 'playerPosition':
        await handleCharacters(message.feedback)
        break
    }
  })

  subscribeTo(`/ingame/${lobbyId}`, async (messageValidation: IMessageDTD) => {
    switch (messageValidation.type) {
      case 'playerMoveValidation':
        const playerPosition: any = messageValidation.feedback
        console.log(gameStore.gameState.gamedata.playmap)
        if (playerPosition.playerName === sessionStorage.getItem('myName')) {
          nextPosition.set(playerPosition.posX,playerPosition.posZ,playerPosition.posY)
          moveCamera();
        }

        break
    }
  })

  subscribeTo(`/ingame/${lobbyId}/itemUpdates`, async (message: any) => {
    switch (message.type) {
      case "itemCollected":
        console.log(`collected at{} {}`, message.posX, message.positionY)
        console.log('MESSAGE: ' + message.toString())
        removeItemFromSceneByPosition(message.positionX, message.positionY);
        break;

      default:
        console.warn("Unbekannter Nachrichtentyp:", message.type);
    }
  })


  if (threeContainer.value) {
    threeContainer.value.appendChild(renderer.domElement)
  }
  map.value= gameStore.gameState.gamedata.playmap?.map;
  //const map: string[] | undefined = gameStore.gameState.gamedata.playmap?.map
  // const map = [
  //   '********************',
  //   '*    *     *       *',
  //   '* ** * ***** * *** *',
  //   '*    *     * *   * *',
  //   '* ** ***** * *** * *',
  //   '*    *   * *     * *',
  //   '* ** * * * ******* *',
  //   '*    * * *         *',
  //   '****** * ***********',
  //   '*      *           *',
  //   '* **** * ********* *',
  //   '* *    *         * *',
  //   '* * ** ********* * *',
  //   '* *              * *',
  //   '* * **************  ',
  //   '* *                *',
  //   '* **************** *',
  //   '*                * *',
  //   '****************** *',
  //   '********************',
  // ]
  if (map.value && themeStore.currentTheme) {
    loadMap(map.value,{
      ground: themeStore.currentTheme.ground,
      wall: themeStore.currentTheme.wall,
    });
  } else {
    console.error('No map found')
  }
  if (themeStore.currentTheme.skybox) {
    addSkybox(scene, themeStore.currentTheme.skybox);
    console.log("Skybox-Pfade:", themeStore.currentTheme.skybox);
  } else {
    console.error("Keine Skybox-Daten im aktuellen Theme gefunden");
  }
  const mockPositions: IPlayerPositionDTD[] = [
    {
      playerName: 'test',
      x: 1,
      y: 1,
      z: 1,
      angle: Math.PI,
    },
    {
      playerName: 'test',
      x: 2,
      y: 2,
      z: 1,
      angle: 2 * Math.PI,
    },
  ]
  renderChicken(chickenPositions.value)
  animate()
  if(spawnPoints !== null){
    spawnPoints.forEach(spawnPoint => {
      if(sessionStorage.getItem('myName') == spawnPoint.playerName){
        spawnX.value = Number(spawnPoint.x);
        spawnZ.value = Number(spawnPoint.y);
      }
    })
  }
})
watch(
  () => themeStore.selectedTheme,
  (newTheme) => {
    if (newTheme) {
      console.log(`Theme geändert zu: ${newTheme}`);
      const currentTheme = themeStore.currentTheme;
      //console.log(`Ändere Skybox zu: ${themeStore.currentTheme.sky}`);
      //addSkybox(scene, themeStore.currentTheme.sky); // Dynamisch Skybox ändern
      //console.log("Skybox-Pfad:", themeStore.currentTheme.sky);

      // Map neu laden, falls vorhanden
      if (map.value && currentTheme) {
        loadMap(map.value, {
          ground: currentTheme.ground,
          wall: currentTheme.wall,
        });
      } else {
        console.error('Keine Map oder kein aktuelles Theme gefunden');
      }
      if (themeStore.currentTheme.skybox){
        addSkybox(scene, themeStore.currentTheme.skybox);
      }else{
        console.error("Keine Skybox-Daten im aktuellen Theme gefunden");
      }
    }
  }
);

</script>

<template>
  <div ref="threeContainer" id="app" class="gameContainer relative z-20"></div>
  <div class="absolute z-50 top-0 flex justify-between w-full items-center p-8">
    <div id="items" class="ml-4 p-8 bg-black text-white border-2 border-white rounded-lg shadow-lg z-20 w-45 h-45">
      <!-- Items anzeigen, wenn vorhanden -->
      <div v-if="collectedItems.length > 0">
        {{ collectedItems.join(', ') }}
      </div>
      <div v-else></div>
    </div>
    <div id="hud" class="hud absoute text-white font-bold">
      <div v-if="currentPlayer?.playerrole === Playerrole.SNACKMAN" class="flex gap-2">
        <div v-for="index in maxLife" :key="index">
          <img v-if="index <= life" src="../assets/game/realistic/herz.png" alt="Full Heart" width="40" height="40" />
          <img v-else src="../assets/game/realistic/emptyHerz.png" alt="Empty Heart" width="40" height="40" />
        </div>
      </div>
      <!-- Punkteanzeige -->
      <div v-if="currentPlayer?.playerrole === Playerrole.SNACKMAN" class="points text-lg mt-2">
        <p>Points: {{ points }} / {{ maxPoints }}</p>
      </div>
    </div>
  </div>

  <!-- Sprung-Ladebalken -->
  <div
    id="jumpBarContainer"
    class="fixed z-50 bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full max-w-[600px] hidden">
    <!-- Ladebalken -->
    <div class="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
      <div
        id="jumpBar"
        class="bg-red-500 h-full transition-all duration-100 ease-in-out"
        style="width: 0%;">
      </div>
    </div>
  </div>

  <div v-if="showSettings" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h3 class="text-2xl font-bold mb-4">Lautstärke</h3>
      Musik <input type="range" class="form-control-range" id="formControlRange" v-model="musicVolume"> {{ musicVolume
      }}%
      <br>
      Effekte <input type="range" class="form-control-range" id="formControlRange" v-model="effectVolume">
      {{ effectVolume }}%
      <br>
      <h2 class="text-2xl font-bold mb-4">Adjust Settings {{ showSettings }}</h2>
      <button @click="lockPointer" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Close
      </button>
    </div>
  </div>


  <Modal>
    <template #titel>
      <h3 class="header-modal-adventure">Lautstärke</h3>
    </template>
    <template #content>
      <div flex flex-col gap-3>
        Musik <input type="range" class="form-control-range" id="formControlRange" v-model="musicVolume">
        {{ musicVolume }}%
        <br>
        Effekte <input type="range" class="form-control-range" id="formControlRange" v-model="effectVolume">
        {{ effectVolume }}%
        <br>
        <h2 class="text-2xl font-bold mb-4">Adjust Settings {{ showSettings }}</h2>
        <button @click="lockPointer" class="button-small-adventure">
          Close
        </button>
      </div>
    </template>
  </Modal>

</template>

<style scoped></style>

<script setup lang="ts">
/*Basic Configuration for Scene(=Container), Camera and Rendering for Playground*/
import * as THREE from 'three'
import { WebGLRenderer } from 'three'
import { computed, onMounted, ref, watch } from 'vue'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import ground from '@/assets/game/realistic/ground.png'
import wall from '@/assets/game/realistic/wall.png'
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

const gameStore = useGameStore()

const route = useRoute()
const lobbyId = route.params.id.toString()

let nextPosition: THREE.Vector3
let lastSend: number = 0
//let lastMoveValid = false;
const players = new Map<string, number>(); // Spieler mit Namen als Key auf Character Model
const loadingPlayers = new Map<string, boolean>(); // Spielername -> Ladevorgang


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



//für HuD
//const life = ref(2) //startlife
//const maxLife = ref(3)
//const collectedItems = ref<string[]>([]) //Gesammelte Items

// für springen
let jumpChargeTime = 0  // Zeit, die die Leertaste gedrückt wurde
const maxJumpChargeTime = 1.5 // Maximale Ladezeit für großen Sprung in Sekunden
let isChargingJump = false // Ob der Spieler einen Sprung auflädt
let isJumping = false // Verhindert doppeltes Springen
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
  console.log("Current Character:", character);
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

  window.addEventListener('resize',(e) => {
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
    console.log(showSettings)
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
        isChargingJump = true;
        break
    }
  })
  window.addEventListener('keyup', (e) => {
    console.log('Losgelasen: ' + e.code)
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
  renderer.render(scene, camera)
  const delta = clock.getDelta()
  cameraPositionBewegen(delta)
}

// Funktion, die den Sprung auslöst, wenn die 2 Sekunden um sind
function triggerJumpAfterChargeTime(delta: number) {
  if (isChargingJump) {
    // Wenn die Leertaste gedrückt wird, erhöhe die Ladezeit
    jumpChargeTime += delta; // Ladezeit hochzählen

    if (jumpChargeTime >= maxJumpChargeTime) {
      jumpChargeTime = 0; // Ladezeit zurücksetzen
      // Wenn die Ladezeit 2 Sekunden überschreitet, führe den Sprung aus
      isChargingJump = false; // Leertaste kann losgelassen werden
      jumpVelocity = maxJumpSpeed;  // Erhöhe die Sprunggeschwindigkeit für den großen Sprung
      isJumping = true; // Der Spieler springt jetzt
      console.log(" Großer Sprung ausgelöst mit Geschwindigkeit:", jumpVelocity);
    }

  }
  else if (jumpChargeTime > 0 && jumpChargeTime < maxJumpChargeTime && !isJumping) {
      jumpChargeTime = 0;
      jumpVelocity = minJumpSpeed;  // Setze die Geschwindigkeit für den kleinen Sprung
      isJumping = true; // Sprung aktivieren
      console.log("Kleiner Sprung ausgelöst mit Geschwindigkeit:", jumpVelocity);

  }

}

function cameraPositionBewegen(delta: number) {
  const cameraViewDirection = new THREE.Vector3()
  camera.getWorldDirection(cameraViewDirection)

  // Ignoriere die Y-Komponente, um nur die X-Z-Ebene zu berücksichtigen
  cameraViewDirection.y = 0
  cameraViewDirection.normalize()

  const yPlaneVector = new THREE.Vector3(0, 1, 0)

  nextPosition = camera.position.clone()
  // Sprungberechnung
  if (isJumping) {
    jumpVelocity += gravity * delta // Beschleunigung durch Schwerkraft
    nextPosition.y += jumpVelocity * delta
    validatePosition(nextPosition)
    camera.position.y = nextPosition.y;

    // Bodenberührung
    if (nextPosition.y <= 1) {
      nextPosition.y = 1
      validatePosition(nextPosition)
      camera.position.y = nextPosition.y;
      jumpVelocity = 0
      isJumping = false
      jumpChargeTime =0
    }
  }
  // Setze die Y-Position unabhängig vom Rest
  camera.position.y = nextPosition.y;

  if (movingForward || movingBackward || movingLeft || movingRight) {
    if (!walkingSound.isPlaying) {
      walkingSound.play()
    }
    if (movingForward) {
      if (movingRight) {
        nextPosition.addScaledVector(
          cameraViewDirection.applyAxisAngle(yPlaneVector, (7 * Math.PI) / 4),
          movementSpeed * delta,
        )
      } else if (movingLeft) {
        nextPosition.addScaledVector(
          cameraViewDirection.applyAxisAngle(yPlaneVector, Math.PI / 4),
          movementSpeed * delta,
        )
      } else if (movingBackward) {
        //foward und backward canceln sich
      } else {
        nextPosition.addScaledVector(
          cameraViewDirection.applyAxisAngle(yPlaneVector, 2 * Math.PI),
          movementSpeed * delta,
        )
      }
    } else if (movingBackward) {
      if (movingRight) {
        nextPosition.addScaledVector(
          cameraViewDirection.applyAxisAngle(yPlaneVector, (5 * Math.PI) / 4),
          movementSpeed * delta,
        )
      } else if (movingLeft) {
        nextPosition.addScaledVector(
          cameraViewDirection.applyAxisAngle(yPlaneVector, (3 * Math.PI) / 4),
          movementSpeed * delta,
        )
      } else {
        nextPosition.addScaledVector(
          cameraViewDirection.applyAxisAngle(yPlaneVector, Math.PI),
          movementSpeed * delta,
        )
      }
    } else if (movingRight) {
      if (movingLeft) {
        //right und left canceln sich
      } else {
        nextPosition.addScaledVector(
          cameraViewDirection.applyAxisAngle(yPlaneVector, (3 * Math.PI) / 2),
          movementSpeed * delta,
        )
      }
    } else if (movingLeft) {
      nextPosition.addScaledVector(
        cameraViewDirection.applyAxisAngle(yPlaneVector, Math.PI / 2),
        movementSpeed * delta,
      )
    }
    validatePosition(nextPosition)
  }
  else {
    if (walkingSound.isPlaying) {
      walkingSound.pause()
    }
  }

  // Überprüfe und führe den Sprung aus, wenn nötig
  if(!isJumping){
    triggerJumpAfterChargeTime(delta);
  }
}

function validatePosition(nextPosition: THREE.Vector3) {
  const currentTime: number = Date.now()

  if (currentTime - lastSend > 10) {
    sendMessage(`/topic/ingame/${lobbyId}/playerPosition`, {
      playerName: sessionStorage.getItem('myName'),
      posX: nextPosition.x,
      posY: nextPosition.z,
      posZ: nextPosition.y,
      angle: camera.rotation.z,
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
  console.log('INSIDE RENDER: ', playerPositions)

  const modelLoader = new GLTFLoader();
  const adjustAngle = Math.PI;
  const missingPlayers = Array.from(players.keys()).filter(
    (playerName) =>
      !playerPositions.map((position) => position.playerName).includes(playerName)
  );

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
      const snackmanModelURL = new URL('@/assets/game/realistic/snackman/snackman.glb', import.meta.url).href;

      loadingPlayers.set(playerPosition.playerName, true);

      modelLoader.load(snackmanModelURL, (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        players.set(playerPosition.playerName, model.id);
        scene.add(model);

        model.position.set(playerPosition.x, 1, playerPosition.y);
        model.rotation.y = playerPosition.angle + adjustAngle;

        loadingPlayers.delete(playerPosition.playerName);
      });
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

function renderChicken(chickenPositions: IChickenPositionDTD[]){
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

function loadMap(map: string[]) {
  const groundGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wallGeometry = new THREE.BoxGeometry(1, 2, 1);
  const groundTexture = getCachedTexture(ground);
  const wallTexture = getCachedTexture(wall);
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

  map.forEach((row, rowIndex) => {
    [...row].forEach((tile, colIndex) => {
      const x = rowIndex + mapOffset;
      const z = colIndex + mapOffset;

      switch (tile) {
        case '*': // Wall
          const wallMatrix = new THREE.Matrix4().makeTranslation(x, 1.5, z);
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
              new URL("@/assets/game/items/E/strawberry_shortcake/strawberry_shortcake.glb", import.meta.url),
              new URL("@/assets/game/items/E/chocolate_bar/chocolate_bar.glb", import.meta.url)
            ],
            D: [
              new URL("@/assets/game/items/D/cotton_candy/cottoncandy.glb", import.meta.url),
              new URL("@/assets/game/items/D/popcorn/popcorn.glb", import.meta.url)
            ],
            C: [
              new URL("@/assets/game/items/C/candy_cane/candycane.glb", import.meta.url),
              new URL("@/assets/game/items/C/chips/chips.glb", import.meta.url),
            ],
            B: [
              new URL("@/assets/game/items/B/apple/apple.glb", import.meta.url),
              new URL("@/assets/game/items/B/banana/banana.glb", import.meta.url),
            ],
            A: [
              new URL("@/assets/game/items/A/ginger/ginger.glb", import.meta.url),
              new URL("@/assets/game/items/A/lemon/lemon.glb", import.meta.url)
            ],
          };

          const randomModelPath = new URL(
            itemPaths[tile][Math.random() > 0.5 ? 0 : 1],
            import.meta.url
          ).href;

          loadCachedModel(randomModelPath).then((model) => {
            const item = model.clone(); // Clone to avoid modifying the cached model
            if (randomModelPath.includes('chocolate_bar')) {
              item.position.set(x - 2, 0.75, z);
              item.scale.set(0.2, 0.2, 0.2);
            } else {
              item.position.set(x - 2, 0.5, z);
              item.scale.set(0.5, 0.5, 0.5);
            }
            scene.add(item);
          });
          break;

        default:
          // Treat as ground by default
          const defaultGroundMatrix = new THREE.Matrix4().makeTranslation(x, 0, z);
          groundMesh.setMatrixAt(groundIndex++, defaultGroundMatrix);
      }
    });
  });

  // Add instanced meshes to the scene
  groundMesh.instanceMatrix.needsUpdate = true;
  wallMesh.instanceMatrix.needsUpdate = true;
  scene.add(groundMesh);
  scene.add(wallMesh);
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

onMounted(async () => {
  try {
    await gameStore.fetchGameStatus()
  } catch (error) {
    console.error('Error fetching game status:', error)
  }

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
        console.log('FROM PLAYER POSITON: ', message.feedback)
        await handleCharacters(message.feedback)
        break
    }
  })

  subscribeTo(`/ingame/${lobbyId}`, async (messageValidation: IMessageDTD) => {
    console.log(messageValidation.type)
    switch (messageValidation.type) {
      case 'playerMoveValidation':
        const playerPosition: any = messageValidation.feedback

        if (playerPosition.playerName === sessionStorage.getItem('myName')) {
            moveCamera();
        }

        break
    }
  })

  if (threeContainer.value) {
    threeContainer.value.appendChild(renderer.domElement)
  }
  const map: string[] | undefined = gameStore.gameState.gamedata.playmap?.map
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
  if (map) {
    loadMap(map)
  } else {
    console.error('No map found')
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
})

</script>

<template>
  <div ref="threeContainer" id="app" class="gameContainer relative z-20"></div>
  <div class="absolute z-50 top-0 flex justify-between w-full items-center p-8">
    <div
      id="items"
      class="ml-4 p-8 bg-black text-white border-2 border-white rounded-lg shadow-lg z-20 w-45 h-45"
    >
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



  <div v-if="showSettings" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h3 class="text-2xl font-bold mb-4">Lautstärke</h3>
      Musik <input type="range" class="form-control-range" id="formControlRange" v-model="musicVolume"> {{ musicVolume }}%
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

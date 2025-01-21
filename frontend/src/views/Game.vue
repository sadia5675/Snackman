<script setup lang="ts">
/*Basic Configuration for Scene(=Container), Camera and Rendering for Playground*/
import * as THREE from 'three'
import {PointLight, PointLightHelper, WebGLRenderer} from 'three'
import {computed, onMounted, onUnmounted, ref, watch} from 'vue'
import {PointerLockControls} from 'three/addons/controls/PointerLockControls.js'
import {useGameStore} from '@/stores/game/gamestore'
import type {IMessageDTD} from '@/stores/game/dtd/IMessageDTD'
import { sendMessage, stompClient, subscribeTo } from '@/config/stompWebsocket'
import {useRoute} from 'vue-router'
import type {IPlayerPositionDTD} from '@/stores/game/dtd/IPlayerPositionDTD'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import type {ICharacterDTD} from '@/stores/game/dtd/ICharacterDTD'
import type {IChickenPositionDTD} from '@/stores/game/dtd/IChickenPositionDTD'
import Modal from '@/components/Modal.vue'
import {Playerrole} from '@/stores/game/dtd/EPlayerrole';
import router from '@/router';
import {useThemeStore} from '@/stores/themes/themeStore';
import {
  getAppropriateScaleNumberThemeCharacter,
  getAppropriateYoffsetForThemeCharacter,
} from '@/stores/themes/themeModelHelper'


const themeStore = useThemeStore();
import type { IChickenDTD } from '@/stores/game/dtd/IChickenDTD'
import type { Message } from 'postcss'

const restUrl: string = '/api/game';
const gameStore = useGameStore()
const route = useRoute()
const lobbyId = route.params.id.toString()
const loadingChickens = new Set<string>(); // Tracke laufende Ladevorgänge
const chickens = new Map<string, THREE.Object3D>(); // ChickenID als Key und Model-ID als Value
const cameraOffset = new THREE.Vector3(0, 5, -10); // Offset der Kamera relativ zum Chicken
let nextPosition: THREE.Vector3
let lastSend: number = 0
//let lastMoveValid = false;
const players = new Map<string, number>(); // Spieler mit Namen als Key auf Character Model
const loadingPlayers = new Map<string, boolean>(); // Spielername -> Ladevorgang
const rotatingItems: THREE.Object3D[] = []; // Items, die sich drehen
const map = ref<string[] | undefined>(undefined);
const soundList: THREE.Audio[] = []

//Movement
let movingForward: boolean,
    movingBackward: boolean,
    movingLeft: boolean,
    movingRight: boolean = false
let sprintIntervalId: number | null = null;
const slowMovementSpeed = 2
const fastMovementSpeed = 4
let movementSpeed = slowMovementSpeed

const showSettings = ref(false)
const musicVolume = ref(50)
const effectVolume = ref(50)
const spawnX = ref(1);
const spawnZ = ref(2);

//für Ingame Spielernamen
const playerNames = new Map<string, THREE.Sprite>();

//für HuD
//const life = ref(2) //startlife
//const maxLife = ref(3)
//const collectedItems = ref<string[]>([]) //Gesammelte Items

// für springen
let jumpChargeTime = 0  // Zeit, die die Leertaste gedrückt wurde
const maxJumpChargeTime = 1.5 // Maximale Ladezeit für großen Sprung in Sekunden
let isChargingJump = false // Ob der Spieler einen Sprung auflädt
let isJumping = false // Verhindert doppeltes Springen
let isValidatingJump = false
let jumpVelocity = 0 // Vertikale Geschwindigkeit des Sprungs
const gravity = -9.8 // Schwerkraft
const minJumpSpeed = 5 // Startgeschwindigkeit des kleinen Sprung
const maxJumpSpeed = 8 //Geschwindigkeit für großen Sprung

// Controller-Index (wenn ein Controller verbunden ist)
let controllerIndex: number | null = null;

// Deadzone für die Achsen, um kleine Bewegungen zu ignorieren
const deadzone = 0.2;

// Event-Listener für Controller-Verbindung
window.addEventListener("gamepadconnected", (event) => {
  console.log("Controller verbunden:", event.gamepad.id);
  controllerIndex = event.gamepad.index;
});

// Event-Listener für Controller-Trennung
window.addEventListener("gamepaddisconnected", (event) => {
  console.log("Controller getrennt:", event.gamepad.id);
  if (controllerIndex === event.gamepad.index) {
    controllerIndex = null;
  }
});

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

const collisionMessage = ref<string | null>(null);

function showCollisionMessage(message: string) {
  collisionMessage.value = message;
  setTimeout(() => {
    collisionMessage.value = null; // nach 5 Sekunden weg
  }, 5000);
}

// Aktuelles Leben des Charakters
const snackmanLife = computed(() => currentCharacter.value?.life ?? 0);

watch(
    () => currentCharacter.value?.life,
    (newLife, oldLife) => {
      if (newLife !== oldLife) {
        console.log(`Life changed from ${oldLife} to ${newLife}`);
      }
    }
);

// Ghost-Touches aktualisieren
const ghostTouch = computed(() => currentCharacter.value?.touchcount ?? 0);

watch(
    () => currentCharacter.value?.touchcount,
    (newTouches, oldTouches) => {
      if (newTouches !== oldTouches) {
        console.log(`Ghost-Touches changed from ${oldTouches} to ${newTouches}`);
      }
    }
);

// Maximales Leben des Charakters
const snackmanMaxLife = computed(() => gameStore.gameState.gamedata.snackmanMaxLife ?? 0);

const collectedItems = ref<string[]>([]) //Gesammelte Items

// Maximale Punkte
const snackmanMaxPoints = computed(() => gameStore.gameState.gamedata.maxPointsSnackman ?? 0);
const requiredPointsToWin = computed(() => snackmanMaxPoints.value / 2);

// Aktuelle Punkte
const snackmanPoints = computed(() => currentCharacter.value?.currentPoints ?? 0);

watch(
  () => currentCharacter.value?.currentPoints,
  (newPoints, oldPoints) => {
    if (newPoints !== oldPoints) {
      console.log(`Points changed from ${oldPoints} to ${newPoints}`);
      // Zusätzliche Logik, z. B. Punkte-Animationen
    }
  }
);
// Role die gewonnen hat
const winnerRole = computed(() => gameStore.gameState.gamedata.winnerRole ?? null);


function addItem(itemName: string) {
  collectedItems.value.push(itemName)
}

function createSceneCameraRendererControlsClockListener() {
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.outerWidth, 0.001, 1000)
  //camera.position.set(1, 1, 2)
  camera.rotation.order = "YXZ"

  const listener = new THREE.AudioListener();
  camera.add(listener);

  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const pointerLockControls = new PointerLockControls(camera, renderer.domElement)
  pointerLockControls.pointerSpeed = 1

  const clock = new THREE.Clock()
  return {scene, camera, renderer, pointerLockControls, clock, listener}
}

function handleKeyUpEvent (e: KeyboardEvent) {
  switch (e.code) {
    case 'ShiftLeft':
      switchSprint()
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
      if (gameStore.jumpAllowed) {
        isChargingJump = true;
      }
      break;
  }
}

function handleResize() {
  //renderer und somit auch die komplette szene wird auf neuen Browserfenster bereich angepasst
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  //Durch das Anpassen der ".aspect" bleibt die FOV auch bei Änderung der Fenstergröße konstant
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}

function handleKeyDownEvent(e : KeyboardEvent){
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
}

function registerListeners(window: Window, renderer: WebGLRenderer) {
  renderer.domElement.addEventListener('click', (e) => {
    renderer.domElement.requestPointerLock()
  })



  window.addEventListener('resize', handleResize)

  document.addEventListener('pointerlockchange', (e) => {
    if (!document.pointerLockElement) {
      showSettings.value = true;
    } else {
      showSettings.value = false;
    }
  })

  window.addEventListener('keydown', handleKeyUpEvent)
  window.addEventListener('keyup', handleKeyDownEvent)
}

// Funktion zur Abfrage der Gamepad-Eingaben
function handleGamepadInput(delta: number) {
  if (controllerIndex !== null) {
    const gamepad = navigator.getGamepads()[controllerIndex];
    if (gamepad) {
      // Rechter Joystick (Axes 2 und 3)
      let rightStickX = gamepad.axes[2]; // Horizontal (Rotation Y)
      let rightStickY = gamepad.axes[3]; // Vertikal (Rotation X oder Zoom)

      if (Math.abs(rightStickX) < deadzone) rightStickX = 0;
      if (Math.abs(rightStickY) < deadzone) rightStickY = 0;

      // Rotation der Kamera (Y-Achse, Horizontal)
      camera.rotation.y -= rightStickX * delta * 2.5; // Empfindlichkeit anpassen

      // Optional: Vertikale Kamera-Rotation
      const maxVerticalAngle = Math.PI / 4; // Begrenze vertikale Rotation (z.B. +/- 45°)
      camera.rotation.x = Math.max(
        -maxVerticalAngle,
        Math.min(maxVerticalAngle, camera.rotation.x - rightStickY * delta * 2.5)
      );
    }
  }
}


function updateGamepadInput() {
  if (controllerIndex === null) return;

  const gamepad = navigator.getGamepads()[controllerIndex];
  if (!gamepad) return;

  // Bewegungen (linker Stick)
  const deadzone = 0.2;
  const leftStickX = gamepad.axes[0]; // Linker Stick X
  const leftStickY = gamepad.axes[1]; // Linker Stick Y

  movingForward = leftStickY < -deadzone;
  movingBackward = leftStickY > deadzone;
  movingLeft = leftStickX < -deadzone;
  movingRight = leftStickX > deadzone;

  // Springen (X-Taste)
  isChargingJump = gamepad.buttons[0].pressed; // Button 0 = Kreuz (X auf PS5)

  console.log(`Bewegen: Vor:${movingForward}, Zurück:${movingBackward}, Links:${movingLeft}, Rechts:${movingRight}`);
  console.log(`Springen: ${isChargingJump}`);
}

//Diese Funktion lädt die Hintergrundmusik
function loadMusic() {
  const audioLoader = new THREE.AudioLoader();

  const walkingSound = new THREE.Audio(listener);
  const walkingSoundURL = new URL(`@/assets/game/realistic/sounds/walking.mp3`, import.meta.url).href;

  audioLoader.load(walkingSoundURL, function (buffer) {
    walkingSound.setBuffer(buffer);
    walkingSound.setLoop(false);
    walkingSound.setVolume(effectVolume.value / 100);
  });
  soundList.push(walkingSound);

  const hitSound = new THREE.Audio(listener);
  const hitSoundURL = new URL(`@/assets/game/realistic/sounds/hit.mp3`, import.meta.url).href;

  audioLoader.load(hitSoundURL, function (buffer) {
    hitSound.setBuffer(buffer);
    hitSound.setLoop(false);
    hitSound.setVolume(effectVolume.value / 100);
  });
  soundList.push(hitSound);

  const jumpSound = new THREE.Audio(listener);
  const jumpSoundURL = new URL(`@/assets/game/realistic/sounds/jumpo.mp3`, import.meta.url).href;

  audioLoader.load(jumpSoundURL, function (buffer) {
    jumpSound.setBuffer(buffer);
    jumpSound.setLoop(false);
    jumpSound.setVolume(effectVolume.value / 100);
  });
  soundList.push(jumpSound);

  return soundList
}

const {scene, camera, renderer, pointerLockControls, clock, listener} =
  createSceneCameraRendererControlsClockListener()

/*
let controllLocked = watch(pointerLockControls, async (oldValue, newValue) => {
  console.log("CHANGE");
  newValue.isLocked;
}); */

registerListeners(window, renderer)
let [walkingSound, hitSound, jumpSound] = loadMusic()
watch(effectVolume, (newVolume) => {
  walkingSound.setVolume(newVolume / 100);
  hitSound.setVolume(newVolume / 100);
  jumpSound.setVolume(newVolume / 100);
})


const threeContainer = ref<null | HTMLElement>(null)


//Ball
const sphereGeometry = new THREE.SphereGeometry(0.5, 30, 30)
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

const pointLight = new THREE.PointLight(0xffffff, 500, 10000)
pointLight.position.set(25, 20, 5) //extra Lightning for the ball
pointLight.lookAt(sphere.position)
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 2048;
pointLight.shadow.mapSize.height = 2048;
scene.add(pointLight)

function animate() {
  setTimeout(function () {
    requestAnimationFrame(animate)
  }, 1000 / 60);

  rotatingItems.forEach((item) => {
    item.rotation.y += 0.01
  })


  renderer.render(scene, camera)
  const delta = clock.getDelta()
  cameraPositionBewegen(delta)
  // Gamepad-Eingaben verarbeiten
  handleGamepadInput(delta);
}

async function validateJump(checkChargeJump: boolean): Promise<boolean> {
  const playerId: string = currentPlayer.value?.name ?? "";
  const jumpCheckUrl: string = checkChargeJump ? 'isValidJump/charge' : 'isValidJump/normal';

  if (playerId === "") {
    console.error('Error: Unable to validate jump, player ID is missing');
    return false;
  }

  try {
    // Perform the fetch request
    const response: Response = await fetch(`${restUrl}/ingame/${lobbyId}/${playerId}/${jumpCheckUrl}`);

    // Check if the response is successful
    if (!response.ok) {
      console.error('Error: Unable to validate jump', response.statusText);
      return false; // Return false if the backend call fails
    }

    // Parse the JSON response
    const isValid: boolean = await response.json();
    console.log('Jump backend validation:', isValid);

    // Return the parsed value
    return isValid;
  } catch (error) {
    console.error('Error while validating jump:', error);
    return false; // Return false in case of an error
  }
}

async function switchSprint() {
  if (isSprinting()) {
    stopSprinting()
  } else {
    const sprintIsValid = await validateSprint()
    if (sprintIsValid) {
      movementSpeed = fastMovementSpeed

      sprintIntervalId = setInterval(async () => {
        const sprintIsValid = await validateSprint()
        if (!sprintIsValid) {
          stopSprinting()
        }
      }, 500)
    }
  }
}

async function validateSprint(): Promise<boolean> {
  const playerId: string = currentPlayer.value?.name ?? "";

  if (playerId === "") {
    console.error('Error: Unable to validate sprint, player ID is missing');
    return false;
  }

  try {
    // Perform the fetch request
    const response: Response = await fetch(`${restUrl}/ingame/${lobbyId}/${playerId}/isValidSprint`);

    // Check if the response is successful
    if (!response.ok) {
      console.error('Error: Unable to validate sprint', response.statusText);
      return false; // Return false if the backend call fails
    }

    // Parse the JSON response
    const isValid: boolean = await response.json();
    console.log('Sprint backend validation:', isValid);

    // Return the parsed value
    return isValid;
  } catch (error) {
    console.error('Error while validating sprint:', error);
    return false; // Return false in case of an error
  }
}

function isSprinting() {
  return movementSpeed === fastMovementSpeed
}

function stopSprinting() {
  movementSpeed = slowMovementSpeed

  if (sprintIntervalId) {
    clearInterval(sprintIntervalId)
    sprintIntervalId = null
  }
}


// Funktion, die den Sprung auslöst, wenn die 2 Sekunden um sind
function triggerHighJumpAfterChargeTime(delta: number) {
  if (isValidatingJump) return

  if (isChargingJump) {
    // Wenn die Leertaste gedrückt wird, erhöhe die Ladezeit

    jumpChargeTime += delta; // Ladezeit hochzählen

    // Der Ladebalken wird hiermit auf dem Bildschirm sichtbar geladen
    const jumpBarContainer = document.getElementById('jumpBarContainer');
    if (jumpBarContainer?.classList.contains('hidden')) {
      jumpBarContainer?.classList.remove('hidden');
    }


    if (jumpChargeTime >= maxJumpChargeTime) {
      isValidatingJump = true;
      validateJump(true).then((valid) => {
        jumpChargeTime = 0; // Ladezeit zurücksetzen
        isChargingJump = false; // Leertaste kann losgelassen werden
        if (valid) {
          // Wenn die Ladezeit 2 Sekunden überschreitet, führe den Sprung aus
          jumpVelocity = maxJumpSpeed;  // Erhöhe die Sprunggeschwindigkeit für den großen Sprung
          isJumping = true; // Der Spieler springt jetzt
          walkingSound.stop()
          jumpSound.play()
          console.log(" Großer Sprung ausgelöst mit Geschwindigkeit:", jumpVelocity);
        }
        isValidatingJump = false;
      })
    }
  } else if (jumpChargeTime > 0 && jumpChargeTime < maxJumpChargeTime && !isJumping) {
    isValidatingJump = true;
    validateJump(false).then((valid) => {
      jumpChargeTime = 0;
      walkingSound.stop()
      jumpSound.play()
      if (valid) {
        jumpVelocity = minJumpSpeed;  // Setze die Geschwindigkeit für den kleinen Sprung
        isJumping = true; // Sprung aktivieren
        console.log("Kleiner Sprung ausgelöst mit Geschwindigkeit:", jumpVelocity);
      }
      isValidatingJump = false;
    })
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

  if (jumpBar) {

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
    triggerHighJumpAfterChargeTime(delta);
  }
}

function cameraPositionBewegen(delta: number) {
  const cameraViewDirection = new THREE.Vector3();
  camera.getWorldDirection(cameraViewDirection);
  updateGamepadInput()
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

function checkCollision(nextPosition: THREE.Vector3): boolean {
  const collisionDistance = 0.3; // Mindestabstand für Kollision
  const myName = sessionStorage.getItem("myName");

  for (const [name, character] of Object.entries(gameStore.gameState.gamedata.characters)) {
    if (name !== myName) {
      const characterPosition = new THREE.Vector3(character.posX, 1, character.posY);
      const distance = nextPosition.distanceTo(characterPosition);

      if (distance < collisionDistance) {
        return true; // Bewegung blockiert
      }
    }
  }
  return false; // Keine Kollision
}

function validatePosition(nextPosition: THREE.Vector3) {
  const currentTime: number = Date.now()


  if (checkCollision(nextPosition)) {
    console.log("Movement blocked due to collision.");
    return;
  }

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
  const snackmanModel = themeStore.currentTheme?.character.snackman;
  const ghostModel = themeStore.currentTheme?.character.ghost;

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
    const playersList = gameStore.gameState.gamedata?.players;
    let playerData = undefined;
    if (playersList) {
      for (const player of playersList) {
        if (player.name == playerPosition.playerName) {
          playerData = player;
          break;
        }
      }
    }

    if (!players.has(playerPosition.playerName) && !loadingPlayers.get(playerPosition.playerName)) {
      //const snackmanModelURL = new URL('@/assets/game/realistic/snackman/snackman.glb', import.meta.url).href;
      loadingPlayers.set(playerPosition.playerName, true);
      let modelPath;
      if (playerData?.playerrole == Playerrole.SNACKMAN) {
        modelPath = snackmanModel;
      } else {
        modelPath = ghostModel;
      }
      if (modelPath) {
        let loadingPath: string;
        let scaleNumber: number
        if (typeof modelPath === 'string') {
          loadingPath = modelPath
          scaleNumber = getAppropriateScaleNumberThemeCharacter(
            playerData?.playerrole,
            themeStore.selectedTheme.toString(),
          )
        } else {
          loadingPath = modelPath.path;
          scaleNumber = modelPath.scale;
        }
        modelLoader.load(loadingPath, (gltf) => {
          const model = gltf.scene;
          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
            }
          });
          model.scale.set(scaleNumber, scaleNumber, scaleNumber);
          players.set(playerPosition.playerName, model.id);
          scene.add(model);

          const sprite = createNameSprite(playerPosition.playerName);
          sprite.position.set(playerPosition.x, scaleNumber + 0.3, playerPosition.y);
          playerNames.set(playerPosition.playerName, sprite);
          scene.add(sprite);

          model.position.set(
            playerPosition.x,
            1 +
            getAppropriateYoffsetForThemeCharacter(
              playerData?.playerrole,
              themeStore.selectedTheme.toString(),
            ),
            playerPosition.y,
          )
          model.rotation.y = (playerPosition.angle * Math.PI * 2) + adjustAngle;

          loadingPlayers.delete(playerPosition.playerName);
        });
      } else {
        console.error("Kein Modell gefunden für", playerPosition.playerName);
      }
    } else {
      //Modell updaten
      const index: number | undefined = players.get(playerPosition.playerName)
      if (index) {
        const model = scene.getObjectById(index)
        const sprite = playerNames.get(playerPosition.playerName)
        if (model && sprite) {
          const messungsBox = new THREE.Box3()
          const breite = new THREE.Vector3()
          messungsBox.getSize(breite)
          messungsBox.expandByObject(model)
          model.position.set(
            playerPosition.x - breite.x / 2,
            playerPosition.z +
            getAppropriateYoffsetForThemeCharacter(
              playerData?.playerrole,
              themeStore.selectedTheme.toString(),
            ),
            playerPosition.y,
          )
          sprite.position.set(playerPosition.x, 1.5, playerPosition.y);
          model.rotation.y = playerPosition.angle + adjustAngle
        }
      }
    }
  })
}

function createNameSprite(playerName: string) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const fontSize = 24;

  if (!context) return new THREE.Sprite();

  context.fillStyle = 'rgba(0, 0, 0, 0.6)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = `bold ${fontSize}px Arial`;
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.strokeStyle = 'black';
  context.lineWidth = 6;

  canvas.width = 256;
  canvas.height = 64;
  context.fillText(playerName, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  const spriteMaterial = new THREE.SpriteMaterial({map: texture});
  const sprite = new THREE.Sprite(spriteMaterial);

  sprite.scale.set(1.2, 0.5, 1);
  return sprite;
}


const textureCache = new Map<string, THREE.Texture>();

function getCachedTexture(url: string): THREE.Texture {
  if (textureCache.has(url)) return textureCache.get(url)!;

  const texture = new THREE.TextureLoader().load(url);
  textureCache.set(url, texture);
  return texture;
}

function surpriseChicken(posX: number, posY : number) {
    const loader = new GLTFLoader();
    const supriseEgg = new URL("@/assets/game/items/kinder_surprise_egg/surprise_egg.glb", import.meta.url).href;
    loader.load(supriseEgg, (gltf) => {
      const model= gltf.scene;
      model.position.set(posX,1,posY);
      model.scale.set(1, 1, 1)
      scene.add(model);
      rotatingItems.push(model);
      model.traverse((child) =>{
        if(child instanceof THREE.Mesh){
          child.castShadow = true;
        }
      })
      console.log("Surprise egg added at (${posX}, ${posY})");
    }
    );
    console.log("Surprise egg added at",posX, " ",posY);
}

function loadMap(map: string[], selectedTheme: { ground: string; wall: string }) {
  const groundGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wallGeometry = new THREE.BoxGeometry(1, 1, 1);
  const groundTexture = getCachedTexture(selectedTheme.ground);
  const wallTexture = getCachedTexture(selectedTheme.wall);
  const groundMaterial = new THREE.MeshStandardMaterial({map: groundTexture});
  const wallMaterial = new THREE.MeshStandardMaterial({map: wallTexture});

  const mapOffset = 0.5;

  // Instanced meshes for ground and walls
  const groundMesh = new THREE.InstancedMesh(groundGeometry, groundMaterial, map.length * map[0].length);
  groundMesh.receiveShadow = true;
  const wallMesh = new THREE.InstancedMesh(wallGeometry, wallMaterial, map.length * map[0].length);
  wallMesh.castShadow = true;

  let groundIndex = 0;
  let wallIndex = 0;

  // Model cache for items
  const modelCache = new Map<string, Promise<THREE.Group>>();

  function loadCachedModel(url: string): Promise<THREE.Group> {
    if (!modelCache.has(url)) {
      modelCache.set(url, new Promise((resolve, reject) => {
        new GLTFLoader().load(
          url,
          (gltf) => {
            const model = gltf.scene;
            model.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.castShadow = true;
              }
            });
            resolve(model);
          },
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
          wallMesh.receiveShadow = true;
          const wallMatrix = new THREE.Matrix4().makeTranslation(x, 1, z);
          wallMesh.setMatrixAt(wallIndex++, wallMatrix);
          break;

        case ' ': // Ground
          const groundMatrix = new THREE.Matrix4().makeTranslation(x, 0, z);
          groundMesh.castShadow = true;
          groundMesh.setMatrixAt(groundIndex++, groundMatrix);
          break;

        case 'E': // Item E
        case 'D': // Item D
        case 'C': // Item C
        case 'B': // Item B
        case 'A': // Item A
        case '1': // Item 1
        case '2': // Item 2
        case '3': // Item 3
        case '4': // Item 4
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
            '1': [
              new URL("@/assets/game/items/1/pedalo.glb", import.meta.url)
            ],
            '2': [
              new URL("@/assets/game/items/2/shields.glb", import.meta.url)
            ],
            '3': [
              new URL("@/assets/game/items/3/doublepoint.glb", import.meta.url)
            ],
            '4': [
              new URL("@/assets/game/items/4/hearts.glb", import.meta.url)
            ],
            'kinderSupriseEgg':[
              new URL("@assets/game/items/kinder_surprise_egg/kinder_surprise_egg.glb", import.meta.url)
            ],

          };

          const randomModelPath = new URL(
            itemPaths[tile][0],
            import.meta.url
          ).href;
          loadCachedModel(randomModelPath).then((model) => {
            const item = model.clone(); // Clone to avoid modifying the cached model

            if (randomModelPath.includes('chocolatebar')) {
              item.position.set(x, 0.75, z);
              item.scale.set(0.1, 0.1, 0.1);
            } else if (randomModelPath.includes('strawberry_shortcake')) {
              item.position.set(x, 0.5, z);
              item.scale.set(0.25, 0.25, 0.25);
            } else if (randomModelPath.includes('cottoncandy')) {
              item.position.set(x, 0.75, z);
              item.scale.set(0.2, 0.2, 0.2);
            } else if (randomModelPath.includes('candy_cane')) {
              item.position.set(x, 0.8, z);
              item.scale.set(0.07, 0.07, 0.07);
            } else if (randomModelPath.includes('chips')) {
              item.position.set(x, 0.8, z);
              item.scale.set(0.1, 0.1, 0.1);
            } else if (randomModelPath.includes('pedalo')) {
              item.position.set(x, 0.75, z);
              item.rotateZ(Math.PI / 4);
              item.scale.set(0.1, 0.1, 0.1);
            } else if (randomModelPath.includes('shields')) {
              item.position.set(x, 0.8, z);
              item.scale.set(0.1, 0.1, 0.1);
            } else if (randomModelPath.includes('doublepoint')) {
              item.position.set(x, 0.7, z);
              item.scale.set(1.5, 1.5, 1.5)
            } else if (randomModelPath.includes('hearts')) {
              item.position.set(x, 0.65, z);
              item.scale.set(0.03, 0.03, 0.03)
            }else if(randomModelPath.includes('supriseEgg')){
              item.scale.set(0.03, 0.03, 0.03)
              item.position.set(x, 0.6, z);
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

function addSkybox(scene: THREE.Scene, skyBoxPath: string | {
  right: string;
  left: string;
  top: string;
  bottom: string;
  front: string;
  back: string
}) {
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
  if (typeof skyBoxPath === 'string') {
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
  } else {
    const materials = [
      new THREE.MeshBasicMaterial({map: loader.load(skyBoxPath.right), side: THREE.BackSide}),
      new THREE.MeshBasicMaterial({map: loader.load(skyBoxPath.left), side: THREE.BackSide}),
      new THREE.MeshBasicMaterial({map: loader.load(skyBoxPath.top), side: THREE.BackSide}),
      new THREE.MeshBasicMaterial({map: loader.load(skyBoxPath.bottom), side: THREE.BackSide}),
      new THREE.MeshBasicMaterial({map: loader.load(skyBoxPath.front), side: THREE.BackSide}),
      new THREE.MeshBasicMaterial({map: loader.load(skyBoxPath.back), side: THREE.BackSide}),
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
function renderChicken(chickenData:  IChickenDTD[]){
  console.log("INSIDE RENDER: ", chickenData);
  const loader =new GLTFLoader();//@/assets/game/realistic/snackman/snackman.glb
  //Überprüfung ob es eine chicken id gibt wenn nicht wird ein erstellt und wenn ja wir die position aktualsiert
  chickenData.forEach((chicken)=>{
    console.log(`Chicken-Daten: ID=${chicken.id}, X=${chicken.posX}, Y=${chicken.posY}`);
    if (!chicken.id) {
      console.warn("Chicken hat keine ID:", chicken.id);
      return; // Weiterverarbeitung abbrechen
    }
    if (!chickens.has(chicken.id)&&!loadingChickens .has(chicken.id)) {
      loadingChickens .add(chicken.id);
      console.log(`Neues Chicken wird erstellt für die ID: ${chicken.id}`);
      const chickenModelURL =new URL('@/assets/chicken/newerchicken.glb', import.meta.url).href;
      console.log("Chcieken url", chickenModelURL);
      console.log("Neues Chicken wird erstellt:", chicken.id);
      loader.load(chickenModelURL, (gltf: { scene: THREE.Group }) => {
        const model = gltf.scene;
          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
            }
          });
          model.scale.set(0.5, 0.5, 0.5);
        model.name = chicken.id;
        chickens.set(chicken.id, model);
        scene.add(model);
        model.position.set(chicken.posX, 1, chicken.posY);
        console.log(`Neues Chicken hinzugefügt: ID=${chicken.id}, Position=${chicken.posX},${chicken.posY}`);
        loadingChickens .delete(chicken.id);
      },
        undefined,(error) => {
            console.error("Fehler beim Laden des Chicken-Modells:", error);
        }
      );
    } else {
      console.log("Chicken bereits vorhanden. Aktualisiere Position:", chicken.id);
      const existingChickenModel = chickens.get(chicken.id)
      if (existingChickenModel) {
        moveChicken(existingChickenModel, chicken);
        console.log(`Position des Chickens aktualisiert: ID=${chicken.id}, Position=${chicken.posX},${chicken.posY}`);

      }
    }
  })

}

function moveChicken(modellChicken: THREE.Object3D, chickenData: IChickenDTD) {
  const targetPosition = new THREE.Vector3(chickenData.posY + 0.5, .5, chickenData.posX + 0.5);
  const currentPosition = modellChicken.position;
  modellChicken.rotation.y = (chickenData.angle / 360) * (Math.PI * 2);

  console.log("Aktuelle Position:", currentPosition);
  console.log("Zielposition:", targetPosition);
  // Bewegung in Richtung Zielpunkt

  const direction = targetPosition.clone().sub(currentPosition).normalize();
  const chickenSpeed = 1; // Geschwindigkeit des Chickens (Einheiten/Sekunde)
  const delta = clock.getDelta();


  console.log('Richtung:', direction);

  console.log("Neue Position des Chicken-Modells:", modellChicken.position);

  if (currentPosition.distanceTo(targetPosition) < chickenSpeed * delta) {
    const movement = direction.multiplyScalar(chickenSpeed * delta);
    modellChicken.position.add(movement);
    console.log('Bewegung:', movement);
    console.log('Bewegt zu:', modellChicken.position);
  } else {
    modellChicken.position.set(targetPosition.x, .5, targetPosition.z);
    console.log('Ziel erreicht. Wechsel zu nächstem Punkt:', targetPosition);
  }


  /*const targetRotation = THREE.MathUtils.degToRad(chickenData[nextIndex].angle);
  const currentRotation = THREE.MathUtils.degToRad(chickenData[currentIndex].angle);

  let lerpFactor = 0; // Standardmäßig keine Interpolation
  if (currentDistance > totalDistance * 0.75) {
    // Erste 1/4 der Strecke: Bleibt bei der aktuellen Rotation
    lerpFactor = 0;
  } else if (currentDistance < totalDistance * 0.25) {
    // Letzte 1/4 der Strecke: Zielrotation erreicht
    lerpFactor = 1;
  } else {
    // Zwischen 1/4 und 3/4 der Strecke: Interpolation
    const progress = (totalDistance - currentDistance) / totalDistance; // Fortschritt zwischen 0 und 1
    lerpFactor = (progress - 0.25) / 0.5; // Normierung auf den Bereich 0.25 bis 0.75
  }

  // Interpoliere die Rotation basierend auf lerpFactor
  modellChicken.rotation.y = THREE.MathUtils.lerp(currentRotation, targetRotation, lerpFactor);*/

  console.log("Aktuelle Rotation (in Grad):", THREE.MathUtils.radToDeg(modellChicken.rotation.y));
}

function followChicken(camera: THREE.Camera, chicken: THREE.Group, offset: THREE.Vector3) {
  if (chicken) {
    // Kamera-Position basierend auf Chicken-Position und Offset
    const targetPosition = chicken.position.clone().add(offset);
    camera.position.lerp(targetPosition, 0.1); // Sanfte Bewegung der Kamera
    camera.lookAt(chicken.position); // Kamera auf das Chicken ausrichten
    console.log("Kamera folgt Chicken:", chicken.position);
  }
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

function removeItemFromSceneByPosition(posX: number, posY: number, itemName?: string) {
  const itemToRemove = rotatingItems.find(
    (item) =>
      Math.abs(item.position.x - posX) <= 0.5 && Math.abs(item.position.z - posY) <= 0.5
  );

  if (itemToRemove) {
    console.log("Item to remove: ", itemName);
    if (itemName == "Speed Boost") {
      // increase speed boost for ghosts only for 10 seconds
      if (currentPlayer.value?.playerrole == Playerrole.GHOST) {
        console.log("Speed Boost collected by Ghost, increasing speed");
        movementSpeed = fastMovementSpeed

        if (sprintIntervalId) {
          clearInterval(sprintIntervalId)
        }
        sprintIntervalId = setInterval(async () => {
          const sprintIsValid = await validateSprint()
          if (!sprintIsValid) {
            stopSprinting()
          }
        }, 5000)
      }
    }
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
    camera.position.set(newX + 0.5, 1, newZ + 0.5);
  }
});


async function handleChickenPositions(data: IChickenDTD[]) {
  console.log("Processing Chicken Positions:", data);
  let chickenPositions: IChickenDTD[] = [];
  data.forEach(chicken => {
    console.log(`Chicken-Daten: ID=${chicken.id}, X=${chicken.posX}, Y=${chicken.posY}`);

    chickenPositions.push({
      id: chicken.id,
      posX: chicken.posX,
      posY: chicken.posY,
      angle: chicken.angle,
      eggList: chicken.eggList || [],
      currentCalorie: chicken.currentCalorie
    });
    removeItemFromSceneByPosition(chicken.posY, chicken.posX);
    console.log(`Position X=${chicken.posX}, Y=${chicken.posY}`);
  });
  renderChicken(chickenPositions)
}

onUnmounted(async () => {
  console.log("UNMOUNTED UNMOUNTED")
  window.removeEventListener('keyup', handleKeyUpEvent);
  window.removeEventListener('keydown',handleKeyDownEvent);
  window.removeEventListener('resize', handleResize);
  renderer.dispose();
  jumpSound.disconnect();
  hitSound.disconnect();
  walkingSound.disconnect();
  camera.remove(listener);
})


onMounted(async () => {
  try {
    await gameStore.fetchGameStatus(lobbyId)
    const playerName = sessionStorage.getItem('myName');
    if (playerName) {
      console.log(playerName)
      await gameStore.getJumpAllowed(playerName, lobbyId);
    }

  } catch (error) {
    console.error('Error fetching game status:', error)
  }
  const spawnPoints = gameStore.gameState.gamedata.spawnPoints;
  console.log("SPAWNS: ", spawnPoints)


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

        if (playerPosition.playerName === sessionStorage.getItem('myName')) {
          nextPosition.set(playerPosition.posX, playerPosition.posZ, playerPosition.posY)
          moveCamera();
        }

        break
    }
  })

  subscribeTo(`/ingame/PlayerKollision/${lobbyId}`, async (message) => {
    switch (message.type) {

      case 'collisionValidation': {
        // tiefe Kopie
        const previousValues = JSON.parse(JSON.stringify(gameStore.gameState.gamedata.characters));
        // aktualiesieren
        gameStore.gameState.gamedata.characters = message.updateCharacters
        gameStore.gameState.gamedata.winnerRole = message.winnerRole
        gameStore.gameState.gamedata.started = message.started

        // für hit/life feed
        for (const [name, characterDetails] of Object.entries(gameStore.gameState.gamedata.characters)) {
          if (name !== currentPlayer.value?.name) {
            // es soll nur ausgegeben werden wenn sich der wert vom alten unterscheidet und der wert nicht 0 ist
            if ((characterDetails.life ?? 0) > 0 && (previousValues[name]?.life ?? null) !== characterDetails.life) {
              showCollisionMessage(`Snackman ${name} has ${characterDetails.life} lifes.`);
            }
            if ((characterDetails.touchcount ?? 0) > 0 && (previousValues[name]?.touchcount ?? null) !== characterDetails.touchcount) {
              showCollisionMessage(`Ghost ${name} has ${characterDetails.touchcount} hits.`);
            }
          }
        }
        // überprüft, ob es ein gewinner gibt und zeigt die ensprechende ansicht
          if (winnerRole.value !== null) {
            setTimeout(() => {
              router.push({ name: 'GameEnd' });
              stompClient.deactivate()
            }, 500);
          }
        break;
      }

      default:
        console.warn("Unerwarteter Nachrichtentyp:", message.type);
        break;
    }
  });


  subscribeTo(`/ingame/${lobbyId}/itemUpdates`, async (message: any) => {
    switch (message.type) {
      case "itemCollected":
        console.log(`collected at{} {}`, message.posX, message.positionY)
        console.log('MESSAGE: ' + message.toString())
        removeItemFromSceneByPosition(message.positionX, message.positionY, message.itemName);
        break;

      default:
        console.warn("Unbekannter Nachrichtentyp:", message.type);
    }
  })

  subscribeTo(`/ingame/${lobbyId}/chicken/eggUpdate`, async (message: any) =>{
    surpriseChicken(3,5);
    console.log("Hier die Koordinaten" , message.positionY, message.positionX);
    console.log("ASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    console.log("Egg Update: ", message);
  })

  subscribeTo(`/ingame/chickenPosition/${lobbyId}`, async (message: any) => {
    console.log("FROM CHICKEN POSITIONS: ", message);
    await handleChickenPositions(message);
  });

  if (threeContainer.value) {
    threeContainer.value.appendChild(renderer.domElement)
  }
  map.value = gameStore.gameState.gamedata.playmap?.map;
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
    loadMap(map.value, {
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

  if (spawnPoints != null) {
    spawnPoints.forEach(spawnPoint => {
      if (sessionStorage.getItem('myName') == spawnPoint.playerName) {
        spawnX.value = Number(spawnPoint.posX);
        spawnZ.value = Number(spawnPoint.posY);
      }
    })
  }
  animate()
})

/*
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
      if (themeStore.currentTheme.skybox) {
        addSkybox(scene, themeStore.currentTheme.skybox);
      } else {
        console.error("Keine Skybox-Daten im aktuellen Theme gefunden");
      }
    }
  }
);
*/


</script>

<template>
  <div ref="threeContainer" id="app" class="gameContainer relative z-20"></div>
  <div class="absolute z-50 top-0 flex justify-between w-full items-center p-8">

    <!-- <div id="items" class="ml-4 p-8 bg-black text-white border-2 border-white rounded-lg shadow-lg z-20 w-45 h-45">
       <div v-if="collectedItems.length > 0">
         {{ collectedItems.join(', ') }}
       </div>
       <div v-else></div>
     </div> -->
    <div id="hud" class="hud absoute text-white font-bold">
      <div v-if="currentPlayer?.playerrole === Playerrole.SNACKMAN" class="flex gap-2">
        <div v-for="index in snackmanMaxLife" :key="index">
          <img v-if="index <= snackmanLife" src="../assets/game/realistic/herz.png" alt="Full Heart" width="40"
               height="40"/>
          <img v-else src="../assets/game/realistic/emptyHerz.png" alt="Empty Heart" width="40" height="40"/>
        </div>
      </div>
      <!-- Punkteanzeige -->
      <div v-if="currentPlayer?.playerrole === Playerrole.SNACKMAN" class="points text-lg mt-2">
        <p>Kalorien: {{ snackmanPoints }} / {{ requiredPointsToWin }}</p>
      </div>
      <!-- TouchCountanzeige -->
      <div v-if="currentPlayer?.playerrole === Playerrole.GHOST" class="points text-lg mt-2">
        <p>Hits: {{ ghostTouch }}</p>
      </div>
    </div>
    <div v-if="collisionMessage" class="fixed bottom-4 left-4 bg-red-400 text-white p-5 rounded-lg shadow-lg z-50">
      {{ collisionMessage }}
    </div>
  </div>

  <!-- Sprung-Ladebalken -->
  <div id="jumpBarContainer"
       class="fixed z-50 bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full max-w-[600px] hidden">
    <!-- Ladebalken -->
    <div class="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
      <div id="jumpBar" class="bg-red-500 h-full transition-all duration-100 ease-in-out" style="width: 0%;">
      </div>
    </div>
  </div>

  <div v-if="showSettings" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h3 class="text-2xl font-bold mb-4">Lautstärke</h3>
      Effekte <input type="range" class="form-control-range" id="formControlRange" v-model="effectVolume">
      {{ effectVolume }}%
      <br>
      <button @click="lockPointer" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Close
      </button>
    </div>
  </div>

</template>

<style scoped></style>

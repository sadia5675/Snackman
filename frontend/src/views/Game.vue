<script setup lang="ts">
/*Basic Configuration for Scene(=Container), Camera and Rendering for Playground*/
import * as THREE from 'three'
import { WebGLRenderer } from 'three'
import { onMounted, ref} from 'vue'
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

const gameStore = useGameStore()

const route = useRoute()
const lobbyId = route.params.id.toString()

let nextPosition: THREE.Vector3
let lastSend: number = 0
const players = new Map<string, number>(); // Spieler mit Namen als Key auf Character Model

let movingForward: boolean,
  movingBackward: boolean,
  movingLeft: boolean,
  movingRight: boolean = false
const slowMovementSpeed = 2
const fastMovementSpeed = 4
let movementSpeed = slowMovementSpeed

//#für HuD
const life = ref(2) //startlife
const maxLife = ref(3)
const collectedItems = ref<string[]>([]) //Gesammelte Items

function addItem(itemName: string) {
  collectedItems.value.push(itemName)
}

function createSceneCameraRendererControlsClock() {
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.outerWidth, 0.1, 1000)
  camera.position.set(1, 1, 2)

  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true

  const pointerLockControls = new PointerLockControls(camera, renderer.domElement)
  pointerLockControls.pointerSpeed = 1

  const clock = new THREE.Clock()
  return { scene, camera, renderer, pointerLockControls, clock }
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
    }
  })
}

const { scene, camera, renderer, pointerLockControls, clock } =
  createSceneCameraRendererControlsClock()
registerListeners(window, renderer)

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
  setTimeout( function() {
    requestAnimationFrame(animate)
  }, 1000 / 60 );
  renderer.render(scene, camera)
  const delta = clock.getDelta()
  cameraPositionBewegen(delta)
}

function cameraPositionBewegen(delta: number) {
  const cameraViewDirection = new THREE.Vector3()
  camera.getWorldDirection(cameraViewDirection)

  // Ignoriere die Y-Komponente, um nur die X-Z-Ebene zu berücksichtigen
  cameraViewDirection.y = 0
  cameraViewDirection.normalize()

  const yPlaneVector = new THREE.Vector3(0, 1, 0)

  nextPosition = camera.position.clone()

  if (movingForward || movingBackward || movingLeft || movingRight) {
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
    nextPosition.y = 1
    validatePosition(nextPosition)

    camera.position.y = 1
  }
}

function validatePosition(nextPosition: THREE.Vector3) {
  const currentTime: number = Date.now()

  if (currentTime - lastSend > 50) {

    sendMessage(`/topic/ingame/${lobbyId}/playerPosition`, {
      playerName: sessionStorage.getItem('myName'),
      posX: nextPosition.x,
      posY: nextPosition.z,
      angle: camera.rotation.z,
    })
    lastSend = currentTime
  } else {
    moveCamera()
  }
}


function moveCamera() {
  camera.position.copy(nextPosition)
}

function renderCharactersTest(playerPositions: IPlayerPositionDTD[]) {
  console.log("INSIDE RENDER: ", playerPositions);

  const modelLoader = new GLTFLoader();
  const adjustAngle = Math.PI;
  const fehlerndeSpieler = Array.from(players.keys()).filter((playerName) =>
    !playerPositions.map((position)=>position.playerName).includes(playerName))

  fehlerndeSpieler.forEach((player)=>{
    const index: number | undefined = players.get(player)
    if(index){
      const object = scene.getObjectById(index)
      players.delete(player)
      if(object){
        scene.remove(object)
      }
    }
  })

  playerPositions.forEach((playerPosition) => {
    if (!players.has(playerPosition.playerName)) {
      const snackmanModelURL = new URL('@/assets/game/realistic/snackman/snackman.glb', import.meta.url).href;
      //Modell initial rendern
      modelLoader.load(snackmanModelURL, (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        players.set(playerPosition.playerName, model.id);
        scene.add(model);

        model.position.set(playerPosition.x, 1, playerPosition.y);
        model.rotation.y = playerPosition.angle + adjustAngle;
      });
    } else {
      //Modell updaten
      const index: number | undefined = players.get(playerPosition.playerName)
      if(index) {
        const model = scene.getObjectById(index);
        if (model) {
          const messungsBox = new THREE.Box3()
          const breite = new THREE.Vector3()
          messungsBox.getSize(breite)
          messungsBox.expandByObject(model)
          model.position.set(playerPosition.x - (breite.x/2), 1, playerPosition.y);
          model.rotation.y = playerPosition.angle + adjustAngle;
        }
      }
    }
  });
}

function loadMap(map: String[]) {
  const groundGeometry = new THREE.BoxGeometry(1, 1, 1)
  const wallGeometry = new THREE.BoxGeometry(1, 2, 1)
  const groundTexture = new THREE.TextureLoader().load(ground)
  const wallTexture = new THREE.TextureLoader().load(wall)
  const groundMaterial = new THREE.MeshStandardMaterial({ map: groundTexture })
  const wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture })

  const modelLoader = new GLTFLoader()

  let rowCounter = 0
  map.forEach((e) => {
    for (let i = 0; i < e.length; i++) {
      switch (e[i]) {
        case '*':
          const wallCube = new THREE.Mesh(wallGeometry, wallMaterial)
          wallCube.position.set(rowCounter, 1.5, i)
          scene.add(wallCube)
          break
        case ' ':
          const groundCube = new THREE.Mesh(groundGeometry, groundMaterial)
          groundCube.position.set(rowCounter, 0, i)
          scene.add(groundCube)
          break
        case 'E':
          const groundCubeUnderItem = new THREE.Mesh(groundGeometry, groundMaterial)
          groundCubeUnderItem.position.set(rowCounter, 0, i)
          scene.add(groundCubeUnderItem)
          const modelPathE = Math.random() > 0.5
            ? '/src/assets/game/items/E/strawberry_shortcake/strawberry_shortcake.glb'
            : '/src/assets/game/items/E/chocolate_bar/chocolate_bar.glb';

          modelLoader.load(modelPathE, (objekt) => {
              console.log('Model geladen:', modelPathE);
              const model = objekt.scene

              if (modelPathE.includes('chocolate_bar')) {
                model.position.set(rowCounter - 2, 0.75, i)
                model.scale.set(0.2, 0.2, 0.2) // Schokolade kleiner machen
              }
              else {
                model.position.set(rowCounter - 2, 0.5, i)
                model.scale.set(0.5, 0.5, 0.5) // sonst normal
              }
              scene.add(model)
              console.log(`Modell (E) Position: x=${model.position.x}, y=${model.position.y}, z=${model.position.z}`);
            },
            undefined,
            (error) => {
              console.error('Fehler beim Laden des Modells:', error);
            }
          )
          break
        case 'D':
          const groundCubeUnderItem1 = new THREE.Mesh(groundGeometry, groundMaterial)
          groundCubeUnderItem1.position.set(rowCounter, 0, i)
          scene.add(groundCubeUnderItem1)
          const modelPathD = Math.random() > 0.5
            ? '/src/assets/game/items/D/cotton_candy/cottoncandy.glb'
            : '/src/assets/game/items/D/popcorn/popcorn.glb';

          modelLoader.load(modelPathD, (objekt) => {
              console.log('Model geladen:', modelPathD);
              const model = objekt.scene

              if (modelPathD.includes('popcorn')) {
                model.position.set(rowCounter - 2, 0.75, i)
                model.scale.set(0.2, 0.2, 0.2) // Schokolade kleiner machen
              }
              else {
                model.position.set(rowCounter - 2, 0.5, i)
                model.scale.set(0.5, 0.5, 0.5) // sonst normal
              }
              scene.add(model);
              console.log(`Modell (D) Position: x=${model.position.x}, y=${model.position.y}, z=${model.position.z}`);
            },
            undefined,
            (error) => {
              console.error('Fehler beim Laden des Modells:', error);
            }
          );
          break
        case 'C':
          const groundCubeUnderItem2 = new THREE.Mesh(groundGeometry, groundMaterial)
          groundCubeUnderItem2.position.set(rowCounter, 0, i)
          scene.add(groundCubeUnderItem2)
          const modelPathC = Math.random() > 0.5
            ? '/src/assets/game/items/C/candy_cane/candycane.glb'
            : '/src/assets/game/items/C/chips/chips.glb';

          modelLoader.load(modelPathC, (objekt) => {
              console.log('Model geladen:', modelPathC);
              const model = objekt.scene

              if (modelPathC.includes('candycane')) {
                model.position.set(rowCounter - 2, 1, i)
                model.scale.set(0.1, 0.1, 0.1) // candycane kleiner machen
              }
              else {
                model.position.set(rowCounter - 3, 1, i)
                model.scale.set(0.5, 0.5, 0.3) // sonst normal
              }
              scene.add(model);
              console.log(`Modell (C) Position: x=${model.position.x}, y=${model.position.y}, z=${model.position.z}`);
            },
            undefined,
            (error) => {
              console.error('Fehler beim Laden des Modells:', error);
            }
          );
          break
        case 'B':
          const groundCubeUnderItem3 = new THREE.Mesh(groundGeometry, groundMaterial)
          groundCubeUnderItem3.position.set(rowCounter, 0, i)
          scene.add(groundCubeUnderItem3)
          const modelPathB = Math.random() > 0.5
            ? '/src/assets/game/items/B/apple/apple.glb'
            : '/src/assets/game/items/B/banana/banana.glb';

          modelLoader.load(modelPathB, (objekt) => {
              console.log('Model geladen:', modelPathB);
              const model = objekt.scene

              if (modelPathB.includes('apple')) {
                model.position.set(rowCounter - 3, 0.75, i)
                model.scale.set(0.005, 0.005, 0.005) // apple kleiner machen
              }
              else {
                model.position.set(rowCounter - 3, 0.5, i)
                model.scale.set(0.2, 0.2, 0.2) // sonst normal
              }
              scene.add(model);
              console.log(`Modell (B) Position: x=${model.position.x}, y=${model.position.y}, z=${model.position.z}`);
            },
            undefined,
            (error) => {
              console.error('Fehler beim Laden des Modells:', error);
            }
          );
          break
        case 'A':
          const groundCubeUnderItem4 = new THREE.Mesh(groundGeometry, groundMaterial)
          groundCubeUnderItem4.position.set(rowCounter, 0, i)
          scene.add(groundCubeUnderItem4)
          const modelPathA = Math.random() > 0.5
            ? '/src/assets/game/items/A/ginger/ginger.glb'
            : '/src/assets/game/items/A/lemon/lemon.glb';

          modelLoader.load(modelPathA, (objekt) => {
              console.log('Model geladen:', modelPathA);
              const model = objekt.scene

              if (modelPathA.includes('ginger')) {
                model.position.set(rowCounter - 3, 1, i-1)
                model.scale.set(0.2, 0.2, 0.2) // Ginger kleiner machen
              }
              else {
                model.position.set(rowCounter - 3, 1, i)
                model.scale.set(0.5, 0.5, 0.5) // sonst normal
              }
              scene.add(model);
              console.log(`Modell (A) Position: x=${model.position.x}, y=${model.position.y}, z=${model.position.z}`);
            },
            undefined,
            (error) => {
              console.error('Fehler beim Laden des Modells:', error);
            }
          );
          break
        default:
          const groundCubeUnderItem5 = new THREE.Mesh(groundGeometry, groundMaterial)
          groundCubeUnderItem5.position.set(rowCounter, 0, i)
          scene.add(groundCubeUnderItem5)
      }
    }
    rowCounter++
  })
}

async function handleCharacters(data: ICharacterDTD[]) {
  let playerPositions: IPlayerPositionDTD[] = [];
  data.forEach(character => {
    if(sessionStorage.getItem('myName') !== character.name){
      playerPositions.push({
        playerName: character.name,
        x: character.posX,
        y: character.posY,
        angle: character.angleInDegrees,
      })
    }
  });
  renderCharactersTest(playerPositions);
}
onMounted(async () => {
  try {
    await gameStore.fetchGameStatus()
  } catch (error) {
    console.error('Error fetching game status:', error)
  }

  subscribeTo(`/ingame/playerPositions/${lobbyId}`, async (message: any) => {
    switch (message.type) {
      case 'playerPosition':
        console.log("FROM PLAYER POSITON: ", message.feedback)
        await handleCharacters(message.feedback);
        break;
    }
  });

  subscribeTo(`/ingame/${lobbyId}`, async (messageValidation: IMessageDTD) => {
    switch (messageValidation.type) {
      case 'playerMoveValidation':
        const playerPosition: any = messageValidation.feedback

        if (playerPosition.playerName === sessionStorage.getItem('myName')) {
          console.log("FROM PLAYER MOVE VALIDATION: ", messageValidation.feedback)
          console.log('recevied validation')
          moveCamera()
        }

        break;
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
      angle: Math.PI,
    },
    {
      playerName: 'test',
      x: 2,
      y: 2,
      angle: 2 * Math.PI,
    },
  ]
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
      <div class="flex gap-2">
        <div v-for="index in maxLife" :key="index">
          <img
            v-if="index <= life"
            src="../assets/game/realistic/herz.png"
            alt="Full Heart"
            width="40"
            height="40"
          />
          <img
            v-else
            src="../assets/game/realistic/emptyHerz.png"
            alt="Empty Heart"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

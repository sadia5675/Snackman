<script setup lang="ts">

/*Basic Configuration for Scene(=Container), Camera and Rendering for Playground*/
import * as THREE from "three"
import {ref, onMounted} from "vue";
import {PointerLockControls} from 'three/addons/controls/PointerLockControls.js';
import {WebGLRenderer} from "three";
import ground from "@/assets/game/realistic/ground.png"
import wall from "@/assets/game/realistic/wall.png"
import type {IPlayerpositionDTD} from "@/stores/game/dtd/IPlayerpositionDTD";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


let movingForward: boolean, movingBackward: boolean, movingLeft: boolean, movingRight: boolean = false
const slowMovementSpeed = 2
const fastMovementSpeed = 4
let movementSpeed = slowMovementSpeed

function createSceneCameraRendererControlsClock() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.outerWidth, 0.1, 1000);
  camera.position.set(0, 1, 2);

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true

  const pointerLockControls = new PointerLockControls(camera, renderer.domElement)
  pointerLockControls.pointerSpeed = 1;

  const clock = new THREE.Clock()
  return {scene, camera, renderer, pointerLockControls, clock}
}

function registerListeners(window: Window, renderer: WebGLRenderer) {
  renderer.domElement.addEventListener("click", (e) => {
    renderer.domElement.requestPointerLock();
  })

  window.addEventListener('keydown', (e) => {
    switch (e.code) {
      case "ShiftLeft":
        if (movementSpeed === slowMovementSpeed) {
          movementSpeed = fastMovementSpeed
        } else {
          movementSpeed = slowMovementSpeed
        }
        break
      case "KeyW":
        movingForward = true
        break
      case "KeyA":
        movingLeft = true
        break
      case "KeyS":
        movingBackward = true
        break
      case "KeyD":
        movingRight = true
        break
    }
  })
  window.addEventListener('keyup', (e) => {
    console.log("Losgelasen: " + e.code)
    switch (e.code) {
      case "KeyW":
        movingForward = false
        break
      case "KeyA":
        movingLeft = false
        break
      case "KeyS":
        movingBackward = false
        break
      case "KeyD":
        movingRight = false
        break
    }
  });
}

const {scene, camera, renderer, pointerLockControls, clock} = createSceneCameraRendererControlsClock()
registerListeners(window, renderer)

const threeContainer = ref<null | HTMLElement>(null)


//Ball
const sphereGeometry = new THREE.SphereGeometry(1, 30, 30);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0xFFFF00,
  metalness: 0,
  roughness: 0
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.y = 2;
sphere.position.x = 3;
sphere.position.z = -4;

scene.add(sphere);

//lightning
const ambientLight = new THREE.AmbientLight(0x404040, 10);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xFFFFFF, 1000, 10);
pointLight.position.set(10, 20, 10); //extra Lightning for the ball
scene.add(pointLight);


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
  const delta = clock.getDelta()
  cameraPositionBewegen(delta)
}

function cameraPositionBewegen(delta: number) {
  let cameraViewDirection = new THREE.Vector3()
  camera.getWorldDirection(cameraViewDirection)
  const yPlaneVector = new THREE.Vector3(0, 1, 0)
  if (movingForward || movingBackward || movingLeft || movingRight) {
    if (movingForward) {
      if (movingRight) {
        camera.position.addScaledVector(cameraViewDirection.applyAxisAngle(yPlaneVector, 7 * Math.PI / 4), movementSpeed * delta)
      } else if (movingLeft) {
        camera.position.addScaledVector(cameraViewDirection.applyAxisAngle(yPlaneVector, Math.PI / 4), movementSpeed * delta)
      } else if (movingBackward) {
        //foward und backward canceln sich
      } else {
        camera.position.addScaledVector(cameraViewDirection.applyAxisAngle(yPlaneVector, 2 * Math.PI), movementSpeed * delta)
      }
    } else if (movingBackward) {
      if (movingRight) {
        camera.position.addScaledVector(cameraViewDirection.applyAxisAngle(yPlaneVector, 5 * Math.PI / 4), movementSpeed * delta)
      } else if (movingLeft) {
        camera.position.addScaledVector(cameraViewDirection.applyAxisAngle(yPlaneVector, 3 * Math.PI / 4), movementSpeed * delta)
      } else {
        camera.position.addScaledVector(cameraViewDirection.applyAxisAngle(yPlaneVector, Math.PI), movementSpeed * delta)
      }
    } else if (movingRight) {
      if (movingLeft) {
        //right und left canceln sich
      } else {
        camera.position.addScaledVector(cameraViewDirection.applyAxisAngle(yPlaneVector, 3 * Math.PI / 2), movementSpeed * delta)
      }
    } else if (movingLeft) {
      camera.position.addScaledVector(cameraViewDirection.applyAxisAngle(yPlaneVector, Math.PI / 2), movementSpeed * delta)
    }
    camera.position.y = 2
  }
}

function renderCharacters(playerPositions: IPlayerpositionDTD[]){
  const modelLoader = new GLTFLoader()
  playerPositions.forEach((playerPosition)=>{
    modelLoader.load("/src/assets/game/realistic/snackman/snackman.gltf", (objekt)=>{
      const model = objekt.scene
      model.position.set(playerPosition.x,1,playerPosition.y)
      model.scale.set(0.5,0.5,0.5)
      model.rotateY(playerPosition.angle)
      scene.add(model)
    })
  })

}

function loadMap(map: String[]) {
  const groundGeometry = new THREE.BoxGeometry(1,1,1)
  const wallGeometry = new THREE.BoxGeometry(1,2,1)
  const groundTexture = new THREE.TextureLoader().load(ground)
  const wallTexture = new THREE.TextureLoader().load(wall)
  const groundMaterial = new THREE.MeshStandardMaterial({map: groundTexture})
  const wallMaterial = new THREE.MeshStandardMaterial({map: wallTexture})

  let rowCounter = 0
  map.forEach((e)=>{
    for(let i = 0; i<e.length;i++){
      switch (e[i]){
        case ('*'):
          const wallCube = new THREE.Mesh(wallGeometry,wallMaterial)
          wallCube.position.set(rowCounter,1.5,i)
          scene.add(wallCube)
          break;
        case (' '):
          const groundCube = new THREE.Mesh(groundGeometry,groundMaterial)
          groundCube.position.set(rowCounter,0,i)
          scene.add(groundCube)
          break;
      }
    }
    rowCounter++
  })
}

onMounted(() => {
  if (threeContainer.value) {
    threeContainer.value.appendChild(renderer.domElement);
  }
  const map = ["********************",
    "*    *     *       *",
    "* ** * ***** * *** *",
    "*    *     * *   * *",
    "* ** ***** * *** * *",
    "*    *   * *     * *",
    "* ** * * * ******* *",
    "*    * * *         *",
    "****** * ***********",
    "*      *           *",
    "* **** * ********* *",
    "* *    *         * *",
    "* * ** ********* * *",
    "* *              * *",
    "* * **************  ",
    "* *                *",
    "* **************** *",
    "*                * *",
    "****************** *",
    "********************"]
  loadMap(map)
  const mockPositions: IPlayerpositionDTD[] = [
  {
    x:1,
    y:1,
    angle:Math.PI
  },{
      x:2,
      y:2,
      angle:2*Math.PI
    }
  ]
  renderCharacters(mockPositions)
  animate();
});


</script>

<template>

  <div ref="threeContainer" id="app" class="gameContainer"></div>

</template>


<style scoped>

</style>

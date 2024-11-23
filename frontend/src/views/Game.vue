<script setup lang="ts">

/*Basic Configuration for Scene(=Container), Camera and Rendering for Playground*/
import * as THREE from "three"
import {ref, onMounted} from "vue";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.outerWidth,0.1, 1000);
camera.position.set(0,3,2);
const renderer = new THREE.WebGLRenderer();

const threeContainer = ref(null)

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
//camera.position.setZ(30);


renderer.render(scene, camera);
//Playfield
const fieldGeometry = new THREE.PlaneGeometry(50,50)
const fieldMaterial = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });
const field = new THREE.Mesh(fieldGeometry, fieldMaterial);
field.rotation.x = -Math.PI / 2; //so its like the ground

//Ball
const sphereGeometry = new THREE.SphereGeometry(1,30,30);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0xFFFF00,
  metalness: 0,
  roughness: 0
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.y = 2;
sphere.position.x = 3;
sphere.position.z = -4;

scene.add(field,sphere);

//lightning
const ambientLight = new THREE.AmbientLight(0x404040, 10);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xFFFFFF, 1000, 10);
pointLight.position.set(10, 20, 10); //extra Lightning for the ball


scene.add(pointLight);


function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
}
onMounted(() => {
  threeContainer.value.appendChild(renderer.domElement);
  animate();
});




</script>

<template>

  <h1>test</h1>
  <div ref="threeContainer"  id="app" class="gameContainer"></div>

</template>


<style scoped>

</style>

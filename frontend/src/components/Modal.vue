<template>
    <div >
        <slot name="icon"></slot>
        <div v-if="isModalOpen">
            <div>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const isModalOpen = ref(false);

function openModal(){
    isModalOpen.value = true;
}

function closeModal(){
    isModalOpen.value = false;
}

export { openModal, closeModal}

</script>
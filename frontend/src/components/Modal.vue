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
import { useModalStore  } from '@/stores/modalstore';

const { isModalOpen, openModal, closeModal } = useModalStore();

</script>
<template>
    <div class="fixed insert-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-full h-full">
        <slot name="titel"></slot>
        <div v-if="isModalOpen">
            <div class="">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>




<script setup lang="ts">
import { useModalStore } from '@/stores/modalstore';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';

const { isModalOpen, openModal, closeModal } = useModalStore();

</script>
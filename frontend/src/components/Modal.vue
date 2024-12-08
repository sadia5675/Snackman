<template>
        <div class="fixed  bg-black backdrop-blur-sm bg-opacity-70 flex items-center justify-center z-50 w-full h-full">
        
        <div class="bg-[url('@/assets/backgroundModal.png')] bg-cover bg-center space-y-4 rounded-lg p-16">
            <div>
                <slot name="titel" ></slot>
            </div>
            
            <div class="space-y-4">
                <slot name="content"></slot>
            </div>
        </div>

    </div>    
</template>




<script setup lang="ts">
import { useModalStore } from '@/stores/modalstore';



</script>
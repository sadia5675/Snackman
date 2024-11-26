<template>
        <div class="fixed insert-0 bg-black backdrop-blur-sm bg-opacity-70 flex items-center justify-center z-50 w-full h-full">
        
        <div class="bg-white space-y-4 rounded-lg bg-gray-200 p-16">
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
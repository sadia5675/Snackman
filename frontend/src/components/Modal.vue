<template>
    <div class="layout-modal">

        <div>
            <div>
                <slot name="titel"></slot>
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
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <h1>Das ist die Index Seite</h1>
    <p>Hallo</p>
    <RouterLink class="font-bold" to="/lobby/11111">Lobby</RouterLink>
</template>
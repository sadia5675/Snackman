<script setup lang="ts">
import router from '@/router';
import { RouterLink, RouterView, useRoute } from 'vue-router'

    const route = useRoute()
    const id = route.params.id
    console.log(id)

</script>

<template>
    
    <p>Das ist die Lobby mit der id : {{ id }}</p>

    <p>Hallo</p>

    <RouterLink class="font-bold" to="/">Homepage</RouterLink>
</template>
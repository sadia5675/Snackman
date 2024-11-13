import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Lobby from '../views/Lobby.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/lobby/:id',
      name: 'lobbyWithId',
      component: Lobby
    },
  ],
})

export default router

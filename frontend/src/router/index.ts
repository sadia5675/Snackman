import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import LobbyList from '../views/LobbyList.vue'
import GameLobbyView from '@/views/GameLobbyView.vue'
import Game from '@/views/Game.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/index"
    }, // Hier wird direkt zur Hauptseite weitergeleitet
    {
      path: '/index',
      name: 'index',
      component: Index
    }, // Hier wird die Hauptseite angezeigt
    {
      path: '/lobby/:id',
      name: 'lobbyWithId',
      component: GameLobbyView
    },  // Hier wird die Lobby mit Id angezeigt
    {
      path: '/lobby',
      name: 'lobbyList',
      component: LobbyList
    }, // Hier wird die Lobby Liste angezeigt
    {
      path: '/lobby/:id/ingame',
      name: 'game',
      component: Game
    }
  ],
})

export default router

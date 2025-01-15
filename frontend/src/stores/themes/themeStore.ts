import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { sendMessage, subscribeTo, stompClient } from '@/config/stompWebsocket';
import type { IThemes } from '@/stores/game/dtd/ThemesDTD';


export const useThemeStore = defineStore("theme", () => {
const themes = ref <IThemes>({
    christmas: {
        ground: new URL('@/assets/game/christmas/schneeboden.png', import.meta.url).href,
        wall: new URL('@/assets/game/christmas/ChristmasWall.png', import.meta.url).href,
        skybox: new URL('@/assets/game/christmas/skyBox/skywinter.png', import.meta.url).href,
      character: {
          snackman:new URL('@/assets/game/christmas/snackman/chrismasSnackman.glb', import.meta.url).href,
          ghost: new URL('@/assets/game/christmas/ghost/ghost.glb', import.meta.url).href,
      },
    },
    realistic: {
        ground: new URL('@/assets/game/realistic/ground.png', import.meta.url).href,
        wall: new URL('@/assets/game/realistic/wall.png', import.meta.url).href,
        skybox: new URL('@/assets/game/realistic/skyBox/reasky.png', import.meta.url).href,
      character: {
          snackman: new URL('@/assets/game/realistic/resnackman/reasnackman.glb', import.meta.url).href,
          ghost:new URL('@/assets/game/realistic/reaghost/ghostRea.glb', import.meta.url).href,
      },
    },
    retro: {
        ground: new URL('@/assets/game/retro/grass_1.png', import.meta.url).href,
        wall: new URL('@/assets/game/retro/cobblestone_2.png', import.meta.url).href,
        skybox: new URL('@/assets/game/retro/skyBox/sky052k.png', import.meta.url).href,
      character: {
          snackman: new URL('@/assets/game/retro/snackman/snackmanretro.glb', import.meta.url).href,
          ghost: {
            path: new URL('@/assets/game/retro/ghost/retroGhost.glb', import.meta.url).href,
            scale: 0.2,
          },
      },
    },
    sweetWorld: {
        ground: new URL('@/assets/game/sweetWorld/schocko.png', import.meta.url).href,
        wall: new URL('@/assets/game/sweetWorld/sweetWorldWall.png', import.meta.url).href,
        skybox:  new URL('@/assets/game/sweetWorld/skyBox/kugelsky.png', import.meta.url).href,
      character: {
          snackman: new URL('@/assets/game/sweetWorld/snackman/sweetWorldPinkSnackman.glb', import.meta.url).href,
          ghost: new URL('@/assets/game/sweetWorld/ghost/sweetWorldGhost.glb', import.meta.url).href,
      },
    },
    });

    const selectedTheme= ref<keyof IThemes>("realistic");

  function setSelectedTheme(themeName: keyof IThemes, lobbyId: string) {
    if(themes.value[themeName]){
      selectedTheme.value=themeName;
      console.log(`Theme: ${themeName} set successfully.`);
        sendThemeUpdateToBackend(themeName, lobbyId)
    }else{
      console.log("Fehlgeschlagen, ungültiger Theme:", themeName);
    }
  }

  const currentTheme = computed(() => themes.value[selectedTheme.value])

  function sendThemeUpdateToBackend(themeName: string | number, lobbyId: string) {
    if (lobbyId) {
      sendMessage(`/topic/game/${lobbyId}/setTheme`, { themeName })
      console.log(`Theme update sent for lobbyId: ${lobbyId}`)
    } else {
      console.error('Lobby ID not provided.')
    }
  }

  async function fetchSelectedTheme(lobbyId: string) {
    const response = await fetch(`/api/game/${lobbyId}/selectedTheme`,{
      method: 'POST'
    });

    const result: any = await response.json();

    selectedTheme.value = result.selectedTheme;

  }

  function subscribeToThemeUpdates(lobbyId: string): Promise<boolean> {
    return new Promise((resolve) => {
      if (!stompClient.connected) {
        stompClient.activate();
        stompClient.onConnect = () => {
          subscribeToThemeUpdatesHandler(lobbyId);
          resolve(true)
        };
      } else {
        subscribeToThemeUpdatesHandler(lobbyId);
        resolve(true)
      }
    })
  }

  function subscribeToThemeUpdatesHandler(lobbyId: string) {
    subscribeTo(`/game/${lobbyId}`, (message: any) => {
      if (message.type === 'themeUpdate' && message.status === 'ok') {
        const newTheme = message.feedback
        if (themes.value[newTheme]) {
          selectedTheme.value = newTheme
          console.log(`Theme updated to: ${newTheme}`)
        } else {
          console.error('Received invalid theme:', newTheme)
        }
      }
    })
  }


  return {
    themes,
    selectedTheme,
    setSelectedTheme,
    currentTheme,
    subscribeToThemeUpdates,
    fetchSelectedTheme
  };

});

/*skybox: {
        right: "/src/assets/game/christmas/skyBox/sky_yuki_01rt.png",
        left:  "/src/assets/game/christmas/skyBox/sky_yuki_01lf.png",
        top:"/src/assets/game/christmas/skyBox/sky_yuki_01up.png",
        bottom: "/src/assets/game/christmas/skyBox/sky_yuki_01dn.png",
        front:"/src/assets/game/christmas/skyBox/sky_yuki_01ft.png",
        back: "/src/assets/game/christmas/skyBox/sky_yuki_01bk.png",
    },*/

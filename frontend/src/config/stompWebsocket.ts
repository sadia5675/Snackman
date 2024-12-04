import { Client, type Message } from '@stomp/stompjs';

const protocol = window.location.protocol === 'http' ? 'wss' : 'ws'

const stompClient = new Client({
  brokerURL: `${protocol}://${window.location.host}/ws`,
  connectHeaders: {
    //Eventuell Authentifizierung
  },
  onConnect: () => {
    console.log('Connected to STOMP');
    // Hier könnten globale Abonnements hinzugefügt werden, falls nötig
  },
  onDisconnect: () => {
    console.log('Disconnected from STOMP');
  },
  debug: (str: string) => console.log(str), // Debugging zum testen
});

// Funktion zum Abonnieren einer Lobby
function subscribeToLobby(lobbyId: string, callback: (message: any) => void) {
  if (!lobbyId) {
    console.error('Lobby ID is required to subscribe.');
    return;
  }
  stompClient.subscribe(`/topic/game/${lobbyId}`, (message: Message) => {
    callback(JSON.parse(message.body)); // Nachricht als JSON an den Callback übergeben
  });
}

// Funktion zum Senden von Nachrichten
function sendMessage(destination: string, body: any) {
  if (stompClient.connected) {
    stompClient.publish({
      destination,
      body: JSON.stringify(body),
    });
  } else {
    console.error('WebSocket is not connected');
  }
}

// Exportiere den STOMP-Client und die Funktionen
export { stompClient, subscribeToLobby, sendMessage };

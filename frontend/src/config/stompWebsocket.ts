import { Client, type Message } from '@stomp/stompjs';
import { type IMessageDTD as IMessage } from '@/stores/game/dtd/IMessageDTD';


const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss'

const stompClient = new Client({
  brokerURL: `${protocol}://${window.location.host}/ws`,
});

// Funktion zum Abonnieren einer Lobby
function subscribeTo(path: string, callback: (message: any) => void) {
  if (!path) {
    console.error('Lobby ID is required to subscribe.');
    return;
  }
  stompClient.subscribe(`/topic${path}`, (message: Message) => {

    const response: IMessage = JSON.parse(message.body);
    switch(response.type){
      default:
        callback(response);
    }
  });
}


// Funktion zum Senden von Nachrichten
function sendMessage(destination: string, body: any) {
  if (stompClient.connected) {
    stompClient.publish({
      destination,
      body: JSON.stringify(body),
    });
  }
}



// Exportiere den STOMP-Client und die Funktionen
export { stompClient, subscribeTo, sendMessage };

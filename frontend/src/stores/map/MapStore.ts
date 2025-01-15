import { defineStore } from "pinia";
import { ref } from "vue";
import type { MapsDTD } from "@/stores/game/dtd/MapsDTD";
import { sendMessage, subscribeTo, stompClient } from '@/config/stompWebsocket'
export const useMapStore = defineStore("map", ()=> {
//onMounted? nachschauen
//ref = reagitives Objekt dass direkt auf Änderungenss reagiert und an die UI automatisch aktualisiert
const rows = ref<number>(0); // Anzahl Reihen
const cols = ref<number>(0); // Anzahl Spalten
const grid = ref<string[][]>([]); // 2D-Array für das Raster
const mapName = ref<string>(""); // Map-Name
const  minGridSize = ref<number>(0);
const  maxGridSize = ref<number>(0);
const mapsDTD = ref<MapsDTD>({
  maps: [],
  selectedMap: null
});

//Um maps aus backend zu hollen
async function fetchMaps(){
    try{
      // GetAnfrage an den Backend
        const response = await fetch ("/api/maps");
        //D Json wird dann in allmaps gespeichert -_> also die Mapnamen
        const data = await response.json();

    // Überprüft, ob das feedback-Feld existiert und ein Objekt ist
    if (data.feedback && typeof data.feedback === "object") {
      mapsDTD.value.maps = Object.keys(data.feedback).map((key, index) => ({// Extrahiert die Schlüsselnamen
          id: index + 1,         // Eindeutige ID
          name: key,             // Der Name
          map: data.feedback[key] // Das Layout der Karte (2D-Array von Strings)
        }));
    } else {
      throw new Error("Invalid data format");
    }
    console.log("Fetched Maps:", mapsDTD.value.maps);
  } catch (error) {
    console.error("Error fetching maps:", error);
  }
}

async function fetchGridLimits() {
  try {
      const response = await fetch("/api/maps/grid-limits");
      const data = await response.json();
      minGridSize.value = data.min;
      maxGridSize.value = data.max;
  } catch (error) {
      console.error("Error fetching grid limits:", error);
  }
}

//funktion um Raster zu erstellen
function createGrid() {
    // Sicherstellung, dass die Eingaben valide sind spricht nicht unter 0
    if (rows.value <= 0 || cols.value <= 0) {
      alert("Bitte gültige Werte für Reihen und Spalten eingeben.");
      return;
    }
    // Raster als 2D-Array erstellen
    grid.value = Array.from({ length: rows.value }, () => //Array mit der Länge rows.value wird erstellt(jede Zeile ein neues Array)
      Array.from({ length: cols.value }, () => "weg")//jedes dieser Zeilen also spalten wird mit 0 aufgefüllt
    );
    for (let rowIndex = 0; rowIndex < rows.value; rowIndex++) {
      for (let colIndex = 0; colIndex < cols.value; colIndex++) {
        if (
          //Minus 1 wegen Arrayindex und Grid
          rowIndex === 0 || // Erste Zeile
          rowIndex === rows.value - 1 || // Letzte Zeile
          colIndex === 0 || // Erste Spalte
          colIndex === cols.value - 1 // Letzte Spalte
        ) {
          grid.value[rowIndex][colIndex] = "wall";
        }
      }
    }
    console.log(`Erstelle ein Spielfeld mit ${rows.value} Reihen und ${cols.value} Spalten.`);
}

function updateCell(rowIndex:number,colIndex:number){
    if (rowIndex === 0 || rowIndex === rows.value - 1 ||colIndex === 0 || colIndex === cols.value-1) {
      return; // um das klicken zu ignorieren
    }
    // Prüft den aktuellen Wert der Zelle und wechselt zwischen '*' und ' '
    //ternäre Operator --> wie Ifelse aber wesentlich Kompakter
    grid.value[rowIndex][colIndex] =
      grid.value[rowIndex][colIndex] === "wall" ? "weg" : "wall";

}

/*
  * die Funktion spiechert die eingaben des Benutzers ab und wandelt diese ind JSON um
  */
  //
async function saveMap(){
    //Überprüfung zur eingabe des Namens der Map, ob der Benutzer hier etwas eingegebn hat
    if (!mapName.value.trim()){
      alert("Please Enter the a name for the Map!");
      return;
    }
    //Validierung zu den Values damit diese nicht null sind, ob diese wirklich gefüllt sind
    //!rows.value||!cols.value|| !grid.value.length
    let valideCell=false;
    for (let row of grid.value){
      for (let cell of row){
        //3= weil er denn wert des Strings überprüft ob er wirklich
        if (cell == "null"){
          valideCell=true;
          break;
        }
      }if(valideCell){
        break; // wenn schon in der äußeren Schleife eine ungültige eingabe gefunden wurde also null
      }
    }
    if(valideCell){
      alert("Pleas fill the Map at first!");
      return;
    }
    // **Vergleich des Namens mit den vorhandenen Maps**
    await  fetchMaps();
    let nameExists = false;
    for(let existingMap of mapsDTD.value.maps){
        if (existingMap.name.trim().toLowerCase()=== mapName.value.trim().toLowerCase()){
          nameExists=true;
        }
    }

    if (nameExists) {
      alert("The name is not available, please choose a different name.");
      return;
    }
 // Map-Daten vorbereiten
 const mapData = {
    name: mapName.value,
    //aus dem 2darray zeilenweise durchitteriert und in einem String konvertiert bsp. "*", "weg","*"--> *weg*
    tiles: grid.value.map(row => row.join(""))
};
  //in diesem Block werden die Daten vom Browser eingelesen und vorbereitet für backend
    try {

     //Http Post request zum Speichern der Map
      const response = await fetch("/api/maps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapData),//mapdaten in Json format umgewandelt
      });

      if (!response.ok) {
        throw new Error(await response.text());// Nachricht vom Backend also fehlermeldung
      }

      alert("Map erfolgreich gespeichert!"); // Backend-Antwort anzeigen wenn alles gut läuft
      await  fetchMaps(); // Aktualisieren der Liste
    } catch (error) {
      console.error("Somethink went Wrong :( ", error);
      alert("Somethink went Wrong :( ");
    }
}
function sendMapUpdateToBackend(mapName: string, lobbyId: string) {
  if (lobbyId) {
      sendMessage(`/topic/game/${lobbyId}/setMap`, { mapName });
      console.log(`Map update sent for lobbyId: ${lobbyId}, Map: ${mapName}`);
  } else {
      console.error("Lobby ID not provided.");
  }
}
function subscribeToMapUpdates(lobbyId: string): Promise<boolean> {
  return new Promise((resolve) => {
      if (!stompClient.connected) {
          stompClient.activate();
          stompClient.onConnect = () => {
              subscribeToMapUpdatesHandler(lobbyId);
              resolve(true);
          };
      } else {
          subscribeToMapUpdatesHandler(lobbyId);
          resolve(true);
      }
  });
}

function subscribeToMapUpdatesHandler(lobbyId: string) {
  subscribeTo(`/game/${lobbyId}`, (message: any) => {
      if (message.type === 'mapUpdate' && message.status === 'ok') {
          const newMap = message.feedback;
          const foundMap = mapsDTD.value.maps.find((map) => map.name === newMap);
          if (foundMap) {
              mapsDTD.value.selectedMap = foundMap;
              console.log(`Map updated to: ${newMap}`);
          } else {
              console.error("Received invalid map:", newMap);
          }
      }
  });
}
// Rückgabe der Funktionen und Variablen, die im Store verfügbar sind
  return{
    mapName, rows, cols, grid,minGridSize,maxGridSize, mapsDTD,
    fetchMaps,saveMap,fetchGridLimits,createGrid,updateCell,
    sendMapUpdateToBackend,
    subscribeToMapUpdates,subscribeToMapUpdatesHandler
  };
});

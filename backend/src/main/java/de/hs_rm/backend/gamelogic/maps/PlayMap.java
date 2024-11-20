package de.hs_rm.backend.gamelogic.maps;

import java.io.FileReader;
import java.io.IOException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class PlayMap {
/* 
... resource/maps findet man die levels die folgendens beschreiben:
0 = Leer
1 =  Wand
2 = Snack (leicht)
3 = Snack (hochkalorisch)
4 = Ei
5 = Startposition von SnackMan
6 = Startposition von Geistern
7 = Startposition von Hühn
*/
private int[][] tiles;

public void readMap(String name){
    ObjectMapper objectMapper = new ObjectMapper();
    try {
        // JSON-Datei lesen
        JsonNode root = objectMapper.readTree(new FileReader("src/main/resources/maps/" + name+ ".json"));

         // exrahieren
         JsonNode tilesNode = root.get("tiles");
         this.tiles = new int[tilesNode.size()][];
        // zeile numwandeln
         for (int i = 0; i < tilesNode.size(); i++) {
             JsonNode row = tilesNode.get(i);
             this.tiles[i] = new int[row.size()];
            // füllen der Zeile
             for (int j = 0; j < row.size(); j++) {
                this.tiles[i][j] = row.get(j).asInt();
             }
         }
    
    } catch (IOException e) {
            System.err.println("Error reading JSON-file: " + e.getMessage());
            e.printStackTrace();
        }
    
}

public int[][] getTiles() {
    return tiles;
}

public void setTiles(int[][] tiles) {
    this.tiles = tiles;
}

}
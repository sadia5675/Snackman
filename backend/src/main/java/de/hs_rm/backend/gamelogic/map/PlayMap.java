package de.hs_rm.backend.gamelogic.map;

import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.characters.players.Chicken;
import de.hs_rm.backend.gamelogic.characters.players.Ghost;
import de.hs_rm.backend.gamelogic.characters.players.Item;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.PlayerPosition;
import de.hs_rm.backend.gamelogic.characters.players.Snackman;

public class PlayMap {
/* 
... resource/maps findet man die levels die folgendens beschreiben:
0 = Leer
1 = Wand
2 = Item
3 = Startposition von SnackMan
4 = Startposition von Geistern
5 = Startposition von Hühn
*/
private int[][] tiles;
private List <Tile> tilesList = new ArrayList<>();


public PlayMap(String mapname, Game game) {
    readMap(mapname);
    createMap(game);
}
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

public void createMap(Game game){
for(int i = 0; i < tiles.length; i++){
    for (int j = 0; j < tiles[i].length; j++){
        if(tiles[i][j] == 0){//leer
            tilesList.add(new Tile(TileType.SURFACE));

        }else if (tiles[i][j] == 1) {//wand
            tilesList.add(new Tile(TileType.WALL));

        }else if (tiles[i][j] == 2) {//Item
            Tile newTile = new Tile(TileType.SURFACE);
            // Item item = new Item(null, new PlayerPosition(i, j));
            // newTile.addItem(item);
            tilesList.add(newTile);

        }else if (tiles[i][j] == 3) {//Snackmann
            Tile newTile = new Tile(TileType.SURFACE);
            // Player player = game.getRandomPlayer();
            // String name = player.getName();
            // Character character = new Snackman(player, name,  game.getId(),  null, new PlayerPosition(i, j),3,null);
            // newTile.addCharacter(character);
            tilesList.add(newTile);

        }else if (tiles[i][j] == 4) {//Geist
            Tile newTile = new Tile(TileType.SURFACE);
            // Player player = game.getRandomPlayer();
            // String name = player.getName();
            // Character character = new Ghost(player,name, game.getId(), null, new PlayerPosition(i, j), null);
            // newTile.addCharacter(character);
            tilesList.add(newTile);
            
        }else if (tiles[i][j] == 5) {//Hühn
            Tile newTile = new Tile(TileType.SURFACE);
            // Chicken chicken = new Chicken(new PlayerPosition(i, j));
            // newTile.addChicken(...);
            tilesList.add(newTile);
        }
    }
}
}

public int getHeight() {
    return tiles.length; // Anzahl der Zeilen
}

public int getWidth() {
    if (tiles.length > 0) {
        return tiles[0].length; // Anzahl der Spalten in der ersten Zeile
    } else {
        return 0; // Falls keine Zeilen existieren, Rückgabewert 0
    }
}

public int[][] getTiles() {
    return tiles;
}

public void setTiles(int[][] tiles) {
    this.tiles = tiles;
}
public List<Tile> getTilesList() {
    return tilesList;
}
public void setTilesList(List<Tile> tilesList) {
    this.tilesList = tilesList;
}



}
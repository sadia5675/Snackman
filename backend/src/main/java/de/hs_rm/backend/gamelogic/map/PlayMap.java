package de.hs_rm.backend.gamelogic.map;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class PlayMap {

private char[][] map;
private List <Tile> tilesList = new ArrayList<>();


public PlayMap(String filePath) {
    loadMap(filePath);
    createTiles();

}
  private static final Logger LOGGER = LoggerFactory.getLogger(PlayMap.class);

    private void loadMap(String filePath) {
        String line;
        int height = 0;
        int width = 0;
        try (BufferedReader reader = new BufferedReader(
                new FileReader("src/main/resources/maps/" + filePath + ".txt"))) {
            // Höhe und Breite der Map
            while ((line = reader.readLine()) != null) {
                width = Math.max(width, line.length());
                height++;
            }
            // Map-Array für frontend
            map = new char[height][width];

        } catch (IOException e) {
            LOGGER.error("Error loading map size from file '{}': {}", filePath, e.getMessage(), e);
            map = new char[0][0];// zurück setzen
            return;
        }
        // jetzt inhalt lesen
        try (BufferedReader secondReader = new BufferedReader(
                new FileReader("src/main/resources/maps/" + filePath + ".txt"))) {
            int x = 0;
            while ((line = secondReader.readLine()) != null) {
                for (int y = 0; y < line.length(); y++) {
                    char symbol = line.charAt(y);
                    map[x][y] = symbol;
                }
                x++;
            }
        } catch (IOException e) {
            LOGGER.error("Error loading map content from file '{}': {}", filePath, e.getMessage(), e);
            map = new char[0][0];
        }
    }


public void createTiles(){
    tilesList.clear(); // zurücksetzen
    if (map == null || map.length == 0) {
        return; // keine Karte heisst keine TIles
    }

    for (int x = 0; x < map.length; x++) {
        for (int y = 0; y < map[x].length; y++) {
            try {
                Tile tile = createTile(map[x][y]);
                tilesList.add(tile); // Tile der Liste hinzufügen
            } catch (IllegalArgumentException e) {
                LOGGER.error("Invalid symbol '{}' at position ({}, {}): {}", map[x][y], x, y, e.getMessage(), e);
            }
        }
    }
}

private Tile createTile(char symbol) {
    switch (symbol) {
        case '*': // Wand
            return new Tile(TileType.WALL);
        case ' ': // Frei
            return new Tile(TileType.SURFACE);
        default:
            throw new IllegalArgumentException("Unknown character in map: " + symbol);
    }
}


public char[][] getMap() {
    return map;
}


public void setMap(char[][] map) {
    this.map = map;
}


public List<Tile> getTilesList() {
    return tilesList;
}


public void setTilesList(List<Tile> tilesList) {
    this.tilesList = tilesList;
}

public int getWidth() {
    if (map != null && map.length > 0) {
        return map[0].length;
    }
    return 0;
}

public int getHeight() {
    if (map != null) {
        return map.length;
    }
    return 0;
}


}
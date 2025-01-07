package de.hs_rm.backend.gamelogic.map;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jgrapht.GraphPath;
import org.jgrapht.alg.shortestpath.DijkstraShortestPath;
import org.jgrapht.graph.DefaultEdge;
import org.jgrapht.graph.DefaultUndirectedGraph;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class PlayMap {

private char[][] map;
private List <Tile> tilesList = new ArrayList<>();
private int countSurface = 0;
private int mapRow;
private int mapCol;
private DefaultUndirectedGraph<Vertex, DefaultEdge> graph;
private String mapsDirectory;
private static final Logger LOGGER = LoggerFactory.getLogger(PlayMap.class);



public PlayMap(String filePath, String mapsDirectory) {
    if (filePath == null || filePath.isBlank()) {
        throw new IllegalArgumentException("File path cannot be null or empty.");
    }
    this.mapsDirectory = mapsDirectory;
    
    try {
        loadMap(filePath);
        if (map == null || map.length == 0) {
            throw new IllegalArgumentException("Loaded map is invalid or empty.");
        }
        //createTiles();
        
    } catch (IllegalArgumentException e) {
        LOGGER.error("Invalid map file: {}", e.getMessage());
        throw e; // IllegalArgumentException weiterwerfen
    } catch (IOException e) {
        LOGGER.error("Error loading map file: {}", e.getMessage());
        map = new char[0][0]; // Karte zurücksetzen
    }

    // Noch Fehlerhaft und versehntlich in dieser Branch gelandet
    this.graph = new DefaultUndirectedGraph<>(DefaultEdge.class);
    buildGraph(map);
    this.mapRow = map.length;
    this.mapCol = map[0].length;
    LOGGER.info("Geladene Map: Höhe = {}, Breite = {}", map.length, map[0].length);
}

public void buildGraph(char [][]map) {
    if (map == null || map.length == 0 || map[0].length == 0) {
        throw new IllegalArgumentException("The map is invalid or empty.");
    }
    // Knoten hinzufügen
    //LOGGER.info("Map Dimensionen: {} {}", map.length, map[0].length);
    for (int x = 0; x < map.length; x++) {
        for(int y = 0; y < map[0].length; y++) {
            if (map[x][y] == ' '){
                Vertex vertex = new Vertex(x, y);
                //LOGGER.info("Knoten hinzugefügt: ({}, {})",x ,y );
                graph.addVertex(vertex);

            }
        }
    }

    //LOGGER.info("Alle Knoten im Graphen: {}", graph.vertexSet());
    // Kanten hinzufügen
    for (int x = 0; x < map.length; x++) {
        for(int y = 0; y < map[0].length; y++) {
            if (map[x][y] == ' '){
                Vertex currentVertex = new Vertex(x, y);
                if(x > 0 && map[x-1][y] == ' '){
                    Vertex neighborTop = new Vertex(x-1, y);
                    graph.addEdge(currentVertex, neighborTop);
                    //LOGGER.info("Kante hinzugefügt: ({}, {}) -> ({}, {})", x, y, x-1, y);
                }
                if(y > 0 && map[x][y-1] == ' '){
                    Vertex neighborLeft = new Vertex(x, y-1);
                    graph.addEdge(currentVertex, neighborLeft);
                    //LOGGER.info("Kante hinzugefügt: ({}, {}) -> ({}, {})", x, y, x, y-1);
                }
            }
        }
    }
    //LOGGER.info("Alle Kanten im Graphen: {}", graph.edgeSet());
}


// Noch Fehlerhaft und versehntlich in dieser Branch gelandet
public List<DefaultEdge> getShortestPathWithDijkstra(Vertex start, Vertex ziel) {
    LOGGER.info("Übergebene Werte: ({}, {})", start, ziel);
    DijkstraShortestPath<Vertex, DefaultEdge> dijkstra = new DijkstraShortestPath<>(graph);
    GraphPath<Vertex, DefaultEdge> shortestPath = dijkstra.getPath(start, ziel);
    return shortestPath.getEdgeList();
}


public void loadMap(String filePath) throws IOException, IllegalArgumentException {
    List<String> lines = new ArrayList<>();
    int width = 0;

    // Datei einlesen und die Zeilen speichern
    try (BufferedReader reader = new BufferedReader(new FileReader(mapsDirectory + filePath + ".txt"))) {
        String line;
        while ((line = reader.readLine()) != null) {
            lines.add(line);// Speichert die Zeilen der Datei
            width = Math.max(width, line.length());
        }
    }
     // Überprüfen, ob die Datei nach dem Einlesen leer ist
     if (lines.isEmpty()) {
        throw new IllegalArgumentException("The map file is empty, no map can be created.");
    }

    // Höhe und Breite der Karte festlegen
    int height = lines.size();
    map = new char[height][width];

    // Zeilen in das map übertragen
    for (int x = 0; x < height; x++) {
        String line = lines.get(x);
        for (int y = 0; y < line.length(); y++) {
            char symbol = line.charAt(y);
            if (symbol != '*' && symbol != ' ') {
                throw new IllegalArgumentException("Unknown character in map: " + symbol);
            }else{
                map[x][y] = symbol; // Korrekte Symbol werden gespeichert
            }
        }
    }
}

public void updateMapState(int x, int y, char symbol) {
    if (x >= 0 && x < map.length && y >= 0 && y < map.length && map[x][y] == ' ') {
        map[x][y] = symbol;
    } else {
        LOGGER.warn("Invalid position to update map: ({}, {})", x, y);
    }
}

public void createTiles(){
    tilesList.clear(); // zurücksetzen
    if (map == null || map.length == 0) {
        return; // keine Karte heisst keine TIles
    }

    for (int x = 0; x < map.length; x++) {
        for (int y = 0; y < map[x].length; y++) {
            Tile tile = createTile(map[x][y]);// Tile der Liste hinzufügen
            tilesList.add(tile);
        }
    }
}

private Tile createTile(char symbol) {
    switch (symbol) {
        case '*': // Wand
            return new Tile(TileType.WALL);
        case ' ': // Frei
            countSurface++;
            return new Tile(TileType.SURFACE);
            default:
            // Dies sollte nie passieren, da wir bereits in loadMap() prüfen
            LOGGER.error("Unexpected symbol '{}' found during tile creation", symbol);
            return new Tile(TileType.SURFACE); // Fallback zu einem Standardwert
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

public int getMapCol(){
    return mapCol;
}

public int getMapRow(){
    return mapRow;
}

public DefaultUndirectedGraph<Vertex, DefaultEdge> getGraph() {
    return graph;
}

public void setGraph(DefaultUndirectedGraph<Vertex, DefaultEdge> graph) {
    this.graph = graph;
}

public int getCountSurface() {
    return countSurface;
}

public void setCountSurface(int countSurface) {
    this.countSurface = countSurface;
}

}
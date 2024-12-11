package de.hs_rm.backend.gamelogic.map;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

public class PlayMapServiceTest {

    private PlayMapService playMapService;

    @BeforeEach
    void setUp() {
        playMapService = new PlayMapService();
    }

    @Test
    void testCreatePlayMap() {
        String mapName = "testMap";
        PlayMap playMap = playMapService.createPlayMap(mapName);

        assertNotNull(playMap, "PlayMap should not be null");
    }

    @Test// Überprüfen, ob die Karten korrekt abgerufen wurden
    void testGetAllMapNames() throws IOException {
        // Temporäre Test-Dateien
        Path mapFolderPath = Path.of("src/main/resources/maps");
        Files.createDirectories(mapFolderPath);
        Files.write(mapFolderPath.resolve("testMap1.txt"), "****\n*  *\n****".getBytes());
        Files.write(mapFolderPath.resolve("testMap2.txt"), "****\n*  *\n****".getBytes());

        List<String> mapNames = playMapService.getAllMapNames();

        assertTrue(mapNames.contains("testMap1"), "Map names should include 'testMap1'");
        assertTrue(mapNames.contains("testMap2"), "Map names should include 'testMap2'");

        // Dateien löschen
        Files.deleteIfExists(mapFolderPath.resolve("testMap1.txt"));
        Files.deleteIfExists(mapFolderPath.resolve("testMap2.txt"));
    }


    @Test // Überprüfen, ob die Karten korrekt abgerufen wurden
    void testGetAllMaps() throws IOException {
        // Temporäre Test-Dateien
        Path mapFolderPath = Path.of("src/main/resources/maps");
        Files.createDirectories(mapFolderPath);
        Files.write(mapFolderPath.resolve("testMap1.txt"), "****\n*  *\n****".getBytes());
        Files.write(mapFolderPath.resolve("testMap2.txt"), "****\n* **\n****".getBytes());

        Map<String, char[][]> allMaps = playMapService.getAllMaps();

        assertTrue(allMaps.containsKey("testMap1"), "Map collection should include 'testMap1'");
        assertTrue(allMaps.containsKey("testMap2"), "Map collection should include 'testMap2'");

        // Erwartete
        char[][] expectedMap1 = {
            {'*', '*', '*', '*'},
            {'*', ' ', ' ', '*'},
            {'*', '*', '*', '*'}
        };

        char[][] expectedMap2 = {
            {'*', '*', '*', '*'},
            {'*', ' ', '*', '*'},
            {'*', '*', '*', '*'}
        };

        assertArrayEquals(expectedMap1, allMaps.get("testMap1"), "'testMap1' content should match expected content");
        assertArrayEquals(expectedMap2, allMaps.get("testMap2"), "'testMap2' content should match expected content");

        // Dateien löschen
        Files.deleteIfExists(mapFolderPath.resolve("testMap1.txt"));
        Files.deleteIfExists(mapFolderPath.resolve("testMap2.txt"));
    }
    

    @Test //getter und setter
    void testSetAndGetMapNames() {
        List<String> testMapNames = List.of("map1", "map2", "map3");
        playMapService.setMapNames(testMapNames);

        assertEquals(testMapNames, playMapService.getMapNames(), "Map names should match the set value");
    }
}
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
        playMapService.mapsDirectory = "src/test/resources/maps/"; //Testverzeichnis
    }

    @Test // Überprüft, ob eine PlayMap erfolgreich erstellt werden kann
    void testCreatePlayMap() {
        Path testDir = null;

    try {
        // Testverzeichnis
        testDir = Path.of("src/test/resources/maps");
        Files.createDirectories(testDir);

        // Testkarte
        Path testFile = testDir.resolve("testMap.txt");
        Files.write(testFile, "****\n*  *\n****".getBytes());

        // Kartenverzeichnis setzen
        playMapService.mapsDirectory = testDir.toString() + "/";

        PlayMap playMap = playMapService.createPlayMap("testMap");

        assertNotNull(playMap, "PlayMap sollte nicht null sein");
        assertArrayEquals(
            new char[][] {
                {'*', '*', '*', '*'},
                {'*', ' ', ' ', '*'},
                {'*', '*', '*', '*'}
            },
            playMap.getMap(),
            "Die Karte entspricht nicht der erwarteten Struktur"
        );

    } catch (IOException e) {
        System.err.println("Fehler bei Dateioperationen: " + e.getMessage());
        e.printStackTrace();
        fail("Fehler bei Dateioperationen");
    } finally {
        // Löschen von Testdateien und Testverzeichnis
        try {
            if (testDir != null) {
                Files.deleteIfExists(testDir.resolve("testMap.txt"));
                Files.deleteIfExists(testDir);
            }
        } catch (IOException cleanupException) {
            System.err.println("Fehler beim Löschen der Testdateien: " + cleanupException.getMessage());
        }
    }
    }


    @Test // Überprüft, ob alle Karten korrekt geladen werden
    void testGetAllMaps() throws IOException {
        Path testDir = Path.of("src/test/resources/maps");
        Files.createDirectories(testDir);
        Files.write(testDir.resolve("testMap1.txt"), "****\n*  *\n****".getBytes());
        Files.write(testDir.resolve("testMap2.txt"), "****\n* **\n****".getBytes());
        
        playMapService.mapsDirectory = testDir.toString() + "/";
    
        Map<String, char[][]> allMaps = playMapService.getAllMaps();
    
        assertTrue(allMaps.containsKey("testMap1"));
        assertTrue(allMaps.containsKey("testMap2"));
    
        assertArrayEquals(new char[][] {
            {'*', '*', '*', '*'},
            {'*', ' ', ' ', '*'},
            {'*', '*', '*', '*'}
        }, allMaps.get("testMap1"));
    
        assertArrayEquals(new char[][] {
            {'*', '*', '*', '*'},
            {'*', ' ', '*', '*'},
            {'*', '*', '*', '*'}
        }, allMaps.get("testMap2"));
    
        Files.deleteIfExists(testDir.resolve("testMap1.txt"));
        Files.deleteIfExists(testDir.resolve("testMap2.txt"));
    }

    @Test // Überprüft, ob bei einem ungültigen Verzeichnis keine Karten geladen werden
    void testInvalidMapsDirectory() {
        playMapService.mapsDirectory = "invalid/path/";

        List<String> mapNames = playMapService.getAllMapNames();
        assertTrue(mapNames.isEmpty(), "Map names should be empty for an invalid directory");
    }

    @Test // Überprüft, ob ein leeres Verzeichnis keine Karten zurückgibt
    void testEmptyMapsDirectory() throws IOException {
        Path testDir = Path.of("src/test/resources/emptyMaps");
        Files.createDirectories(testDir);

        playMapService.mapsDirectory = testDir.toString() + "/";

        List<String> mapNames = playMapService.getAllMapNames();
        assertTrue(mapNames.isEmpty(), "Map names should be empty for an empty directory");
    }

    @Test // Überprüft, ob das Erstellen einer PlayMap mit einem ungültigen Namen fehlschlägt
    void testCreatePlayMapWithInvalidName() {
        playMapService.mapsDirectory = "src/test/resources/maps/";

        assertThrows(IllegalArgumentException.class, () -> {
            playMapService.createPlayMap("nonExistentMap");
        });
    }

    @Test //getter und setter
    void testSetAndGetMapNames() {
        List<String> testMapNames = List.of("map1", "map2", "map3");
        playMapService.setMapNames(testMapNames);

        assertEquals(testMapNames, playMapService.getMapNames(), "Map names should match the set value");
    }
    
}
package de.hs_rm.backend.gamelogic.map;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir; 

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class PlayMapTest {

    @TempDir
    Path tempDir;

    @Test // Test für eine gültige Karte
    void testLoadMapValidFile() throws IOException {
         // Pfad zur temporären Test-Datei
         Path resourcePath = tempDir.resolve("tempMap.txt");
        // Test-Datei
        Files.write(resourcePath, """
            ****
            *  *
            * **
            *  *
            ****
            """.stripIndent().getBytes());

            PlayMap playMap = new PlayMap("tempMap", tempDir.toString() + "/");

            // Erwartete Karte
            char[][] expectedMap = {
                { '*', '*', '*', '*' },
                { '*', ' ', ' ', '*' },
                { '*', ' ', '*', '*' },
                { '*', ' ', ' ', '*' },
                { '*', '*', '*', '*' }
            };
            // Überprüfen, ob es der Erwartung enspricht
            assertArrayEquals(expectedMap, playMap.getMap());
            assertEquals(5, playMap.getHeight());
            assertEquals(4, playMap.getWidth());
        
        }

        @Test //Test für den Fall, dass ein ungültiges Symbol in der Karte ist
        void testIllegalArgumentException() throws IOException {
            Path resourcePath = tempDir.resolve("tempMap.txt");
            Files.write(resourcePath, """
                ****
                *  *
                * #*
                *  *
                ****
                """.stripIndent().getBytes());
        
            // Test auf IllegalArgumentException
            assertThrows(IllegalArgumentException.class, () -> {
                new PlayMap("tempMap", tempDir.toString() + "/");
            });
        
        }


    
        @Test // Test für eine leere Karte, die keine Daten enthält
        void testEmptyMapFile() throws IOException {
            Path resourcePath = tempDir.resolve("emptyMap.txt");
            Files.write(resourcePath, "".getBytes()); // Leere Datei erstellen
        
            // // Test auf IllegalArgumentException
            assertThrows(IllegalArgumentException.class, () -> {
                new PlayMap("tempMap", tempDir.toString() + "/");
            });
    
        }
        

    @Test // Test für den Fall, dass der Dateiname null oder ungültig ist
    void testNullFileName() {
        assertThrows(IllegalArgumentException.class, () -> {
            new PlayMap(null, tempDir.toString() + "/");
        });

        assertThrows(IllegalArgumentException.class, () -> {
            new PlayMap("", tempDir.toString() + "/");
        });
    }


    @Test // Test für updateMapState
    void testUpdateMapStateTest() throws IOException {
        Path resourcePath = tempDir.resolve("tempMap.txt");
        Files.write(resourcePath, """
            ****
            *  *
            * **
            *  *
            ****
            """.stripIndent().getBytes());
    
        PlayMap playMap = new PlayMap("tempMap", tempDir.toString() + "/");
    
        char[][] initialMap = {
            { '*', '*', '*', '*' },
            { '*', ' ', ' ', '*' },
            { '*', ' ', '*', '*' },
            { '*', ' ', ' ', '*' },
            { '*', '*', '*', '*' }
        };
    
        assertArrayEquals(initialMap, playMap.getMap(), "Die Karte entspricht nicht der erwarteten Anfangskonfiguration.");
    
        char[][] expectedMap = {
            { '*', '*', '*', '*' },
            { '*', 'G', 'G', '*' },
            { '*', 'S', '*', '*' },
            { '*', 'G', ' ', '*' },
            { '*', '*', '*', '*' }
        };
    
        playMap.updateMapState(2, 1, 'S');  
        playMap.updateMapState(1, 1, 'G');  
        playMap.updateMapState(1, 2, 'G'); 
        playMap.updateMapState(3, 1, 'G'); 
    
        assertArrayEquals(expectedMap, playMap.getMap(), "Die Karte nach den Änderungen entspricht nicht der erwarteten Karte.");

        // ungültige pos
        playMap.updateMapState(0, 0, 'G'); 
        assertEquals('*', playMap.getMap()[0][0]);

    }


    @Test // Test für updateMapState
    void testUpdateMapStateTest() throws IOException {
        Path resourcePath = Path.of("src/main/resources/maps/tempMap.txt");
        Files.write(resourcePath, """
            ****
            *  *
            * **
            *  *
            ****
            """.stripIndent().getBytes());
    
        PlayMap playMap = new PlayMap("tempMap");
    
        char[][] initialMap = {
            { '*', '*', '*', '*' },
            { '*', ' ', ' ', '*' },
            { '*', ' ', '*', '*' },
            { '*', ' ', ' ', '*' },
            { '*', '*', '*', '*' }
        };
    
        assertArrayEquals(initialMap, playMap.getMap(), "Die Karte entspricht nicht der erwarteten Anfangskonfiguration.");
    
        char[][] expectedMap = {
            { '*', '*', '*', '*' },
            { '*', 'G', 'G', '*' },
            { '*', 'S', '*', '*' },
            { '*', 'G', ' ', '*' },
            { '*', '*', '*', '*' }
        };
    
        playMap.updateMapState(2, 1, 'S');  
        playMap.updateMapState(1, 1, 'G');  
        playMap.updateMapState(1, 2, 'G'); 
        playMap.updateMapState(3, 1, 'G'); 
    
        assertArrayEquals(expectedMap, playMap.getMap(), "Die Karte nach den Änderungen entspricht nicht der erwarteten Karte.");

        // ungültige pos
        playMap.updateMapState(0, 0, 'G'); 
        assertEquals('*', playMap.getMap()[0][0]);

    
        Files.delete(resourcePath);
    }
}
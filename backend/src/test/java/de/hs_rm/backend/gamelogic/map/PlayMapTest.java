package de.hs_rm.backend.gamelogic.map;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class PlayMapTest {

    @Test // Test für eine gültige Karte
    void testLoadMapValidFile() throws IOException {
         // Pfad zur temporären Test-Datei
        Path resourcePath = Path.of("src/main/resources/maps/tempMap.txt");
        // Test-Datei
        Files.write(resourcePath, """
            ****
            *  *
            * **
            *  *
            ****
            """.stripIndent().getBytes());

            PlayMap playMap = new PlayMap("tempMap");

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
        
            // Datei löschen
            Files.delete(resourcePath);
        }

        @Test //Test für den Fall, dass ein ungültiges Symbol in der Karte ist
        void testIllegalArgumentException() throws IOException {
            Path resourcePath = Path.of("src/main/resources/maps/tempMap.txt");
            Files.write(resourcePath, """
                ****
                *  *
                * #*
                *  *
                ****
                """.stripIndent().getBytes());
        
            // Test auf IllegalArgumentException
            assertThrows(IllegalArgumentException.class, () -> {
                new PlayMap("tempMap");
            });
        
            Files.delete(resourcePath);
        }


    
        @Test // Test für eine leere Karte, die keine Daten enthält
        void testEmptyMapFile() throws IOException {
            Path resourcePath = Path.of("src/main/resources/maps/emptyMap.txt");
            Files.write(resourcePath, "".getBytes()); // Leere Datei erstellen
        
            // // Test auf IllegalArgumentException
            assertThrows(IllegalArgumentException.class, () -> {
                new PlayMap("emptyMap"); 
            });
        
            Files.delete(resourcePath); // Datei nach Test löschen
        }
        

    @Test // Test für den Fall, dass der Dateiname null oder ungültig ist
    void testNullFileName() {
        PlayMap playMap = new PlayMap("null");
        
        // map/tiles sollte leer sein
        assertEquals(0, playMap.getMap().length);
        assertTrue(playMap.getTilesList().isEmpty());
        assertEquals(0, playMap.getWidth());
        assertEquals(0, playMap.getHeight());
    }
}
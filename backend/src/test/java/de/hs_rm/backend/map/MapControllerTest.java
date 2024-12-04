package de.hs_rm.backend.map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import de.hs_rm.backend.api.MapController;

public class MapControllerTest {
    
    @Test
    //Dieser Test testet die Funktionalität, ob diese wirklich abgespeichert wird wenn man valide daten eingibt
    public void saveMapTestValidInput(){
        MapController mapController= new MapController(); 
        Map<String, Object> valideRequest = new HashMap<>(); 
        valideRequest.put("name", "testMap"); 
        valideRequest.put("tiles", List.of("wall", "weg", "wall"));
    
        
        //Aufruf der Methode mit der eingabe
        ResponseEntity<String> response = mapController.saveMap(valideRequest);

        //Überprüfung 
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(" Die Map wurde erfolgreich gespeichert.", response.getBody());
        //Überprüfung, ob die Datei erstellt wurde
        //Überprüfung im Ordner 
        File file= new File("src/main/resources/maps/testMap.txt");
        assertTrue(file.exists(), "Die Datei wurde nicht erstellt.");

        //Überprüfung ob bei der Speicherung auch alle Daten korrekt gespeichert wurden
        try(BufferedReader reader= new BufferedReader(new FileReader(file))){
            List<String> fileContent= reader.lines().toList();
            List<String> expectedLines = List.of("*", " ", "*");

            assertEquals(expectedLines.size(), fileContent.size(), "Die Anzahl der Zeilen in der Datei ist nicht korrekt.");

            // Zeilen einzeln vergleichen
            for (int i = 0; i < expectedLines.size(); i++) {
                assertEquals(expectedLines.get(i), fileContent.get(i), "Die Zeile " + (i + 1) + " ist nicht korrekt.");
            }
        } catch (IOException e) {
            throw new RuntimeException("Fehler beim Lesen der Datei: " + e.getMessage());
        }
            // Datei löschen, um den Testumgebung sauber zu halten
        assertTrue(file.delete(), "Die Datei sollte nach dem Test gelöscht werden.");

          
    }

    @Test
    // Überprüfung wenn der Name in der Map fehlt
    public void saveMapMissingName(){
        MapController mapController= new MapController(); 
        Map<String, Object> invalideRequest = new HashMap<>(); 
        invalideRequest.put("tiles", List.of("wall", "weg", "wall"));

        ResponseEntity<String> responseEntity= mapController.saveMap(invalideRequest); 

        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals(" The name for the Map is missing.", responseEntity.getBody());
    }

    @Test
    //Überprüfung wenn Daten der Tiles fehlen also null sind 
    public void saveMapMissingTilse(){
        MapController mapController= new MapController(); 
        Map<String, Object> invalideRequest= new HashMap<>(); 
        invalideRequest.put("name", "testMap"); 

        ResponseEntity<String> responseEntity= mapController.saveMap(invalideRequest); 

        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals("Map Data is missing", responseEntity.getBody());
    }


}

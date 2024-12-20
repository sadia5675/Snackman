package de.hs_rm.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.GameService;
import de.hs_rm.backend.gamelogic.map.PlayMap;
import de.hs_rm.backend.gamelogic.map.PlayMapService;
import jakarta.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
//so kreifen wir auf dei Daten im frontend zu
@RequestMapping("/api/maps")
public class MapController {
    @Autowired
    PlayMapService playMapService;

    @Value("${maps.dir}")
    private String mapsDirectory;

    @Value("${map.grid.min}")
    private int minGridSize;

    @Value("${map.grid.max}")
    private int maxGridSize;

    @PostMapping
    public ResponseEntity<String> saveMap(@RequestBody Map<String,Object> requestMap) {
        //TODO: process POST request
        
        String mapName = (String) requestMap.get("name");
        List <String> mapData =(List<String>)requestMap.get("tiles");

        //Valideirung zum Namen der Map
        if (mapName == null || mapName.trim().isEmpty()){
            return ResponseEntity.badRequest().body(" The name for the Map is missing.");
        }
        if (mapData == null|| mapData.isEmpty()){
            return ResponseEntity.badRequest().body("Map Data is missing");
        }
        //Map speichern 
        try{
            // die Map speichert sich in dem gegebenen Ordner verzeichnis
            File mapFile= new File(mapsDirectory);
            // wenn dieser nicht existieren sollte wird dieser ertsllt
            if(!mapFile.exists()){
                mapFile.mkdirs();
            }

            //Dieser Part beschäftigt sich mit der txt-Datei, dabei wird eine Json-Datei vom Frontend in einer .txt umgewandetlt
            File file= new File (mapFile, mapName + fileExtension);
            //liest die Daten aus der json datei
            try(BufferedWriter writer = new BufferedWriter(new FileWriter(file))){
                //geht zeilen weise durch 
                for(String row: mapData){
                    //im frontend --> MapCreator ist es so dass die Maps mit walls und ways gekennzeichent worden ist--> hier werden diese dann durch leerzeichen(way) und *(wall) umgewandelt
                    String replace= row.replace("weg", " ").replace("wall", "*");
                    writer.write(replace);
                    writer.newLine();
                }
            }//Antwort an front gesendet
            return ResponseEntity.ok(" Die Map wurde erfolgreich gespeichert.");
        }catch (IOException e){
            e.printStackTrace();// fehler beim Speichern der Map: + e.getMessage()
            return ResponseEntity.status(500).body("Somethink went Wrong :( " + e.getMessage());
        }
    }

    @GetMapping("/grid-limits")
    public ResponseEntity<Map<String, Integer>> getGridLimits() {
        Map<String, Integer> limits = new HashMap<>();
        limits.put("min", minGridSize);
        limits.put("max", maxGridSize);
        return ResponseEntity.ok(limits);
    }


    @GetMapping// name und array mit symbolen
    public ResponseEntity<Map<String, Object>> getAllMaps() {
        Map<String, char[][]> allMaps = playMapService.getAllMaps();
        return createOkResponse(allMaps);
    }

    
    // Helper method for standardized error response
    private ResponseEntity<Map<String, Object>> createErrorResponse(String feedbackMessage) {
        Map<String, Object> feedbackData = new HashMap<>();
        feedbackData.put("status", "error");
        feedbackData.put("feedback", feedbackMessage);
        feedbackData.put("time", LocalDateTime.now().toString());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(feedbackData);
    }

    // Helper method for standardized ok response
    private ResponseEntity<Map<String, Object>> createOkResponse(Map<String, char[][]> allMaps) {
            Map<String, Object> feedbackData = new HashMap<>();
            ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
            String gameJSON;
            feedbackData.put("status", "ok");
            feedbackData.put("time", LocalDateTime.now().toString());
            try {
                gameJSON = ow.writeValueAsString(allMaps);
                feedbackData.put("feedback", allMaps);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            feedbackData.put("feedback", "something in backend went wrong!");
        }

        return ResponseEntity.status(HttpStatus.OK).body(feedbackData);
    }

}

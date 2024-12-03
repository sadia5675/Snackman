package de.hs_rm.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
//so kreifen wir auf dei Daten im frontend zu
@RequestMapping("/api/maps")
public class MapController {
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
            File mapFile= new File("src/main/resources/maps");
            // wenn dieser nicht existieren sollte wird dieser ertsllt
            if(!mapFile.exists()){
                mapFile.mkdirs();
            }

            //Dieser Part beschäftigt sich mit der txt-Datei, dabei wird eine Json-Datei vom Frontend in einer .txt umgewandetlt
            File file= new File (mapFile, mapName + ".txt");
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

    @GetMapping
    public ResponseEntity <List<String>> allMaps() {

    // Der Pfad zum Map-Ordner
    File mapFolder = new File("src/main/resources/maps");
    String[] files = mapFolder.list();

    //Liste zur maps wird erstellt 
    List<String> mapNames = new ArrayList<>();
    for (String file : files) {
        if (file.endsWith(".txt")) {
            mapNames.add(file.replace(".txt", " "));
        }
    }
    return ResponseEntity.ok(mapNames); // Map-Namen zurückgeben
    
    }
}

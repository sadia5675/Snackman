package de.hs_rm.backend.gamelogic.map;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PlayMapService {

    @Value("${maps.dir}")
    String mapsDirectory;



    List<String> mapNames;


    public PlayMapService() {
        this.mapNames = new ArrayList<>();
    }

    public PlayMap createPlayMap(String name){
        PlayMap playmap = new PlayMap(name, mapsDirectory);
        playmap.createTiles();
        return playmap;
    }

    public List<String> getAllMapNames() {
        File mapFolder = new File("src/main/resources/maps");
        String[] files = mapFolder.list();

        List<String> mapNames = new ArrayList<>();
        if (files != null) {
            for (String file : files) {
                if (file.endsWith(".txt")) {
                    mapNames.add(file.replace(".txt", ""));
                }
            }
        }
        return mapNames;
    }

     public Map<String, char[][]> getAllMaps() {
        List<String> mapNames = getAllMapNames();
        Map<String, char[][]> allMaps = new HashMap<>();

        for (String mapName : mapNames) {
            PlayMap playMap = new PlayMap(mapName, mapsDirectory);
            allMaps.put(mapName, playMap.getMap());
        }
        return allMaps;
    }

    public List<String> getMapNames() {
        return mapNames;
    }

    public void setMapNames(List<String> mapNames) {
        this.mapNames = mapNames;
    }
    
}

package de.hs_rm.backend.gamelogic.map;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import de.hs_rm.backend.api.MapController;

@Service
public class PlayMapService {
    
    private List<String> mapNames;

        private static final Logger LOGGER = LoggerFactory.getLogger(MapController.class);

    
    @Value("${maps.dir}")
    String mapsDirectory;


    public PlayMapService() {
        this.mapNames = new ArrayList<>();
    }

    public PlayMap createPlayMap(String name){
        PlayMap playmap = new PlayMap(name, mapsDirectory);
        playmap.createTiles();
        return playmap;
    }

    public List<String> getAllMapNames() {
        LOGGER.info("Maps directory: {}", mapsDirectory);
        File mapFolder = new File(mapsDirectory);
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

        LOGGER.info("Found map names: {}", mapNames);

        for (String mapName : mapNames) {
            try {
                PlayMap playMap = new PlayMap(mapName, mapsDirectory);
                allMaps.put(mapName, playMap.getMap());
            } catch (Exception e) {
                LOGGER.error("Error loading map: {}", mapName, e);
            }
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

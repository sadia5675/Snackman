package de.hs_rm.backend.api;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.map.Tile;

// @Service
public class ChickenEnvironmentApi {

    private int width;
    private int height;

    Logger logger = LoggerFactory.getLogger(ChickenEnvironmentApi.class);


    public ChickenEnvironmentApi(Game game) {
        this.existingGame = game;
        this.width = game.getPlaymap().getWidth();
        this.height = game.getPlaymap().getHeight();    
    }

    private Game existingGame;
    

    public List<Tile> getEnvironment(int posX, int posY) {
        int chickenIndexOntile = posX + posY * width;
        // logger.info("ChickenPosition: {}, {}", posX, posY);
        // logger.info("ChickenIndexOnTile: {}", chickenIndexOntile);
        if(existingGame == null){
            throw new IllegalArgumentException("Game does not exist");
        }

        List<Tile> restrictedTileList = new ArrayList<>();
        
        for (int y = posY - 1; y <= posY + 1; y++) {
            for (int x = posX - 1; x <= posX + 1; x++) {
                if (x >= 0 && x < width && y >= 0 && y < height) {
                    int index = y * width + x;
                    // logger.info("Füge Tile bei Index {} hinzu", index);
                   
                    if (index >= 0 && index < existingGame.getPlaymap().getTilesList().size()) {
                        restrictedTileList.add(existingGame.getPlaymap().getTilesList().get(index));
                        // logger.info("Environment for posX: " + posX + ", posY: " + posY + ", Tiles: " + restrictedTileList.size());

                    }
                    
                  
                }
            }
        }
      
        

        return restrictedTileList;
    }

    public int getMapWidth() {
        return width;
    }

    public int getMapHeight() {
        return height;
    }       
    
}

package de.hs_rm.backend.api;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.map.Tile;

// @Service
public class ChickenEnvironmentApi {

    private int width;
    private int height;

    public ChickenEnvironmentApi(Game game) {
        this.existingGame = game;
        this.width = game.getPlaymap().getWidth();
        this.height = game.getPlaymap().getHeight();    
    }

    private Game existingGame;
    

    public List<Tile> getEnvironment(int posX, int posY) {
        int chickenIndexOntile = posY * width + posX;
        if(existingGame == null){
            throw new IllegalArgumentException("Game does not exist");
        }

        List<Tile> restrictedTileList = new ArrayList<>();
        // ToDo Aron:
        for (int i = chickenIndexOntile - 4; i <= chickenIndexOntile + 4; i++) {
            if (i >= 0 && i < existingGame.getPlaymap().getTilesList().size()) {
                restrictedTileList.add(existingGame.getPlaymap().getTilesList().get(i));
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

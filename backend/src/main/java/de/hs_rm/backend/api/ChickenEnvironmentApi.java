package de.hs_rm.backend.api;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.map.Tile;

// @Service
public class ChickenEnvironmentApi {

    public ChickenEnvironmentApi(Game game) {
        this.existingGame = game;
    }

    private Game existingGame;
    

    // ToDo Aron: Muss hier wahrscheinlich die LobbyId mitgeben um aktuelles Spiel herauszubekommen. Woher bekomme ich die lobbyId des Games?
    public List<Tile> getEnvironment(int posX, int posY) {
        // Game existingGame = gameService.getGameById(lobbyId);
        if(existingGame == null){
            throw new IllegalArgumentException("Game does not exist");
        }

        List<Tile> restrictedTileList = new ArrayList<>();
        for (int i = posX -1; i <= posX + 1; i++) {
            for (int j = posY -1; j <= posY + 1; j++) {

                    Tile tile = existingGame.getPlaymap().getTileFromList(posX, posY);
                    if (tile != null) {
                        restrictedTileList.add(tile);
                    }
            }
        }

        return restrictedTileList;
    }
    
}

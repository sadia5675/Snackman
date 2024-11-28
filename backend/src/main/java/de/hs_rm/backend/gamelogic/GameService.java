package de.hs_rm.backend.gamelogic;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import de.hs_rm.backend.gamelogic.characters.players.Player;

@Service
public class GameService {

    private Map<String,Game> gameList = new HashMap<String,Game>();

    public Collection<Game> getGameList(){
        return gameList.values();
    }

    public Game getGameById(String gameId){
        return gameList.get(gameId);
    }

    public Game createGame(Player gamemaster){
        Game newGame = new Game(gamemaster);
        gameList.put(newGame.getId(), newGame);

        return newGame;
    }

    public Game startGame(String gameId) {
        Game game = gameList.get(gameId);
        
        if(game == null){
            return null;
        }

        game.start();

        return game;
    }

    public Game endGame(String gameId){
        Game game = gameList.get(gameId);

        if(game == null) {
            return null;
        }

        game.end();

        return game;
    
    }

    public Game joinGame(String gameId, Player player){
        Game game = gameList.get(gameId);

        if(game == null){
            return null;
        }

        game.joinGame(player);

        return game;
    }

    public Game setChicken(String gameId, int number){
        Game game = gameList.get(gameId);

        if(game == null){
            return null;
        }

        game.setChicken(number);

        return game;
    }

    public boolean move(String username, int targetX, int targetY) {
        if (username == null || username.isEmpty()) {
            throw new IllegalArgumentException("Username and direction must not be empty.");
        }

        // Iteriert über alle Games, um den Spieler zu finden
        for (Game game : gameList.values()) {
            Player player = game.findPlayerByUsername(username);
            if (player != null) {
                return game.move(username, targetX, targetY);
            }
        }
        throw new IllegalArgumentException("Player not found in any game.");
    }

}

package de.hs_rm.backend.gamelogic;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import de.hs_rm.backend.exception.GameJoinException;
import de.hs_rm.backend.gamelogic.characters.players.Player;

@Service
public class GameService {

    private Map<String,Game> gameList = new HashMap<String,Game>();
    Logger logger = LoggerFactory.getLogger(GameService.class);

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

        boolean containsName = game.getPlayers().stream().anyMatch(existingPlayer -> existingPlayer.getName().equals(player.getName()));

        logger.info("Game: {}, Player {}, ContainsName: {}", gameId, player.getName(),containsName);

        if(!containsName){
            game.joinGame(player);
        }else{
            throw new GameJoinException("Name already in Lobby!");
        }
        
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

    
}

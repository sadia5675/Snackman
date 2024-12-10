package de.hs_rm.backend.gamelogic;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import de.hs_rm.backend.exception.SetRoleException;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import de.hs_rm.backend.exception.GameJoinException;
import de.hs_rm.backend.gamelogic.characters.players.Character;
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

    public Game setRole(String gameId, String nameOfPlayerToSetRole, String role) {
        PlayerRole playerRoleToSet;

        try {
            playerRoleToSet = PlayerRole.valueOf(role);
        } catch (IllegalArgumentException e) {
            throw new SetRoleException("Role " + role + " not found!");
        }

        Game game = gameList.get(gameId);
        if (game == null) {
            throw new SetRoleException("Game not found!");
        }

        Player playerToSetRole = game.findPlayerByUsername(nameOfPlayerToSetRole);
        if (playerToSetRole == null) {
            throw new SetRoleException("Player to set role not found!");
        }

        playerToSetRole.setPlayerrole(playerRoleToSet);

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
    
    public Character getCharacterByPlayerName(String lobbyid, String playerName){
        Game existingGame = getGameById(lobbyid);

        if(existingGame != null){

            Character retChar = existingGame.getCharacters().get(playerName);

            return retChar;
        }

        return null;
    }
    
}

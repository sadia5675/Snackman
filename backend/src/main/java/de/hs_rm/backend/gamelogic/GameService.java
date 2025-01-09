package de.hs_rm.backend.gamelogic;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import de.hs_rm.backend.exception.SetRoleException;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import de.hs_rm.backend.gamelogic.map.PlayMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import de.hs_rm.backend.exception.GameJoinException;
import de.hs_rm.backend.gamelogic.characters.players.Player;

@Service
public class GameService {

    @Value("${snackman.life}")
    private int snackmanLife;

    @Value("${snackman.maxLife}")
    private int snackmanMaxLife;

    @Value("${snackman.speed}")
    private double snackmanSpeed;

    @Value("${ghost.speed}")
    private double ghostSpeed;

    @Value("${game.itemsPerSurfaceRatio}")
    private int itemsPerSurfaceRatio;
    
    private Map<String,Game> gameList = new HashMap<String,Game>();
    Logger logger = LoggerFactory.getLogger(GameService.class);

    public Collection<Game> getGameList(){
        return gameList.values();
    }

    public Game getGameById(String gameId){
        return gameList.get(gameId);
    }

    public Game createGame(Player gamemaster){
        Game newGame = new Game(gamemaster, snackmanLife, snackmanMaxLife, snackmanSpeed, ghostSpeed, itemsPerSurfaceRatio);
        gameList.put(newGame.getId(), newGame);

        return newGame;
    }

    public Game startGame(String gameId, PlayMap playMap) {
        Game game = gameList.get(gameId);

        if(game == null){
            return null;
        }

        game.start(playMap);

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

    public Game leaveGame(String gameId,Player player){
        Game game = gameList.get(gameId);

        if(game == null){
            return null;
        }

        game.leaveGame(player);

        return game;
    }

    public Game joinGame(String gameId, Player player){
        Game game = gameList.get(gameId);

        if(game == null){
            return null;
        }

        boolean containsName = game.getPlayers().stream().anyMatch(existingPlayer -> existingPlayer.getName().equals(player.getName()));

        logger.info("Game: {}, Player {}, ContainsName: {}", gameId, player.getName(),containsName);
        logger.info("PrivateLobby: {}, Player Password: {}, Game Password: {}", game.getPrivateLobby(), player.getPassword(), game.getPassword());

        if(game.getPrivateLobby() && !Objects.equals(player.getPassword(), game.getPassword())){
            throw new GameJoinException("Wrong Password!");
        }

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

    public boolean move(String username, int targetX, int targetY) {
        // Um den Spieler zu finden
        for (Game game : gameList.values()) {
            Player player = game.findPlayerByUsername(username);
            if (player != null) {
                // Spielfeldgrenzen
                if (targetX < 0 || targetY < 0 || targetX >= game.getPlaymap().getWidth()
                        || targetY >= game.getPlaymap().getHeight()) {
                    throw new IllegalArgumentException(
                            "Target position (" + targetX + ", " + targetY + ") is out of bounds.");
                }
                //Bewegung
                boolean success = game.move(username, targetX, targetY, (double)0);
                if (!success) {
                    throw new IllegalArgumentException(
                            "Failed to move Player '" + username + "'. Tile is a wall");
                } else {
                    return success;
                }
            }
        }
        throw new IllegalArgumentException("Player '" + username + "' not found in any game.");
    }

    public void setGameList(Map<String, Game> gameList) {
        this.gameList = gameList;
    }

}

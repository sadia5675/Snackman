package de.hs_rm.backend.gamelogic;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import de.hs_rm.backend.exception.SetRoleException;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import de.hs_rm.backend.gamelogic.map.PlayMap;
import de.hs_rm.backend.gamelogic.map.Tile;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import de.hs_rm.backend.exception.GameJoinException;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.PlayerPosition;
import de.hs_rm.backend.gamelogic.characters.players.Character;

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

    public void setSelectedTheme(String lobbyid, String theme){
        Game existingGame = gameList.get(lobbyid);

        if(existingGame != null){
            existingGame.setSelectedTheme(theme);
        }
    }

    public String getSelectedTheme(String lobbyid){
        Game existingGame = gameList.get(lobbyid);

        if(existingGame != null){
            return existingGame.getSelectedTheme();
        }

        return "realistic";
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

        if(game.getPlayers().isEmpty()){
            gameList.remove(gameId);
            game = null;
        }

        return game;
    }

    public Boolean isJumpAllowed(String gameId, String playerName){

        Game curGame = gameList.get(gameId);
        Player curPlayer = curGame.getPlayers().stream()
                                                .filter(p -> p.getName().equals(playerName))
                                                .findFirst()
                                                .orElse(null);

        if(curPlayer != null){
            if(curPlayer.getPlayerrole() == PlayerRole.GHOST){
                return false;
            }else{
                return true;
            }
        }

        return false;

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

    public Map<String,Character> getCharacterListByGameId(String lobbyId){
        Game existingGame = getGameById(lobbyId);

        if(existingGame == null) {
            throw new IllegalArgumentException("No Game Found");
        }

        return existingGame.getCharacters();
    }

    public Collection<Object> getCharactersByGameId(String lobbyId){
        Game existingGame = getGameById(lobbyId);

        if(existingGame == null) {
            throw new IllegalArgumentException("No Game Found");
        }

        return existingGame.getCharacterDataWithNames().values();
    }

    public boolean move(String lobbyid, PlayerPosition position) {
        Game existingGame = getGameById(lobbyid);

        if(existingGame == null){
            throw new IllegalArgumentException("No Game Found");
        }

        if(existingGame.isStarted()){
            boolean validMove = existingGame.move(position.getPlayerName(), position.getPosX(), position.getPosY(), position.getPosZ(), position.getAngle());

            // Wenn Laut Game Bewegung nicht Valide, dann wird es nochmal mit anderen Werten
            // probiert um den Spieler wieder aus der Wand raus zu schieben (4 Mal für alle
            // 4 Himmelsrichtungen)
            if (!validMove) {
              validMove = adjustPlayerPositon(existingGame, null);   
            }

            return validMove;
        }

        return false;
    }

    public boolean adjustPlayerPositon(Game existingGame, PlayerPosition position){
        //Variable die dafür sogt das man eine bestimmten Abstand zu einer Wand hat
        float offset = 0.005f;

        if (existingGame.move(position.getPlayerName(),Math.round(position.getPosX()), position.getPosY(), position.getPosZ(), position.getAngle())) {
            position.setPosX((float) (Math.round(position.getPosX()) + offset));
            return true;
        } else if (existingGame.move(position.getPlayerName(), position.getPosX(), Math.round(position.getPosY()), position.getPosZ(), position.getAngle())) {
            position.setPosY((float) (Math.round(position.getPosY()) + offset));
            return true;
        } else if (existingGame.move(position.getPlayerName(), Math.floor(position.getPosX()) - offset, position.getPosY(), position.getPosZ(), position.getAngle())) {
            position.setPosX((float) (Math.floor(position.getPosX()) - offset));
            return true;
        } else if (existingGame.move(position.getPlayerName(), position.getPosX(), Math.floor(position.getPosY()) - offset, position.getPosZ(), position.getAngle())) {
            position.setPosY((float) (Math.floor(position.getPosY()) - offset));
            return true;
        }

        return false;
    }

    public boolean checkItemCollcted(String lobbyid){
        Game existingGame = getGameById(lobbyid);
        for(Tile tile : existingGame.getPlaymap().getTilesList()){
                if (tile.isItemWasRecentlyCollected()) {  
                    tile.setItemWasRecentlyCollected(false);
                    return true;
                }
        }
        return false;
    }

    public PlayerRole checkWinner(String lobbyid){
        Game existingGame = getGameById(lobbyid);

        existingGame.determineWinner();
        return existingGame.getWinnerRole();
    }

    public void setGameList(Map<String, Game> gameList) {
        this.gameList = gameList;
    }

}

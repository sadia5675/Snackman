package de.hs_rm.backend.gamelogic;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hs_rm.backend.gamelogic.characters.players.Chicken;
import de.hs_rm.backend.gamelogic.characters.players.Ghost;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.Snackman;
import de.hs_rm.backend.gamelogic.characters.players.Character;
import de.hs_rm.backend.gamelogic.map.PlayMap;
import de.hs_rm.backend.gamelogic.map.Tile;
import de.hs_rm.backend.gamelogic.map.TileType;
import main.java.de.hs_rm.backend.gamelogic.characters.players.PlayerRole;

public class Game {
    private static Set<String> existingIds = new HashSet<>(); // set --> verhindert Duplikate und static --> diese liste wird für alle Instanzen der Klasse geteilt
    private String id;
    private List<Player> players; //for lobby
    private List<Chicken> chickens;
    private Player gamemaster;
    private boolean started;
    private PlayMap playmap;
    private int chickenNum;

    
    private Map<String, Character> characters; // for game (after game start), strinng for username


    private static final Logger LOGGER = LoggerFactory.getLogger(Game.class);


    public Game(Player gamemaster) {
        this.id = generateId(5);
        this.players = new ArrayList<>();         
        this.chickens = new ArrayList<>();   
        this.gamemaster = gamemaster;      
        this.players.add(this.gamemaster);             
        this.started = false;     
        this.characters = new HashMap<>();                                   
    }

    // Generiert eindeutige ID
    // Synchronisieren --> verhindert, dass mehrere Threads gleichzeitig doppelte IDs erzeugen
    private synchronized String generateId(int length) {
        String newId;
        do {
            newId = generateRandomString(length);
        } while (existingIds.contains(newId)); 
        existingIds.add(newId); 
        return newId;
    }
    // Generiert einen zufälligen String aus Buchstaben und Zahlen
    private String generateRandomString(int length) {
        String alphaNumericString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder sb = new StringBuilder(length);
        Random random = new Random();

        for (int i = 0; i < length; i++) {
            int index = random.nextInt(alphaNumericString.length()); // zwischen 0 und alphaNumericString.length() - 1
            sb.append(alphaNumericString.charAt(index));
        }
        return sb.toString();
    }

    public boolean start(){
        this.started = true;
        LOGGER.info("started: {} gameid: {}", this.started, this.id);

        // TODO: hier sollte random name als param übergeben werden
        this.playmap = new PlayMap("map1",this);

        Random random = new Random();
        

        // DONE: hier sollte Charakter liste erstellen und player zu jedem charater zuweisen
        for (Player player : players) {
            Tile randomTile = null;
            // Wiederholen, bis ein Surface-Tile gefunden wird
            int index =-1;
            do {
                index = random.nextInt(playmap.getTilesList().size()); 
                randomTile = playmap.getTilesList().get(index);
            } while (randomTile.getType() != TileType.SURFACE || randomTile.hasCharacter());

            switch(player.getPlayerrole()){
                // DONE: random position von Charakter
                case GHOST -> {

                     characters.put(player.getName(), new Ghost(1.0, index%playmap.getWidth(),index/playmap.getWidth()));
                     randomTile.addCharacter(characters.get(player.getName()));
                }
                case SNACKMAN -> {

                     characters.put(player.getName(), new Snackman(1.0, index%playmap.getWidth(),index/playmap.getWidth(), 3));
                     randomTile.addCharacter(characters.get(player.getName()));
                }
                default ->{
                    LOGGER.warn("Unknown player role for player: {}", player.getName());
                }
            }
 
        }
        // DONE: random position von hühnchen
        for (int i = 0; i < this.chickenNum; i++) {
            Tile randomTile;
            int index = -1;
            do {
                index = random.nextInt(playmap.getTilesList().size()); 
                randomTile = playmap.getTilesList().get(index);
            } while (randomTile.getType() != TileType.SURFACE || randomTile.hasChicken());
            
            Chicken chicken = new Chicken(index%playmap.getWidth(),index/playmap.getWidth());
            chickens.add(chicken);
            //DONE: chicken zu random tile hinzufügen
            randomTile.addChicken(chicken);
        }

        return started;
    }

    public boolean end(){
        this.started = false;
        LOGGER.info("started: {}", this.started);
        return started;
    }

    // Entfernt einen Spieler aus der Liste, wenn sein uniqueName übereinstimmt
    public boolean kick(String usernameKicker,String usernameKicked){
        if(usernameKicked.contentEquals(gamemaster.getName())){
            return false;
        }
        if(!usernameKicker.contentEquals(gamemaster.getName())){
            return false;
        }
        for (int i = 0; i < players.size(); i++) {
            if (players.get(i).getName().equals(usernameKicked)) {
                players.remove(i); 
                System.err.println();
                LOGGER.info("Player with unique name {} has been kicked.", usernameKicked);
                return true;
            }
        }
        LOGGER.info("Player with unique name {} not found.", usernameKicked);
        return false;
    }

    public void joinGame(Player player){
        players.add(player);
    }

    public boolean addPlayer(Player newPlayer) {
        // Überprüfen, ob der Spieler bereits in der Liste ist
        for (Player player : players) {
            if (player.getName().equals(newPlayer.getName())) {
                LOGGER.warn("Player with name {} is already in the game.", newPlayer.getName());
                return false; // Spieler bereits vorhanden
            }
        }

        // Spieler zur Liste hinzufügen
        players.add(newPlayer);
        LOGGER.info("Player with name {} has been added to the game.", newPlayer.getName());
        return true;
    }

    public void setChicken(int total){
       LOGGER.info("Chicken: {}, Game: {}", total, this.id);
        this.chickenNum=total;

    }

    public Player findPlayerByUsername(String username) {
        if(players==null || players.isEmpty()){
            return null;
        }
        for (Player player : players) {
            if (player.getName().equals(username)) {
                return player;
            }
        }
        LOGGER.info("Player with username {} not found.", username);
        return null;
    }



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<Player> getPlayers() {
        return players;
    }

    // zufällig einen Spieler aus der Liste auszuwählen
    public Player getRandomPlayer() {
        if (players.isEmpty()) {
            return null; 
        }
        Random random = new Random();
        int index = random.nextInt(players.size()); // zwischen 0 und players.size() - 1
        return players.get(index); 
    }


    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public List<Chicken> getChickens() {
        return chickens;
    }

    public void setChickens(List<Chicken> chickens) {
        this.chickens = chickens;
    }

    public Player getGamemaster() {
        return gamemaster;
    }
    
    public void setGamemaster(Player gamemaster) {
        this.gamemaster = gamemaster;
    }

    public boolean isStarted() {
        return started;
    }

    public void setStarted(boolean started) {
        this.started = started;
    }

    public static Set<String> getExistingIds() {
        return existingIds;
    }

    public static void setExistingIds(Set<String> existingIds) {
        Game.existingIds = existingIds;
    }

    public PlayMap getPlaymap() {
        return playmap;
    }

    public void setPlaymap(PlayMap playmap) {
        this.playmap = playmap;
    }

    
}

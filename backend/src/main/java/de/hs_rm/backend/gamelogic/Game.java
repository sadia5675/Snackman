package de.hs_rm.backend.gamelogic;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hs_rm.backend.gamelogic.characters.players.Chicken;
import de.hs_rm.backend.gamelogic.characters.players.Player;

public class Game {
    private static Set<String> existingIds = new HashSet<>(); // set --> verhindert Duplikate und static --> diese liste wird für alle Instanzen der Klasse geteilt
    private String id;
    private List<Player> players;
    private List<Chicken> chickens;
    private Player gamemaster;
    private boolean started;
    // Map map;

    private static final Logger LOGGER = LoggerFactory.getLogger(Game.class);


    public Game(Player gamemaster) {
        this.id = generateId(5);
        this.players = new ArrayList<>();         
        this.chickens = new ArrayList<>();   
        this.gamemaster = gamemaster;      
        this.players.add(this.gamemaster);             
        this.started = false;                     
        // TODO: Random map generieren                        
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
            int index = random.nextInt(alphaNumericString.length()); 
            sb.append(alphaNumericString.charAt(index));
        }
        return sb.toString();
    }

    public boolean start(){
        this.started = true;
        LOGGER.info("started: {}", this.started);
        return started;
    }

    public boolean end(){
        this.started = false;
        LOGGER.info("started: {}", this.started);
        return started;
    }

    // Entfernt einen Spieler aus der Liste, wenn sein uniqueName übereinstimmt
    // TODO: man kann aber doch mit kick gamemaster zu kicken
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
       LOGGER.info("total Chicken: {}", total);
        // TODO: Implementierung für hinzufügen von Hühnern
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
}

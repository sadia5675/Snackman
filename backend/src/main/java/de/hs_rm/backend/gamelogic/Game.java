package de.hs_rm.backend.gamelogic;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hs_rm.backend.gamelogic.characters.players.Chicken;
import de.hs_rm.backend.gamelogic.characters.players.FoodItems;
import de.hs_rm.backend.gamelogic.characters.players.Ghost;
import de.hs_rm.backend.gamelogic.characters.players.NutriScore;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.Snackman;
import de.hs_rm.backend.gamelogic.characters.players.Character;
import de.hs_rm.backend.gamelogic.map.PlayMap;
import de.hs_rm.backend.gamelogic.map.Tile;
import de.hs_rm.backend.gamelogic.map.TileType;

public class Game {
    private static Set<String> existingIds = new HashSet<>(); // set --> verhindert Duplikate und static --> diese liste wird für alle Instanzen der Klasse geteilt
    private String id;
    private List<Player> players; //for lobby
    private List<Chicken> chickens;
    private Player gamemaster;
    private boolean started;
    private PlayMap playmap;
    private int chickenNum;
    private String selectedMap;

    private Map<String, Character> characters; // for game (after game start), strinng for username


    public Map<String, Character> getCharacters() {
        return characters;
    }

    public Map<String, Object> getCharacterDataWithNames() {
        Map<String, Object> characterData = new HashMap<>();
    
        for (Map.Entry<String, Character> entry : characters.entrySet()) {
            String username = entry.getKey(); // Der Name des Spielers (Key in der Map)
            Character character = entry.getValue();
    
            Map<String, Object> characterWithNames = new HashMap<>();
            characterWithNames.put("name", username); // Username hinzufügen
            characterWithNames.put("posX", character.getPosX());
            characterWithNames.put("posY", character.getPosY());
            characterWithNames.put("speed", character.getSpeed());
            characterWithNames.put("angleInDegrees", character.getAngleInDegrees());
    
            characterData.put(username, characterWithNames);
        }
    
        return characterData;
    }


    public void setCharacters(Map<String, Character> characters) {
        this.characters = characters;
    }

    private static final Logger LOGGER = LoggerFactory.getLogger(Game.class);

    // Globale Liste der vordefinierten FoodItems
    private static final List<FoodItems> FOOD_ITEMS = List.of(
        new FoodItems("Banana", -1, -1, NutriScore.A), // Positionen werden später festgelegt
        new FoodItems("Cookie", -1, -1, NutriScore.C),
        new FoodItems("Apple", -1, -1, NutriScore.B)
    );

    private static final int ITEMS_NUM = 5;


    public Game(Player gamemaster) {
        this.id = generateId(5);
        this.players = new ArrayList<>();
        this.chickens = new ArrayList<>();
        this.gamemaster = gamemaster;
        this.players.add(this.gamemaster);
        this.started = false;
        this.characters = new HashMap<>();
        this.selectedMap = selectedMap;
    }

    public String getSelectedMap() {
        return selectedMap;
    }

    public void setSelectedMap(String selectedMap) {
        this.selectedMap = selectedMap;
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

    public boolean start() {
        if (this.playmap == null) {
            return false;
        }
        return start(this.playmap);
    }

    public boolean start(PlayMap playMap) {
        this.started = true;
        LOGGER.info("started: {} gameid: {}", this.started, this.id);

        // TODO: hier sollte random name als param übergeben werden
        if (this.playmap == null) {
            this.playmap = playMap;
        }

        Random random = new Random();


        // DONE: hier sollte Charakter liste erstellen und player zu jedem charater zuweisen
        for (Player player : players) {
            Tile randomTile = null;
            // Wiederholen, bis ein Surface-Tile gefunden wird
            int index = -1;
            do {
                index = random.nextInt(playmap.getTilesList().size());
                randomTile = playmap.getTilesList().get(index);
            } while (randomTile.getType() != TileType.SURFACE || randomTile.hasCharacter());

            switch (player.getPlayerrole()) {
                // DONE: random position von Charakter
                case GHOST -> {

                    characters.put(player.getName(), new Ghost(1.0, index % playmap.getWidth(), index / playmap.getWidth()));
                    randomTile.addCharacter(characters.get(player.getName()));
                }
                case SNACKMAN -> {

                    characters.put(player.getName(), new Snackman(1.0, index % playmap.getWidth(), index / playmap.getWidth(), 3, 3));
                    randomTile.addCharacter(characters.get(player.getName()));
                }
                default -> {
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

            Chicken chicken = new Chicken(index % playmap.getWidth(), index / playmap.getWidth());
            chickens.add(chicken);
            //DONE: chicken zu random tile hinzufügen
            randomTile.addChicken(chicken);
        }

        for (int i = 0; i < ITEMS_NUM; i++) {
            Tile randomTile;
            int index = -1;
            do {
                index = random.nextInt(playmap.getTilesList().size());
                randomTile = playmap.getTilesList().get(index);
            } while (randomTile.getType() != TileType.SURFACE || randomTile.hasCharacter() || randomTile.hasChicken() || randomTile.hasItem());
    
            // Zufälliges Item aus der FOOD_ITEMS-Liste auswählen
            FoodItems randomItemTemplate = FOOD_ITEMS.get(random.nextInt(FOOD_ITEMS.size()));
    
            // Erstelle eine neue Instanz mit der korrekten Position
            FoodItems newItem = new FoodItems(
                randomItemTemplate.getName(),
                index % playmap.getWidth(),
                index / playmap.getWidth(),
                randomItemTemplate.getNutriScore()
            );
    
            // Item hinzufügen
            randomTile.addItem(newItem);
        }


        return started;
    }

    public boolean end() {
        this.started = false;
        LOGGER.info("started: {}", this.started);
        return started;
    }

    // Entfernt einen Spieler aus der Liste, wenn sein uniqueName übereinstimmt
    public boolean kick(String usernameKicker, String usernameKicked) {
        if (usernameKicked.contentEquals(gamemaster.getName())) {
            return false;
        }
        if (!usernameKicker.contentEquals(gamemaster.getName())) {
            return false;
        }
        for (int i = 0; i < players.size(); i++) {
            if (players.get(i).getName().equals(usernameKicked)) {
                players.remove(i);
                LOGGER.info("Player with unique name {} has been kicked.", usernameKicked);
                return true;
            }
        }
        LOGGER.info("Player with unique name {} not found.", usernameKicked);
        return false;
    }

    public void joinGame(Player player) {
        players.add(player);
    }

    public void leaveGame(Player player) {
        LOGGER.info(String.valueOf(players.size()));
        if (player.getName().contentEquals(gamemaster.getName())) {
            throw new IllegalStateException("Gamemaster cannot leave the game.");
        }
        for (int i = 0; i < players.size(); i++) {
            if (players.get(i).getName().equals(player.getName())) {
                LOGGER.info("Hier der kickende Spieler " + player.getName());
                players.remove(i);
                break;
            }
        }
        LOGGER.info(players.toString());
        LOGGER.info(String.valueOf(players.size()));
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

    public void setChicken(int total) {
        LOGGER.info("Chicken: {}, Game: {}", total, this.id);
        this.chickenNum = total;

    }

    public boolean moveTest(String username, double posX, double posY, double angle){
        Character curCharacter = characters.get(username);

        curCharacter.move(posX, posY, angle);
        LOGGER.info("{} moved to {} | {}", curCharacter, curCharacter.getPosX(),curCharacter.getPosY());
        return true;
    }

    public boolean move(String username, int posX, int posY) {

        LOGGER.info("{}{}{}",username,posX,posY);
        // DONE: Tile obj von x und y überprüfen
        int targetIndex = posY * playmap.getWidth() + posX;
        Tile targetTile = playmap.getTilesList().get(targetIndex);
        Character curCharacter = characters.get(username);

        //int curIndex = curCharacter.getPosY() * playmap.getWidth() + curCharacter.getPosX();
        //Tile curTile = playmap.getTilesList().get(curIndex);
        
        //*TESTING */
        curCharacter.move(posX, posY, posY);
        LOGGER.info("{} moved to {} | {}", curCharacter, curCharacter.getPosX(),curCharacter.getPosY());
        //*TESTING */

        if (targetTile.getType() == TileType.WALL) {
            return false;
        }
        // DONE: position von character aktualisieren für frontend
        //curCharacter.move(posX, posY);
        // TODO: hier fehlt noch Kollision in addCharacter

        LOGGER.info("{} moved to {} | {}", curCharacter, curCharacter.getPosX(),curCharacter.getPosY());
        //curTile.removeCharacter(curCharacter);
        targetTile.addCharacter(curCharacter);

        return true;
    }

    public Player findPlayerByUsername(String username) {
        if (players == null || players.isEmpty()) {
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

    public void addCharacter(String username, Character character) {
        this.characters.put(username, character);
    }
}
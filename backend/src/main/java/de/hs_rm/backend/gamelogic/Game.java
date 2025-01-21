package de.hs_rm.backend.gamelogic;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Value;

import de.hs_rm.backend.gamelogic.characters.players.Character;
import de.hs_rm.backend.gamelogic.characters.chicken.Chicken;
import de.hs_rm.backend.gamelogic.characters.players.FoodItems;
import de.hs_rm.backend.gamelogic.characters.players.Ghost;
import de.hs_rm.backend.gamelogic.characters.players.GhostObjectItem;
import de.hs_rm.backend.gamelogic.characters.players.NutriScore;
import de.hs_rm.backend.gamelogic.characters.players.ObjectsItems;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.PlayerPosition;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import de.hs_rm.backend.gamelogic.characters.players.Snackman;
import de.hs_rm.backend.gamelogic.characters.players.SnackmanObjectItem;
import de.hs_rm.backend.gamelogic.map.PlayMap;
import de.hs_rm.backend.gamelogic.map.Tile;
import de.hs_rm.backend.gamelogic.map.TileType;

public class Game {
    private static Set<String> existingIds = new HashSet<>(); // set --> verhindert Duplikate und static --> diese liste
                                                              // wird für alle Instanzen der Klasse geteilt
    private String id;
    private List<Player> players; // for lobby
    private List<Chicken> chickens;
    private Player gamemaster;
    private boolean started;
    private PlayMap playmap;
    private int chickenNum;
    private String selectedMap;

    private int snackmanLife;
    private int snackmanMaxLife;
    private double snackmanSpeed;
    private double ghostSpeed;
    private int itemsPerSurfaceRatio;
    private int nutriscore;
    private String pathToChickenBot;

    private int itemsNum;

    private String selectedTheme = "realistic";

    private boolean privateLobby;
    private String password;

    private static final int SPRINT_PER_500MS_COST = 5;
    private static final int CHARGE_JUMP_COST = 100;
    private static final int NORMAL_JUMP_COST = 10;

    private Map<String, Character> characters; // for game (after game start), strinng for username
    private List<PlayerPosition> spawnPoints;

    @Value("${egg.caloriesbonus}")
    private int CALORIESBONUS_EGG;

    public List<PlayerPosition> getSpawnPoints() {
        return spawnPoints;
    }


    public void setSpawnPoints(List<PlayerPosition> spawnPoints) {
        this.spawnPoints = spawnPoints;
    }

    private List<FoodItems> placedSnacks = new ArrayList<>();
    private int maxPointsSnackman;
    private PlayerRole winnerRole;

    public String getSelectedTheme() {
        return this.selectedTheme;
    }

    public void setSelectedTheme(String selectedTheme) {
        this.selectedTheme = selectedTheme;
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
            characterWithNames.put("posZ", character.getPosZ());
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

    // TO-DO: beide Listen müssen nochmal angepasst werden
    // Globale Liste der vordefinierten FoodItems
    private static final List<FoodItems> FOOD_ITEMS = List.of(
        new FoodItems("strawberryshortcake", -1, -1, NutriScore.A),
            new FoodItems("candycane", -1, -1, NutriScore.B),
            new FoodItems("chocolatebar", -1, -1, NutriScore.C),
            new FoodItems("chips", -1, -1, NutriScore.D),
            new FoodItems("cottoncandy", -1, -1, NutriScore.E));
    // vordefinierten ObjectsItems --> Pos muss geändert werden
    private static final List<ObjectsItems> OBJECTS_ITEMS = List.of(
            new GhostObjectItem("Speed Boost", -1, -1, "Increases movement speed temporarily for all ghosts"),
            new SnackmanObjectItem("Shield", -1, -1, "Provides temporary invincibility"),
            new SnackmanObjectItem("Double Points", -1, -1, "Doubles points gained for a limited time"),
            new SnackmanObjectItem("Extra Life", -1, -1, "Grants an extra life"));

    public Game(
            Player gamemaster,
            int snackmanLife,
            int snackmanMaxLife,
            double snackmanSpeed,
            double ghostSpeed,
            int itemsPerSurfaceRatio,
            String pathToChickenBot
    ) {
        this.id = generateId(5);
        this.players = new ArrayList<>();
        this.chickens = new ArrayList<>();
        this.gamemaster = gamemaster;
        this.players.add(this.gamemaster);
        this.started = false;
        this.characters = new HashMap<>();
        this.selectedMap = selectedMap;

        if (gamemaster.getPassword() != null && !gamemaster.getPassword().isEmpty()) {
            this.password = gamemaster.getPassword();
            this.privateLobby = true;
        } else {
            this.password = null;
            this.privateLobby = false;
        }

        this.snackmanLife = snackmanLife;
        this.snackmanMaxLife = snackmanMaxLife;
        this.snackmanSpeed = snackmanSpeed;
        this.ghostSpeed = ghostSpeed;
        this.itemsPerSurfaceRatio = itemsPerSurfaceRatio;
        this.pathToChickenBot = pathToChickenBot;

        maxPointsSnackman = 0; // wird unten berechnet
        winnerRole = null;
    }

    public void determineWinner() {
        Snackman snackman = null; // Es gibt nur einen Snackman
        for (Character character : characters.values()) {
            if (character instanceof Snackman) {
                snackman = (Snackman) character;
            }
        }
        if (snackman == null) {
            throw new IllegalStateException("No Snackman found in Game!");
        }
        for (Character character : characters.values()) {
            if (character instanceof Snackman) {
                snackman = (Snackman) character;
                // ausreichend punkte und noch am leben
                if (snackman.getCurrentPoints() >= maxPointsSnackman/2 && snackman.getLife() > 0) { // es soll die hälte der punkte sein laut PO
                    winnerRole = PlayerRole.SNACKMAN;
                    this.end();
                    return;
                }
            } else if (character instanceof Ghost) {
                Ghost ghost = (Ghost) character;
                //snackman lebt nicht mehr und snackman hat nicht seine max punkte erreicht
                if (snackman.getLife() <= 0 && snackman.getCurrentPoints() < maxPointsSnackman/2) {
                    winnerRole = PlayerRole.GHOST;
                    this.end();
                    return;
                }
            }
        }
        winnerRole = null;
    }

    public int getChickenNum() {
        return chickenNum;
    }


    public void setChickenNum(int chickenNum) {
        this.chickenNum = chickenNum;
    }

    public String getPathToChickenBot() {
        return pathToChickenBot;
    }

    public void setPathToChickenBot(String pathToChickenBot) {
        this.pathToChickenBot = pathToChickenBot;
    }

    // Generiert eindeutige ID
    // Synchronisieren --> verhindert, dass mehrere Threads gleichzeitig doppelte
    // IDs erzeugen
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

    public List<PlayerPosition> createSpawnPoints() {
        List<int[]> freePositions = new ArrayList<>();
        List<PlayerPosition> generatedSpawnPoints = new ArrayList<>();

        int playerCount = players.size();
        int spawnPointsSet = 0;

        Random random = new Random();
        int minDistance = 3; // Initialer Mindestabstand
        int maxAttempts = 10; // Maximale Anzahl der Versuche, bevor der Abstand verringert wird
        int attempts = 0; // Zähler für die Anzahl der Versuche

        // Sammel alle freien Positionen
        for (int x = 0; x < playmap.getWidth(); x++) {
            for (int y = 0; y < playmap.getHeight(); y++) {
                if (playmap.getMap()[y][x] == ' ') {
                    freePositions.add(new int[]{x, y});
                }
            }
        }

        // Spawnpunkte generieren
        while (playerCount > spawnPointsSet && !freePositions.isEmpty()) {

            // Zufällige Position auswählen
            int[] pos = freePositions.remove(random.nextInt(freePositions.size()));

            if (!isTooClose(pos, generatedSpawnPoints, minDistance)) {
                PlayerPosition newSpawnPoint = new PlayerPosition();
                newSpawnPoint.setPosX(pos[0]);
                newSpawnPoint.setPosY(pos[1]);
                newSpawnPoint.setPlayerName(players.get(spawnPointsSet).getName());

                generatedSpawnPoints.add(newSpawnPoint);
                spawnPointsSet++;
                attempts = 0; // Zurücksetzen des Zählers nach erfolgreicher Platzierung
            } else {
                attempts++; // Versuchszähler erhöhen

                // Mindestabstand verringern, wenn die maximale Anzahl der Versuche erreicht ist
                if (attempts >= maxAttempts) {
                    minDistance = Math.max(0, minDistance - 1); // Abstand reduzieren, aber nicht unter 0
                    attempts = 0; // Zähler zurücksetzen
                }
            }
        }

        return generatedSpawnPoints;
    }

    private static boolean isTooClose(int[] pos, List<PlayerPosition> spawnPoints, int minDistance){
        for(PlayerPosition pp: spawnPoints){
            if(distance(pos, pp) < minDistance){
                return true;
            }
        }
        return false;
    }

    private static double distance(int[] pos, PlayerPosition pp){
        return Math.sqrt(Math.pow(pos[0]-pp.getPosX(), 2) + Math.pow(pos[1]-pp.getPosY(), 2));
    }

    public boolean start(PlayMap playMap, int chickenNum, String pathToChickenBot) {
        LOGGER.info("started: {} gameid: {}", this.started, this.id);
        this.chickenNum = chickenNum;
        this.playmap = playMap;

        int surfaceCount = playmap.getCountSurface();
        int maxChickenAllowed = surfaceCount / 5; // 1 Chicken pro 5 SURFACE-Tiles

        LOGGER.info("Requested chicken count exceeds allowed maximum: Requested={}, Allowed={}, SurfaceTiles={}", this.chickenNum, maxChickenAllowed, surfaceCount);
        if (this.chickenNum> maxChickenAllowed) {
            LOGGER.warn("Requested chicken count exceeds allowed maximum: Requested={}, Allowed={}, SurfaceTiles={}", this.chickenNum, maxChickenAllowed, surfaceCount);
        return false;
        }

        Random random = new Random();

        this.itemsNum = Math.max(1, playmap.getCountSurface() / itemsPerSurfaceRatio); // 1 Item pro
                                                                                       // itemsPerSurfaceRatio
        //Spawn Points erstellen
        this.spawnPoints = createSpawnPoints();

        for (int i = 0; i < itemsNum; i++) {
            Tile randomTile;
            boolean createFoodItem = random.nextInt(10) < 8; // 80% Chance für FoodItem, 20% für ObjectsItem
            int index = -1;
            do {
                index = random.nextInt(playmap.getTilesList().size());
                randomTile = playmap.getTilesList().get(index);
            } while (randomTile.getType() != TileType.SURFACE || randomTile.hasCharacter() || randomTile.hasChicken()
                    || randomTile.hasItem());

            if (createFoodItem) {
                // Zufälliges Item aus der FOOD_ITEMS-Liste auswählen
                FoodItems randomItemTemplate = FOOD_ITEMS.get(random.nextInt(FOOD_ITEMS.size()));

                // Erstelle eine neue Instanz mit der korrekten Position
                FoodItems newItem = new FoodItems(
                        randomItemTemplate.getName(),
                        index % playmap.getWidth(),
                        index / playmap.getWidth(),
                        randomItemTemplate.getNutriScore());

                // Item hinzufügen
                randomTile.addItem(newItem);
                playmap.updateMapState(index / playmap.getWidth(), index % playmap.getWidth(), newItem.getSymbol()); // für
                                                                                                                     // Food
                // zur Liste der platzierten Snacks hinzufügen
                placedSnacks.add(newItem);
            } else {

                // Zufälliges ObjectsItem aus der vordefinierten Liste
                ObjectsItems randomObjectTemplate = OBJECTS_ITEMS.get(random.nextInt(OBJECTS_ITEMS.size()));
                ObjectsItems newObjectItem;

                // Bestimmt die konkrete Unterklasse des ObjectsItems mit Position
                if (randomObjectTemplate instanceof GhostObjectItem) {
                    newObjectItem = new GhostObjectItem(
                            randomObjectTemplate.getName(),
                            index % playmap.getWidth(),
                            index / playmap.getWidth(),
                            randomObjectTemplate.getEffectDescription());
                } else if (randomObjectTemplate instanceof SnackmanObjectItem) {
                    newObjectItem = new SnackmanObjectItem(
                            randomObjectTemplate.getName(),
                            index % playmap.getWidth(),
                            index / playmap.getWidth(),
                            randomObjectTemplate.getEffectDescription());
                } else {
                    LOGGER.warn("Unknown ObjectsItem type: {}", randomObjectTemplate.getName());
                    continue;
                }

                // ObjectsItem hinzufügen
                randomTile.addItem(newObjectItem);
                playmap.updateMapState(index / playmap.getWidth(), index % playmap.getWidth(),
                        newObjectItem.getSymbol()); // für Object
            }


        }
        // dynamische maxPoints
        calculateMaxPointsSnackman();

        // DONE: hier sollte Charakter liste erstellen und player zu jedem charater
        // zuweisen
        for (Player player : players) {
            Character newCharacter;
            Tile spawnTile;
            PlayerPosition playerSpawn = spawnPoints.stream().filter(p -> p.getPlayerName().equals(player.getName())).findFirst().get();
            int spawnTileIndex = (int) Math.floor(playerSpawn.getPosX()) * playmap.getWidth()
                + (int) Math.floor(playerSpawn.getPosY());

            spawnTile = playMap.getTilesList().get(spawnTileIndex);

            switch (player.getPlayerrole()) {
                // DONE: random position von Charakter
                case GHOST -> {
                    newCharacter = new Ghost(ghostSpeed, (int) Math.floor(playerSpawn.getPosX()), (int) Math.floor(playerSpawn.getPosY()));
                    characters.put(player.getName(), newCharacter);
                    spawnTile.addCharacter(player.getName(),newCharacter);

                }
                case SNACKMAN -> {
                    newCharacter = new Snackman(snackmanSpeed, (int) Math.floor(playerSpawn.getPosX()), (int) Math.floor(playerSpawn.getPosY()), snackmanLife, snackmanMaxLife);
                    characters.put(player.getName(), newCharacter);
                    spawnTile.addCharacter(player.getName(),newCharacter);
                }
                default -> {
                    LOGGER.warn("Unknown player role for player: {}", player.getName());
                }
            }

        }
        // DONE: random position von hühnchen
        for (int i = 0; i < this.chickenNum; i++) {

            UUID uniqueID = UUID.randomUUID();
            Tile randomTile;
            int index = -1;

            Path pathToChickenBotPath = Paths.get(pathToChickenBot);
            LOGGER.info("currentPath = {}", pathToChickenBotPath);
            //Path pathToChickenBotPath = Paths.get("/Users/erina/Documents/2024swtpro02/backend/src/main/resources/scripts/test_script_wrong_location.py");

            // ToDo Aron: url ist nur zu Testzwecken hier bis entsprechende Umgebungsvariablen in application.properties und ordner außerhalb src erneut implementiert sind!
            if (Files.exists(pathToChickenBotPath)){
                LOGGER.info("Path to test scripts:{}" , pathToChickenBotPath);
            }else{
                LOGGER.error("Script not found");
            }

            do {
                index = random.nextInt(playmap.getTilesList().size());
                randomTile = playmap.getTilesList().get(index);
            } while (randomTile.getType() != TileType.SURFACE || randomTile.hasChicken());


            Chicken chicken = new Chicken(index % playmap.getWidth(), index / playmap.getWidth(), pathToChickenBotPath, this, uniqueID.toString());


            chickens.add(chicken);
            // DONE: chicken zu random tile hinzufügen
            randomTile.addChicken(chicken);

            LOGGER.info("Adding chicken: {} at Tile: {}", i, randomTile);
            LOGGER.info("Chicken added to tile: {}", randomTile);
            Thread thread = new Thread(() -> {
                LOGGER.info("Runnign in a thread" + Thread.currentThread().getName());

                chicken.executeBehavior();
            });
            thread.start();

        }
        this.started = true;
        return started;
    }

    public void calculateMaxPointsSnackman() {
        int total = 0;
        for (int i = 0; i < placedSnacks.size(); i++) {
            total += placedSnacks.get(i).getNutriScore().getCalorieBonus();
        }
        maxPointsSnackman = total;
    }

    public void end() {
        this.started = false;
        this.chickens.forEach(Chicken::stopBehavior);
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

    public boolean isItemCollected(double posX, double posY) {
        // Implement the logic to check if an item was collected at the given position
        Tile tile = getTileAtPosition(posX, posY);
        return tile != null && tile.hasItem();
    }

    private Tile getTileAtPosition(double posX, double posY) {
        int roundedposX = (int) Math.round(posX);
        int roundedposY = (int) Math.round(posY);
        int index = roundedposY * playmap.getWidth() + roundedposX;
        if (index < 0 || index >= playmap.getTilesList().size()) {
            return null;
        }
        return playmap.getTilesList().get(index);
    }

    public synchronized boolean move(String username, double posX, double posY, double posZ, double angle) {
        Character curCharacter = characters.get(username);

        if(CALORIESBONUS_EGG == 0){
            CALORIESBONUS_EGG = 400;
        }

        int roundedPosX = (int) Math.floor(posX);
        int roundedPosY = (int) Math.floor(posY);

        // Berechnung des aktuellen Index
        int curIndex = (int) Math.floor(curCharacter.getPosX()) * playmap.getWidth()
                + (int) Math.floor(curCharacter.getPosY());
        if (curIndex < 0 || curIndex >= playmap.getTilesList().size()) {
            LOGGER.error("Ungültiger aktueller Index: curIndex={}, Größe der Tile-Liste={}", curIndex,
                    playmap.getTilesList().size());
            return false;
        }
        Tile curTile = playmap.getTilesList().get(curIndex);

        // Berechnung des Zielindex
        int targetIndex = (roundedPosX * playmap.getWidth()) + roundedPosY;
        if (targetIndex < 0 || targetIndex >= playmap.getTilesList().size()) {
            LOGGER.info("Ungültiger Zielindex: targetIndex={}, Größe der Tile-Liste={}", targetIndex,
                    playmap.getTilesList().size());
            return false;
        }
        Tile targetTile = playmap.getTilesList().get(targetIndex);

        for(Chicken chicken: targetTile.getChickenList()){
            LOGGER.info("Chicken aktuelle CAL {}", chicken.getCurrentCalorie());
            if(chicken.getCurrentCalorie() >= CALORIESBONUS_EGG){
                LOGGER.info("Kollision mit einem fetten Chicken: Zielkoordinaten posX={}, posY={}", posX, posY);
                LOGGER.info("Chicken aktuelle Cal {} maxCal {}", chicken.getCurrentCalorie(), CALORIESBONUS_EGG);
                return false;
            }
        }

        // Ziel-Tile prüfen
        if (targetTile.getType() == TileType.WALL && curCharacter.getPosZ() < 3) {
            LOGGER.info("Kollision mit einer Wand: Zielkoordinaten posX={}, posY={}", posX, posY);
            return false;
        }
        // Prüfung: Ist das Ziel-Tile das gleiche wie das aktuelle Tile?
        if (curIndex == targetIndex) {
            // LOGGER.info("Charakter bleibt im gleichen Tile: posX={}, posY={}", posX,
            // posY);

            // posy und posx vertauscht
            curCharacter.move(posX, posY, posZ, angle); // Aktualisiere nur die Position des Charakters
            return true; // Bewegung erfolgreich, keine weiteren Änderungen notwendig
        }
        // Charakter bewegen
        if(curTile.removeCharacter(username)){
            curCharacter.move(posX, posY, posZ, angle);
            targetTile.addCharacter(username,curCharacter);
            return true;
        }

        return false;
    }

    public boolean isValidJump(String playerId, String jumpType) {
        boolean isValid = false;
        Character potentialJumper = characters.get(playerId);
        if (potentialJumper instanceof Snackman player) {
            int nutriScore = player.getCurrentPoints();
            if (jumpType.equals("charge")) {
                if (nutriScore >= CHARGE_JUMP_COST) {
                    isValid = true;
                    player.setCurrentPoints(nutriScore - CHARGE_JUMP_COST);
                }
            } else if (jumpType.equals("normal")) {
                if (nutriScore >= NORMAL_JUMP_COST) {
                    isValid = true;
                    player.setCurrentPoints(nutriScore - NORMAL_JUMP_COST);
                }
            }
        }
        return isValid;
    }

    public boolean isValidSprint(String playerId) {
        boolean isValid = false;
        Character potentialRunner = characters.get(playerId);
        if (potentialRunner instanceof Snackman player) {
            int nutriScore = player.getCurrentPoints();
                if (nutriScore >= SPRINT_PER_500MS_COST) {
                    isValid = true;
                    player.setCurrentPoints(nutriScore - SPRINT_PER_500MS_COST);
                }
        }
        return isValid;
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

    public int getItemsNum() {
        return itemsNum;
    }

    public void setItemsNum(int itemsNum) {
        this.itemsNum = itemsNum;
    }

    public int getSnackmanLife() {
        return snackmanLife;
    }

    public int getSnackmanMaxLife() {
        return snackmanMaxLife;
    }

    public double getSnackmanSpeed() {
        return snackmanSpeed;
    }

    public double getGhostSpeed() {
        return ghostSpeed;
    }

    public int getItemsPerSurfaceRatio() {
        return itemsPerSurfaceRatio;
    }

    public String getSelectedMap() {
        return selectedMap;
    }

    public void setSelectedMap(String selectedMap) {
        this.selectedMap = selectedMap;
    }

    public Map<String, Character> getCharacters() {
        return characters;
    }

    public List<FoodItems> getPlacedSnacks() {
        return placedSnacks;
    }

    public void setPlacedSnacks(List<FoodItems> placedSnacks) {
        this.placedSnacks = placedSnacks;
    }

    public int getMaxPointsSnackman() {
        return maxPointsSnackman;
    }

    public void setMaxPointsSnackman(int maxPointsSnackman) {
        this.maxPointsSnackman = maxPointsSnackman;
    }

    public String getPassword() {
        if (!privateLobby) {
            return null;
        }
        return password;
    }

    public void setPassword(String password) {
        if (privateLobby) {
            this.password = password;
        } else {
            LOGGER.warn("Kein PW für offene Lobby!");
        }
    }

    public void setPrivateLobby(boolean privateLobby) {
        this.privateLobby = privateLobby;
    }

    public boolean getPrivateLobby() {
        return privateLobby;
    }

    public PlayerRole getWinnerRole() {
        return winnerRole;
    }

    public void setWinnerRole(PlayerRole winnerRole) {
        this.winnerRole = winnerRole;
    }

}
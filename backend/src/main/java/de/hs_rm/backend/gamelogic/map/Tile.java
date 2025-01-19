package de.hs_rm.backend.gamelogic.map;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hs_rm.backend.gamelogic.characters.chicken.Chicken;
import de.hs_rm.backend.gamelogic.characters.players.*;
import de.hs_rm.backend.gamelogic.characters.players.Character;
import de.hs_rm.backend.gamelogic.characters.players.FoodItems;
import de.hs_rm.backend.gamelogic.characters.players.Ghost;
import de.hs_rm.backend.gamelogic.characters.players.Item;
import de.hs_rm.backend.gamelogic.characters.players.ObjectsItems;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import de.hs_rm.backend.gamelogic.characters.players.Snackman;

public class Tile {
    private TileType type;
    List<Item> itemList;
    ConcurrentHashMap<String, Character> characterList;
    List<Chicken> chickenList;

    boolean itemWasRecentlyCollected = false;
    Logger logger = LoggerFactory.getLogger(Tile.class);

    public Tile(TileType type) {
        this.type = type;
        itemList = new ArrayList<>();
        characterList = new ConcurrentHashMap<>();
        chickenList = new ArrayList<>();
    }

    public boolean hasItem() {
        return itemList != null && !itemList.isEmpty();
    }

    public boolean hasCharacter() {
        return characterList != null && !characterList.isEmpty();
    }

    public boolean hasChicken() {
        return chickenList != null && !chickenList.isEmpty();
    }

    /**
     * Wenn Charakter zu Tile kommt, wird es überprüft, ob passende items in tile
     * sind oder andere Gegner/hühnchen da sind,
     * wenn ja -> Kollision
     * 
     * @param character
     * @return true wenn Charakter erfolgreich rein kommt und ggfs. Item nehmen
     */
    public boolean addCharacter(String username, Character character) {
        for (int i = 0; i < itemList.size(); i++) {
            Item item = itemList.get(i);
            logger.info("Checking item: {} for character: {}", item.getName(), character.getClass().getSimpleName());
            takeItems(character);
        }


        if(!this.characterList.containsKey(username)){
            this.characterList.put(username, character);
            logger.info("ADDED CHAR: {} {}, LIST : {}", username, character, this.characterList);
        }


        checkCharacterCollision(character);
        return true;
    }

    public void takeItems(Character character) {
        List<Item> itemsToRemove = new ArrayList<>();

        if (!itemList.isEmpty()) {
            // DONE: Item hier nehmen
            for (Item item : itemList) {
                if (character instanceof Snackman && item.getType() == PlayerRole.SNACKMAN) {
                    Snackman snackman = (Snackman) character; // Cast zu Snackman
                    if (item instanceof FoodItems) {
                        snackman.eatSnack((FoodItems) item);
                        logger.info("Snackman eats FoodItem '{}'.", item.getName());
                        itemWasRecentlyCollected = true;
                    } else if (item instanceof ObjectsItems) {
                        snackman.collectObjectItem((ObjectsItems) item);
                        itemWasRecentlyCollected = true;
                    }
                    itemsToRemove.add(item);
                } else if (character instanceof Ghost && item.getType() == PlayerRole.GHOST
                        && item instanceof ObjectsItems) {
                    Ghost ghost = (Ghost) character;
                    ghost.collectObjectItem((ObjectsItems) item);
                    itemWasRecentlyCollected = true;
                    itemsToRemove.add(item);
                }
            }
            itemsToRemove.forEach(item -> itemList.remove(item));
            itemsToRemove.clear();
            logger.debug("Item removed. Remaining items: {}", itemList.size());
        }

    }

    private void checkCharacterCollision(Character character) {
        // TODO: Kollision zwischen Ghost und Snackman
        if(character instanceof Snackman ){
            Snackman snackman = (Snackman) character;
        for (Character currentCharacter:characterList.values()){
            if (currentCharacter instanceof Ghost) {
                Ghost ghost = (Ghost) currentCharacter;
                if (!snackman.isRecentlyCaught()) { // Prüfen, ob Snackman nicht immun ist
                    snackman.caught();
                    ghost.hit();
                    logger.info("Collision: Snackman caught by Ghost! Now imun fo the next 5 sec");
                }
                }
            }
        }
        else if(character instanceof Ghost ){
            Ghost ghost = (Ghost) character;
            for (Character currentCharacter:characterList.values()){
                if (currentCharacter instanceof Snackman) {
                    Snackman snackman = (Snackman) currentCharacter;
                    if (!snackman.isRecentlyCaught()) { // Prüfen, ob Snackman nicht immun ist
                        snackman.caught();
                        ghost.hit();
                        logger.info("Collision: Snackman caught by Ghost!");
                    } else {
                        logger.info("Collision ignored: Snackman is immune.");
                    }
                }
            }
         }
    }

    public boolean addChicken(Chicken chicken) {
        this.chickenList.add(chicken);
        if (!itemList.isEmpty()) {
            // TODO: Item hier nehmen
            for (Item item : itemList) {
                if(item instanceof FoodItems){
                    FoodItems foodItem = (FoodItems) item; //cast zu FoodItem
                    Egg egg = chicken.eatSnack(foodItem, chicken.getPosX(), chicken.getPosY());
                    if(egg != null){
                        itemList.remove(item);
                        logger.info("Item '{}' removed from tile", item.getName());
                        //Ei wird hier zum Tile hinzugefügt
                        itemList.add(egg); //FEHLER!
                        logger.info("Egg by chicken geboren and added to tile");
                        break;
                    }

                }
            }
        }
        return true;
    }

    public boolean addItem(Item item) {
        this.itemList.add(item);
        return true;
    }

    public boolean removeCharacter(String username) {
        characterList.remove(username);
        return true;

    }


    public boolean removeChicken(Chicken chicken){
        // System.out.println("ChickenList: " + chickenList.size());
        // System.out.println("Chicken: " + chicken);
        if (chickenList != null && chickenList.contains(chicken)) {
            chickenList.remove(chicken);
            // logger.info("ChickenList beim Entfernen: {}", chickenList.);
            return true;
        } else {
            logger.info("Chicken not found in tile.");
            return false;

        }
    }

    public List<Item> getItemList() {
        return itemList;
    }

    public void setItemList(List<Item> itemList) {
        this.itemList = itemList;
    }

    public TileType getType() {
        return type;
    }

    public void setType(TileType type) {
        this.type = type;
    }

    public ConcurrentHashMap<String, Character> getCharacterList() {
        return this.characterList;
    }

    public void setCharacterList(ConcurrentHashMap<String,Character> characterList) {
        this.characterList = characterList;
    }

    public boolean isItemWasRecentlyCollected() {
        return itemWasRecentlyCollected;
    }

    public void setItemWasRecentlyCollected(boolean itemWasRecentlyCollected) {
        this.itemWasRecentlyCollected = itemWasRecentlyCollected;
    }

    public List<Chicken> getChickenList() {
        return chickenList;
    }

    public void setChickenList(List<Chicken> chickenList) {
        this.chickenList = chickenList;
    }



}

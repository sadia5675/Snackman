package de.hs_rm.backend.gamelogic.map;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hs_rm.backend.gamelogic.characters.players.Character;
import de.hs_rm.backend.gamelogic.characters.players.Chicken;
import de.hs_rm.backend.gamelogic.characters.players.FoodItems;
import de.hs_rm.backend.gamelogic.characters.players.Ghost;
import de.hs_rm.backend.gamelogic.characters.players.Item;
import de.hs_rm.backend.gamelogic.characters.players.ObjectsItems;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import de.hs_rm.backend.gamelogic.characters.players.Snackman;

public class Tile {
    private TileType type;
    List<Item> itemList;
    List<Character> characterList;
    List<Chicken> chickenList;

    boolean itemWasRecentlyCollected = false;
    Logger logger = LoggerFactory.getLogger(Tile.class);

    public Tile(TileType type) {
        this.type = type;
        itemList = new ArrayList<>();
        characterList = new ArrayList<>();
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
    public boolean addCharacter(Character character) {
        for (int i = 0; i < itemList.size(); i++) {
            Item item = itemList.get(i);
            logger.info("Checking item: {} for character: {}", item.getName(), character.getClass().getSimpleName());
            takeItems(character);
        }


        this.characterList.add(character);

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

        // TODO: Kollision zwischen Ghost und Snackman
        if(character instanceof Snackman ){
            Snackman snackman = (Snackman) character;
        for (Character currentCharacter:characterList){
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
            for (Character currentCharacter:characterList){
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
        }
        return true;
    }

    public boolean addItem(Item item) {
        this.itemList.add(item);
        return true;
    }

    public boolean removeCharacter(Character character) {
        if (characterList != null && characterList.contains(character)) {
            characterList.remove(character);
            return true;
        }
        return false;
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

    public List<Character> getCharacterList() {
        return characterList;
    }

    public void setCharacterList(List<Character> characterList) {
        this.characterList = characterList;
    }

    public boolean isItemWasRecentlyCollected() {
        return itemWasRecentlyCollected;
    }

    public void setItemWasRecentlyCollected(boolean itemWasRecentlyCollected) {
        this.itemWasRecentlyCollected = itemWasRecentlyCollected;
    }
}

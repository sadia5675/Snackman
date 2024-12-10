package de.hs_rm.backend.gamelogic.map;

import java.util.ArrayList;
import java.util.List;

import de.hs_rm.backend.gamelogic.characters.players.*;
import de.hs_rm.backend.gamelogic.characters.players.Character;


public class Tile {
    private TileType type;
    List<Item> itemList;
    List<Character> characterList;
    List<Chicken> chickenList;

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
     * Wenn Charakter zu Tile kommt, wird es überprüft, ob passende items in tile sind oder andere Gegner/hühnchen da sind, 
     * wenn ja -> Kollision
     * 
     * @param character
     * @return true wenn Charakter erfolgreich rein kommt und ggfs. Item nehmen
     */
    public boolean addCharacter(Character character){
        this.characterList.add(character);
        if(!itemList.isEmpty()){
            // TODO: Item hier nehmen
            for(Item item: itemList){
                if(character instanceof Snackman && item.getType()==PlayerRole.SNACKMAN){
                    Snackman snackman = (Snackman) character; // Cast zu Snackman
                    if(item instanceof FoodItems){
                        // snackman.eatSnack((FoodItems)item);
                    } else if(item instanceof ObjectsItems){
                        // snackman.collectItem((ObjectsItems) item);
                    }
                    
                } else if (character instanceof Ghost && item.getType()==PlayerRole.GHOST && item instanceof ObjectsItems){
                    Ghost ghost = (Ghost) character;
                    // ghost.collectItem((ObjectsItems) item);
                }
            }

        }
        // TODO: Kollision zwischen Ghost und Snackman
        return true;
    }

    public boolean addChicken(Chicken chicken){
        this.chickenList.add(chicken);
        if(!itemList.isEmpty()){
            // TODO: Item hier nehmen
        }
        return true;
    }

    public boolean addItem(Item item){
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
    
}
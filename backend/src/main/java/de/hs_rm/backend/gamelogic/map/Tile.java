package de.hs_rm.backend.gamelogic.map;

import java.util.ArrayList;
import java.util.List;

public class Tile {
    // TODO: vielleicht erwetiern mit zb boolean hasSnackman, hasGhost, hasItemx ...
    int x,y;
    TileType type;

//    List<Item> itemList;
    List<Character> characterList;

    public Tile(TileType type, int x, int y){
        this.type = type;
        this.x = x;
        this.y = y;
        // itemList = new ArrayList<>();
        characterList = new ArrayList<>();
    }

    public boolean moveTo(Character character, Tile targetTile){
        if(targetTile.getType()==TileType.WALL){
            return false;
        }
        if (!characterList.contains(character)) {
            return false;
        }

        targetTile.addCharacter(character);
        this.characterList.remove(character);
        return true;
    }

    public boolean addCharacter(Character character){
        this.addCharacter(character);
        // if(!itemList.isEmpty()){
            // TODO: Item hier nehmen
        // }
        return true;
    }

    // public boolean addItem(Item item){
    //     this.itemList.add(item);
    //     return true;
    // }


    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public TileType getType() {
        return type;
    }

    public void setType(TileType type) {
        this.type = type;
    }

    // public List<Item> getItemList() {
    //     return itemList;
    // }

    // public void setItemList(List<Item> itemList) {
    //     this.itemList = itemList;
    // }

    public List<Character> getCharacterList() {
        return characterList;
    }

    public void setCharacterList(List<Character> characterList) {
        this.characterList = characterList;
    }
    
    
}

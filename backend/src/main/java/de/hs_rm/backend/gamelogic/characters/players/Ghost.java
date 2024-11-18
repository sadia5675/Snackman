package de.hs_rm.backend.gamelogic.characters.players;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


public class Ghost extends Character {
    private int touchcount; 
    private List <Item> items;
    
    public Ghost(long id, String name, String gameId, double playerSpeed, PlayerPosition playerposition, int touchcount){
        super(id,name,gameId,playerSpeed,playerposition);
        this.touchcount=touchcount; 
        this.items= new ArrayList<>();  
    }
    public List<Item> getItems() {
        return items;
    }
    public void setItems(List<Item> items) {
        this.items = items;
    }

    public int getTouchcount() {
        return touchcount;
    }
    public void setTouchcount(int touchcount) {
        this.touchcount = touchcount;
    }
    
    @Override
    public PlayerPosition move(){
        System.out.println("the ghost is moving");
        return null; 
    }

    @Override
    public void pickUpItem(Item item){
        items.add(item); 
        System.out.println(item + "was successfully added to the list");
    }

    public void hit(String playerId){
        System.out.println("Player " + playerId + " has been hit by the ghost.");
        touchcount++; 
    }
}
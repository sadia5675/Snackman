package de.hs_rm.backend.gamelogic.characters.players;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*Die Ghost Klasse erbt von der Character Klasse. Hierbei handelt es sich um einen Gegner von Snackman,
 *der von einem Spieler gespielt werden kann. 
 */ 
public class Ghost extends Character {
    //Initialisierung 
    private int touchcount; 
    private List <Item> items;
    
    public Ghost(double speed, int posX, int posY){
        super(speed,posX,posY);
        this.touchcount=0; 
        this.items= new ArrayList<>();  
    }

    //Getter und Setter
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
    
    //abstrakte Methode zum fortbewegen--> Logik fehlt noch
    @Override
    public PlayerPosition move(){
        System.out.println("the ghost is moving");
        return null; 
    }

    //abstrakte Methode um bestimmte Items in einer Liste vom Typ Item zu sammeln
    @Override
    public void pickUpItem(Item item){
        items.add(item); 
        System.out.println(item + "was successfully added to the list");
    }

    //Reglung bei Kontakt mit Snackman--> Logik fehlt noch
    public void hit(String playerId){
        System.out.println("Player " + playerId + " has been hit by the ghost.");
        touchcount++; 
    }
}
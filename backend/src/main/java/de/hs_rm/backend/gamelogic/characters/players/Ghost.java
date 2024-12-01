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
    private Item item;
    
    public Ghost(double speed, int posX, int posY){
        super(speed,posX,posY);
        this.touchcount=0; 
        this.item= item;  
    }

    public Item getItems() {
        return item;
    }

    public void setItem(Item item) {
        this.item=item; 
    }
    

    public int getTouchcount() {
        return touchcount;
    }
    public void setTouchcount(int touchcount) {
        this.touchcount = touchcount;
    }

    //abstrakte Methode um bestimmte Items in einer Liste vom Typ Item zu sammeln= die Methode ist doch im Charackter??
    
    //abstrakte Methode zum fortbewegen--> Logik fehlt noch
    // @Override
    // public PlayerPosition move(){
    //     System.out.println("the ghost is moving");
    //     return null; 
    // }

    //Reglung bei Kontakt mit Snackman--> Logik fehlt noch
    public void hit(String playerId){
        System.out.println("Player " + playerId + " has been hit by the ghost.");
        touchcount++; 
    }

    @Override
    public PlayerPosition move() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'move'");
    }
}
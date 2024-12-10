package de.hs_rm.backend.gamelogic.characters.players;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*Die Ghost Klasse erbt von der Character Klasse. Hierbei handelt es sich um einen Gegner von Snackman,
 *der von einem Spieler gespielt werden kann. 
 */ 
public class Ghost extends Character {
    //Initialisierung 
    private int touchcount; 
    private Item item;
    private List<ObjectsItems> collectedObjectItems; 
    
    private static final Logger logger = LoggerFactory.getLogger(Ghost.class);
    
    public Ghost(double speed, int posX, int posY){
        super(speed,posX,posY);
        this.touchcount=0; 
        this.item= item;  
        this.collectedObjectItems = new ArrayList<>();
    }

    @Override
    public Item getItems() {
        return item;
    }

    @Override
    public void setItem(Item item) {
        this.item=item; 
    }
    

    public int getTouchcount() {
        return touchcount;
    }
    public void setTouchcount(int touchcount) {
        this.touchcount = touchcount;
    }

    public List<ObjectsItems> getCollectedObjectItems() {
        return collectedObjectItems;
    }
    
    //abstrakte Methode zum fortbewegen--> Logik fehlt noch
    @Override
    public PlayerPosition move(){
        System.out.println("the ghost is moving");
        return null; 
    }

    //Reglung bei Kontakt mit Snackman--> Logik fehlt noch
    public void hit(String playerId){
        System.out.println("Player " + playerId + " has been hit by the ghost.");
        touchcount++; 
    }

    //TODO: Wie viel Objekte darf man haben???
    //Methode: Objectitem in der Liste 
    @Override
    public void pickUpItem(Item item) {
        if (item instanceof ObjectsItems objectItem) {
            collectedObjectItems.add(objectItem); 
            logger.info("ObjectItem '{}' collected by Geist.", objectItem.getName());
        } else {
            logger.warn("Geist cannot pick up this item of type '{}'.", item.getClass().getSimpleName());
        }
    }
}
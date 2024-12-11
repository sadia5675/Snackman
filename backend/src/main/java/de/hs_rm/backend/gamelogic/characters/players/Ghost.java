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
    private ObjectsItems item;
    
    private static final Logger logger = LoggerFactory.getLogger(Ghost.class);
    
    public Ghost(double speed, int posX, int posY){
        super(speed,posX,posY);
        this.touchcount=0; 
        this.item= item;  
    }

    public int getTouchcount() {
        return touchcount;
    }
    public void setTouchcount(int touchcount) {
        this.touchcount = touchcount;
    }
    
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
    public void useItem(ObjectsItems item) {
        item = getCurrentObjectItem();
        if (item != null) {
            logger.info("Snackman uses ObjectItem '{}'.", item.getName());
            // Hier die Logik für die Verwendung des ObjectItems implementieren
            setCurrentObjectItem(null); // Das Item wird nach der Nutzung entfernt
        } else {
            logger.warn("No ObjectItem to use.");
        }
    }
}
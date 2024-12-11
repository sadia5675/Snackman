package de.hs_rm.backend.gamelogic.characters.players;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



// Bauplan der Characters --> hierbei handelt es sich um eine abstrakte Klasse!
public abstract class Character{
    //Initialisierung 
    //Der Spieler bekommt später eine spring boot entity id 
    // private long id; 
    // private String name;
    // private String gameId; 
    private double speed;
    // PlayerPosition playerposition;
    // Player player;
    private int posX, posY;
    private ObjectsItems currentObjectItem; 
    private static final Logger logger = LoggerFactory.getLogger(Character.class);

    public Character(double speed, int posX, int posY){
        // this.id=id; 
        // this.name=name; 
        // this.gameId=gameId; 
        this.speed=speed; 
        //this.playerposition=playerposition; 
        //this.player = player;
        this.posX=posX;
        this.posY=posY;
        this.currentObjectItem = null;
    }

    //Getter udn Setter 
    // public long getId() {
    //     return id;
    // }
    // public void setId(long id) {
    //     this.id = id;
    // }
    // public String getName() {
    //     return name;
    // }
    // public void setName(String name) {
    //     this.name = name;
    // }
    // public String getGamiId() {
    //     return gameId;
    // }
    // public void setGamiId(String gamiId) {
    //     this.gameId = gamiId;
    // }
    public double getSpeed() {
        return speed;
    }
    public void setSpeed(double playerSpeed) {
        this.speed = playerSpeed;
    }
    public int getPosX() {
        return posX;
    }
    public void setPosX(int posX) {
        this.posX = posX;
    }
    public int getPosY() {
        return posY;
    }
    public void setPosY(int posY) {
        this.posY = posY;
    }
    public ObjectsItems getCurrentObjectItem() {
        return currentObjectItem;
    }

    public void setCurrentObjectItem(ObjectsItems objectItem) {
        this.currentObjectItem = objectItem;
    }

    //Abstrakte Methoden 
    public abstract PlayerPosition move(); 

    public void collectObjectItem(ObjectsItems item) {
        if (currentObjectItem == null) {
            currentObjectItem = item;
            logger.info("ObjectItem '{}' collected.", item.getName());
        } else {
            logger.warn("Cannot collect '{}': Character already has an ObjectItem '{}'.", item.getName(), currentObjectItem.getName());
        }
    }
    public abstract void useItem(ObjectsItems item);
    
    //TODO: muss noch ausgearbietet werden
    // Methode: Leben verloren
    public void caught() {
       // life--;
    }

    
}

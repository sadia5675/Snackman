package de.hs_rm.backend.gamelogic.characters.players;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * Die Snackman Klasse erbt von der Charackter Klasse.
 */
public class Snackman extends Character {
    //Initialisierung
    private int life; 
    private double nutriscore; 
    private Item item;
    private int currentCalorie;
    private List<ObjectsItems> collectedObjectItems; 

    private static final Logger logger = LoggerFactory.getLogger(Snackman.class);

    public Snackman(double speed, int posX, int posY, int life){
        super(speed,posX,posY);
        this.life=life; 
        this.nutriscore=0; 
        this.item= item; 
        this.currentCalorie= 0;
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

    public int getLife() {
        return life;
    }
    public void setLife(int life) {
        this.life = life;
    }

    public double getNutriscore() {
        return nutriscore;
    }
    public void setNutriscore(double nutriscore) {
        this.nutriscore = nutriscore;
    }

    public List<ObjectsItems> getCollectedObjectItems() {
        return collectedObjectItems;
    }

    //abstrakte Methode zum fortbewegen--> Logik fehlt noch
    @Override
    public PlayerPosition move(){
        System.out.println("Snackman is moving");
        return null; 
    }

    //Methode: addieren der Kalorien und Objekte in der Liste rein tun
    @Override
    public void pickUpItem(Item item) {
        if (item instanceof FoodItems foodItem) {
            // Kalorien
            logger.info("{} is picked up", foodItem.getName());
            currentCalorie += foodItem.getNutriScore().getCalorieBonus();
            logger.info("FoodItem {} consumed: Current Calories = {}", foodItem.getName(), currentCalorie);
        } else if (item instanceof ObjectsItems objectItem) {
            // ObjectItem sammeln
            collectedObjectItems.add(objectItem);
            logger.info("ObjectItem {} collected. Total collected items: {}", objectItem.getName(), collectedObjectItems.size());
        }
    }
    
    public double increaseNutriScore(double amount){
        this.nutriscore += amount; 
        return this.nutriscore; 
    }

    //Methode zum Verhhalten nachdem man erwicht worden ist  
    public void caught (){
        this.life--; 
        if(this.life <= 0 ){
            System.out.println("Snackman has been caught and has no more lives.");
        }
    }
}
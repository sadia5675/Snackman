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
    private int maxLife;
    private int life; 
    private int currentPoints;



    private static final Logger logger = LoggerFactory.getLogger(Snackman.class);

    public Snackman(double speed, int posX, int posY, int life,int maxLife){
        super(speed,posX,posY);
        this.life=life; 
        this.maxLife=maxLife;
        currentPoints = 0;
    }



    public int getLife() {
        return life;
    }
    public void setLife(int life) {
        this.life = life;
    }


    public int getMaxLife() {
        return maxLife;
    }



    public void setMaxLife(int maxLife) {
        this.maxLife = maxLife;
    }


    public int getCurrentPoints() {
        return currentPoints;
    }



    public void setCurrentPoints(int currentPoints) {
        this.currentPoints = currentPoints;
    }

     //abstrakte Methode zum fortbewegen--> Logik fehlt noch
    // @Override
    // public PlayerPosition move(){
    //     System.out.println("Snackman is moving");
    //     return null; 
    // }

    // Methode: Aufnehmen von FoodItems
     public void eatSnack(FoodItems foodItem) {
        currentPoints += foodItem.getNutriScore().getCalorieBonus();
        logger.info("FoodItem '{}' consumed: Current Calories = {}", foodItem.getName(), currentPoints);
    }

    @Override
    public void useItem(ObjectsItems item) {
        item = getCurrentObjectItem();
        if (item != null) {
            logger.info("Snackman uses ObjectItem '{}'.", item.getName());
            // Hier die Logik
            setCurrentObjectItem(null); 
        } else {
            logger.warn("No ObjectItem to use.");
        }
    }

    //Methode zum Verhhalten nachdem man erwicht worden ist  
    public void caught (){
        this.life--; 
        if(this.life <= 0 ){
            logger.info("Snackman has been caught and has no more lives.");
        }
    }

}
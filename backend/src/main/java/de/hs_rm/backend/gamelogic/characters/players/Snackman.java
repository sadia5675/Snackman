package de.hs_rm.backend.gamelogic.characters.players;

import java.time.Duration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * Die Snackman Klasse erbt von der Charackter Klasse.
 */
public class Snackman extends Character {
    //Initialisierung
    private int maxLife;
    private int life; 
    private double nutriscore; 
    private Item item;
    private int currentCalorie;
    public Thread invincibilityThread;

    private static final Logger logger = LoggerFactory.getLogger(Snackman.class);

    // Invincibility Frames
    private boolean isInvincible = false;  
    //private Instant lastDamageTimestamp; 
    private final Duration invincibilityDuration = Duration.ofSeconds(5); 

    public Snackman(double speed, int posX, int posY, int life,int maxLife){
        super(speed,posX,posY);
        this.life=life; 
        this.nutriscore=0; 
        this.item= null;
        this.maxLife=maxLife;
    }

    public Item getItems() {
        return item;
    }

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

     //abstrakte Methode zum fortbewegen--> Logik fehlt noch
    // @Override
    // public PlayerPosition move(){
    //     System.out.println("Snackman is moving");
    //     return null; 
    // }

    // Methode: Aufnehmen von FoodItems
     public void eatSnack(FoodItems foodItem) {
        currentCalorie += foodItem.getNutriScore().getCalorieBonus();
        logger.info("FoodItem '{}' consumed: Current Calories = {}", foodItem.getName(), currentCalorie);
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
    
    public double increaseNutriScore(double amount){
        this.nutriscore += amount; 
        return this.nutriscore; 
    }

    //Methode zum Verhhalten nachdem man erwicht worden ist  
    public void caught() {
        logger.info("Caught called: life={}, isInvincible={}", this.life, this.isInvincible);

        if (isInvincible) {
            logger.info("Snackman is currently invincible. Damage ignored.");
            return;
        }
    
        this.life--;
        logger.info("Snackman has taken damage! Remaining life: {}", this.life);
    
        if (this.life <= 0) {
            logger.info("Snackman has been caught and has no more lives.");
        }
    
        // Invincibility wird aktiviert... erst nach dem man ein Leben verloren hat
        startInvincibilityFrames();
    }


     // Methode: Überprüft der Invincibility Frames
    public void startInvincibilityFrames() {
        logger.info("Invincibility started. Snackman is now invincible.");
    isInvincible = true;
    // Speichere den Thread in der Klasse
    invincibilityThread = new Thread(() -> {
        try {
            Thread.sleep(invincibilityDuration.toMillis()); // Wartezeit für Invincibility
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            logger.error("Invincibility thread was interrupted.", e);
        } finally {
            isInvincible = false; // Flag zurücksetzen
            logger.info("Snackman is no longer invincible.");
        }
    });

    invincibilityThread.start();
    }

    public boolean isInvincible() {
        return isInvincible;
    }

}
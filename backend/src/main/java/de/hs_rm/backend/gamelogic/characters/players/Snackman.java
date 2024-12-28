package de.hs_rm.backend.gamelogic.characters.players;

import java.time.Duration;
import java.time.LocalDateTime;

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

    private static final Logger logger = LoggerFactory.getLogger(Snackman.class);

    public LocalDateTime lastDamageTimestamp; // Speichert die Zeit, zu der der Snackman zuletzt Schaden bekommen hat.
    public final Duration invincibilityDuration = Duration.ofSeconds(5); //  Legt fest, wie lange Snackman unverwundbar bleibt

    public Snackman(double speed, int posX, int posY, int life,int maxLife){
        super(speed,posX,posY);
        this.life=life; 
        this.nutriscore=0; 
        this.item= null;
        this.maxLife=maxLife;
        this.lastDamageTimestamp = null;
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

    //Methode: Prüft ob der Spieler unverwundbar ist und wenn nicht, reduziert es die Lebenspunkte und aktiviert die Invincibility.
    public void caught() {
         LocalDateTime now = LocalDateTime.now(); // Aktuelle Zeit speichern

        // Prüfet: Invincibility Frames aktiv ist
        if (lastDamageTimestamp != null &&
            Duration.between(lastDamageTimestamp, now).compareTo(invincibilityDuration) < 0) {
            logger.info("Snackman is currently invincible. Damage ignored.");
            return;
        }

        this.life--;
        lastDamageTimestamp = now; // Speichert aktuelle Zeit als neuen Treffer-Zeitstempel
    
        logger.info("Snackman has taken damage! Remaining life: {}", this.life);
    
        if (this.life <= 0) {
            logger.info("Snackman has no more lives.");
        }
    }

    //Methode:  Prüft, ob die Invincibility-Zeit noch aktiv ist.
    public boolean isInvincible() {
        if (lastDamageTimestamp == null) {
            return false;
        }
        //Berechnet die vergangene Zeit seit dem letzten Schaden.
        Duration timeSinceLastDamage = Duration.between(lastDamageTimestamp, LocalDateTime.now());
        System.out.println("Time since last damage: " + timeSinceLastDamage.toMillis()); 
        //vergleivht vergangene Zeit mit der Invincibillity-Dauer also 5 sek
        return timeSinceLastDamage.compareTo(invincibilityDuration) < 0; //ja= true
    }
}
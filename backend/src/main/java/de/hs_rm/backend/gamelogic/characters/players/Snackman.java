package de.hs_rm.backend.gamelogic.characters.players;

import java.util.Timer;
import java.util.TimerTask;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
 * Die Snackman Klasse erbt von der Charackter Klasse.
 */
public class Snackman extends Character {

    private int maxLife;
    private int life;
    private int currentPoints;
    private int bonusFactor = 1;
    private boolean recentlyCaught;
    private long lastCaughtTime = 0; // Zeitpunkt der letzten Kollision in Millisekunden

    private static final Logger logger = LoggerFactory.getLogger(Snackman.class);

    public Snackman(double speed, int posX, int posY, int life, int maxLife) {
        super(speed, posX, posY);
        this.life = life;
        this.maxLife = maxLife;
        currentPoints = 0;
        this.recentlyCaught = false;
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

    public boolean isRecentlyCaught() {
        return this.recentlyCaught;
    }

    // abstrakte Methode zum fortbewegen--> Logik fehlt noch
    // @Override
    // public PlayerPosition move(){
    // System.out.println("Snackman is moving");
    // return null;
    // }

    // Methode: Aufnehmen von FoodItems
    public void eatSnack(FoodItems foodItem) {
        currentPoints += foodItem.getNutriScore().getCalorieBonus() * bonusFactor;
        logger.info("FoodItem '{}' consumed: Current Calories = {}", foodItem.getName(), currentPoints);
    }

    @Override
    public void useItem(ObjectsItems item) {
        item = getCurrentObjectItem();
        if (item.getName().contentEquals("Shield")) {
            recentlyCaught = true; // Immunität aktivieren
            new Timer().schedule(new TimerTask() {
                @Override
                public void run() {
                    recentlyCaught = false;
                }
            }, 5000);
            setCurrentObjectItem(null);
        } else if (item.getName().contentEquals("Double Points")) {

            bonusFactor = 2;
            new Timer().schedule(new TimerTask() {
                @Override
                public void run() {
                    bonusFactor = 1;
                }
            }, 5000);
            setCurrentObjectItem(null);
        } else if (item.getName().contentEquals("Extra Life")) {
            logger.info("Hier das leben vor {}",this.life);
            if (life != maxLife) {
                this.life++;
            }
            logger.info("Hier das leben danach {}",this.life);
            setCurrentObjectItem(null);
        }
    }

    // Methode zum Verhhalten nachdem man erwicht worden ist
    public void caught() {

        if (!recentlyCaught) { // Nur wennn keine Immunität aktiv ist
            long currentTime = System.currentTimeMillis();

            // Überprüfen, ob 5 Sekunden seit der letzten Kollision vergangen sind
            if (currentTime - lastCaughtTime >= 5000) {
                this.life--;
                lastCaughtTime = currentTime; // Zeitpunkt der letzten Kollision aktualisieren
                recentlyCaught = true; // Immunität aktivieren

                logger.info("Snackman lost a life. Remaining lives: {}", this.life);

                if (this.life <= 0) {
                    logger.info("Snackman has been caught and has no more lives.");
                } else {
                    logger.info("Snackman is immune for 5 seconds.");
                }

                // Nach 5 Sekunden Immunität beenden
                new Timer().schedule(new TimerTask() {
                    @Override
                    public void run() {
                        recentlyCaught = false;
                        // logger.info("Snackman is no longer immune.");
                    }
                }, 5000);
            } else {
                // logger.info("Snackman is immune and cannot lose a life right now.");
            }
        }
    }
}
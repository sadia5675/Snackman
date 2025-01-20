package de.hs_rm.backend.gamelogic.characters.players;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.Timer;
import java.util.TimerTask;

/*Die Ghost Klasse erbt von der Character Klasse. Hierbei handelt es sich um einen Gegner von Snackman,
 *der von einem Spieler gespielt werden kann. 
 */
public class Ghost extends Character {
    // Initialisierung
    private int touchcount;
    private ObjectsItems item;
    private double speed = 1.0;

    private static final Logger logger = LoggerFactory.getLogger(Ghost.class);

    public Ghost(double speed, int posX, int posY) {
        super(speed, posX, posY);
        this.touchcount = 0;
        this.item = item;
    }

    public int getTouchcount() {
        return touchcount;
    }

    public void setTouchcount(int touchcount) {
        this.touchcount = touchcount;
    }

    // abstrakte Methode zum fortbewegen--> Logik fehlt noch
    // @Override
    // public PlayerPosition move(){
    // logger.info("the ghost is moving");
    // return null;
    // }

    // Reglung bei Kontakt mit Snackman--> Logik fehlt noch
    public void hit() {
        this.touchcount++;
        logger.info("Ghosttouch  wurde addiert: {} ", this.touchcount);
    }

    @Override
    public void useItem(ObjectsItems item) {
        item = getCurrentObjectItem();
        if (item.getName().contentEquals("Speed Boost")) {
            double originalSpeed = this.speed; // Speichere die ursprüngliche Geschwindigkeit
            Ghost.this.speed = speed * 2; // Geschwindigkeit verdoppeln

            new Timer().schedule(new TimerTask() {
                @Override
                public void run() {
                    Ghost.this.speed = originalSpeed; // Geschwindigkeit zurücksetzen
                }
            }, 10000);

            setCurrentObjectItem(null); // Das Item wird nach der Nutzung entfernt
        }
    }
}
package de.hs_rm.backend.gamelogic.characters.players;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class SnackmanTest {

    private Snackman snackman;
    @BeforeEach
    public void setUp(){
        snackman = new Snackman(5.0,10,20,3, 3);
    }

     @Test
    public void testGetterAndSetter() {
        // Teste Setter
        snackman.setSpeed(15.0);
        snackman.setPosX(30);
        snackman.setPosY(40);
        snackman.setLife(5);
        snackman.setNutriscore(25.0);

        // Teste Getter
        assertEquals(15.0, snackman.getSpeed(), "Geschwindigkeit sollte 15.0 sein.");
        assertEquals(30, snackman.getPosX(), "X-Position sollte 30 sein.");
        assertEquals(40, snackman.getPosY(), "Y-Position sollte 40 sein.");
        assertEquals(5, snackman.getLife(), "Leben sollte 5 sein.");
        assertEquals(25.0, snackman.getNutriscore(), "NutriScore sollte 25.0 sein.");
    }

   /*
    @Test
    public void testMove() {
        PlayerPosition newPos = snackman.move();
        assertNull(newPos, "Muss noch implementiert werden");
    } */

    @Test
    public void testIncreaseNutriScore() {
        snackman.increaseNutriScore(10.0);
        assertEquals(10.0, snackman.getNutriscore());

        snackman.increaseNutriScore(5.0);
        assertEquals(15.0, snackman.getNutriscore());
    }

    @Test
    public void testCaughtWithInvincibilityFrames() throws InterruptedException {
       // Erster:
    snackman.caught();
    System.out.println("Nach erstem Treffer: Leben = " + snackman.getLife() + ", Unverwundbar = " + snackman.isInvincible());
    assertEquals(2, snackman.getLife(), "Leben sollte nach erstem Treffer 2 sein.");
    assertTrue(snackman.isInvincible(), "Snackman sollte nach dem ersten Treffer unverwundbar sein.");

    // Zweiter: während der Invincibility
    snackman.caught();
    System.out.println("Während der Unverwundbarkeit: Leben = " + snackman.getLife() + ", Unverwundbar = " + snackman.isInvincible());
    assertEquals(2, snackman.getLife(), "Leben sollte während der Invincibility gleich bleiben.");

    // Warten, bis die Invincibility Frames ablaufen
    Thread.sleep(snackman.invincibilityDuration.toMillis() + 100);

    // Prüfen, dass Invincibility vorbei ist
    assertFalse(snackman.isInvincible(), "Snackman sollte nicht mehr unverwundbar sein.");

    // Dritter: nach Ablauf der Invincibility
    snackman.caught();
    assertEquals(1, snackman.getLife(), "Leben sollte nach drittem Treffer 1 sein.");
    assertTrue(snackman.isInvincible(), "Snackman sollte nach dem dritten Treffer erneut unverwundbar sein.");
    }
}

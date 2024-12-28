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
    System.out.println("After first hit: Life = " + snackman.getLife() + ", Invincible = " + snackman.isInvincible());
    assertEquals(2, snackman.getLife(), "Life should be 2 after the first hit.");
    assertTrue(snackman.isInvincible(), "nackman should be invincible after the first hit.");

    // Zweiter: während der Invincibility
    snackman.caught();
    System.out.println("During invincibility: Life = " + snackman.getLife() + ", Invincible = " + snackman.isInvincible());
    assertEquals(2, snackman.getLife(), "Life should remain the same during invincibility.");

    // Warten, bis die Invincibility Frames ablaufen
    Thread.sleep(snackman.invincibilityDuration.toMillis() + 100);

    // Prüfen, dass Invincibility vorbei ist
    assertFalse(snackman.isInvincible(), "Snackman should no longer be invincible.");

    // Dritter: nach Ablauf der Invincibility
    snackman.caught();
    System.out.println("After third hit: Life = " + snackman.getLife() + ", Invincible = " + snackman.isInvincible());
    assertEquals(1, snackman.getLife(), "Life should be 1 after the third hit.");
    assertTrue(snackman.isInvincible(), "Snackman should be invincible again after the third hit.");
    }
}

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

        // Teste Getter
        assertEquals(15.0, snackman.getSpeed(), "Geschwindigkeit sollte 15.0 sein.");
        assertEquals(30, snackman.getPosX(), "X-Position sollte 30 sein.");
        assertEquals(40, snackman.getPosY(), "Y-Position sollte 40 sein.");
        assertEquals(5, snackman.getLife(), "Leben sollte 5 sein.");
        assertEquals(3, snackman.getMaxLife(), "Maximale Leben sollten 3 sein.");
    }

   /*
    @Test
    public void testMove() {
        PlayerPosition newPos = snackman.move();
        assertNull(newPos, "Muss noch implementiert werden");
    } */

    @Test
    public void testCurrentPoints() {
        snackman.setCurrentPoints(10);
        assertEquals(10, snackman.getCurrentPoints(), "Punkte sollten 10 sein.");

        snackman.setCurrentPoints(25);
        assertEquals(25, snackman.getCurrentPoints(), "Punkte sollten 25 sein.");
    }
    
    @Test
    public void testEatSnack() {
        FoodItems foodItem =   new FoodItems("Banana", 1, 1, NutriScore.A);
        snackman.eatSnack(foodItem);
        assertEquals(10, snackman.getCurrentPoints(), "Punkte sollten 10 sein.");

        foodItem =   new FoodItems("Chips", 2, 1, NutriScore.E);
        snackman.eatSnack(foodItem);
        assertEquals(60, snackman.getCurrentPoints(), "Punkte sollten 60 sein.");
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

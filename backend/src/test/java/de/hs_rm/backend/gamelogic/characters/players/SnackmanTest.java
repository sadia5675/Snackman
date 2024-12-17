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
public void testStartInvincibilityFrames() throws InterruptedException {
    Snackman snackman = new Snackman(1.0, 0, 0, 3, 3);

    // Vor Aktivierung der Invincibility
    assertFalse(snackman.isInvincible(), "Snackman should not be invincible initially.");

    // Invincibility aktivieren
    snackman.startInvincibilityFrames();
    assertTrue(snackman.isInvincible(), "Snackman should be invincible immediately after activation.");

    // Warten auf das Ende des Invincibility-Threads
    snackman.invincibilityThread.join(); // Synchronisiere Test mit dem Thread

    assertFalse(snackman.isInvincible(), "Snackman should no longer be invincible after duration.");
}

@Test
public void testCaughtAndInvincibility() throws InterruptedException {
    Snackman snackman = new Snackman(1.0, 0, 0, 3, 3);

    // Erster Treffer
    snackman.caught();
    assertEquals(2, snackman.getLife(), "Life should decrease to 2 after first hit.");
    assertTrue(snackman.isInvincible(), "Snackman should be invincible after first hit.");

    // Zweiter Treffer während Invincibility (soll ignoriert werden)
    snackman.caught();
    assertEquals(2, snackman.getLife(), "Life should remain 2 during invincibility.");

    // Warten, bis der Invincibility-Thread endet
    snackman.invincibilityThread.join(); // Warten auf das Ende des Threads
    assertFalse(snackman.isInvincible(), "Invincibility should have ended.");

    // Dritter Treffer nach Ablauf der Invincibility
    snackman.caught();
    assertEquals(1, snackman.getLife(), "Life should decrease to 1 after invincibility ends.");
}


}

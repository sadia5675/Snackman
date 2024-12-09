package de.hs_rm.backend.gamelogic.characters.players;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.beans.BeanProperty;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class SnackmanTest {

    private Snackman snackman;
    @BeforeEach
    public void setUp(){
        snackman = new Snackman(5,10,20,3);
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
   
    @Test
    public void testMove() {
        PlayerPosition newPos = snackman.move();
        assertNull(newPos, "Muss noch implementiert werden");
    }

    @Test
    public void testIncreaseNutriScore() {
        snackman.increaseNutriScore(10.0);
        assertEquals(10.0, snackman.getNutriscore());

        snackman.increaseNutriScore(5.0);
        assertEquals(15.0, snackman.getNutriscore());
    }

    @Test
    public void testCaught() {
        snackman.caught();
        assertEquals(2, snackman.getLife());

        snackman.caught();
        snackman.caught();
        assertEquals(0, snackman.getLife());
    }

}

package de.hs_rm.backend.gamelogic.characters.players;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class GhostTest {

    private Ghost ghost;
    @BeforeEach
    public void setUp(){
        ghost= new Ghost(5, 10, 20);
    }

    @Test
    public void testSetterAndGetter() {
        ghost.setSpeed(7.0);
        ghost.setTouchcount(5);
        FoodItems testItem = new FoodItems("Banana", 0,0, NutriScore.B);
        ghost.setItem(testItem);
       
        assertEquals(5, ghost.getTouchcount(), "Touchcount sollte 5 sein.");
        assertNotNull(ghost.getItems(), "Item sollte nicht null sein.");
        assertEquals("Banana", ghost.getItems().getName(), "Item-Name sollte 'Banana' sein.");
        assertEquals(7.0, ghost.getSpeed(), "Geschwindigkeit sollte 7.0 sein.");
    }

    @Test
    public void testMove() {
        PlayerPosition newPosition = ghost.move();
        assertNull(newPosition, "Muss implementiert werden");
    }

    @Test
    public void testHit() {
        ghost.hit("Player123");
        assertEquals(1, ghost.getTouchcount(), "Touchcount sollte nach einem Treffer 1 sein.");

        ghost.hit("Player456");
        assertEquals(2, ghost.getTouchcount(), "Touchcount sollte nach zwei Treffern 2 sein.");
    }

}
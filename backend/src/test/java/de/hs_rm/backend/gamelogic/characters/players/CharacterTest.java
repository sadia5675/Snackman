package de.hs_rm.backend.gamelogic.characters.players;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


public class CharacterTest {
    private Character testCharacter;

    @BeforeEach
    public void setUp() {
        // vor jedem Test
        testCharacter = new Snackman(10.0, 5, 5, 3, 3);
    }

     @Test
    public void testPickUpItem() {
        // Mock
        Item testItem = new FoodItems("Apple", 0, 0,NutriScore.A);
        testCharacter.pickUpItemLogic(testItem);
        
        assertNotNull(testCharacter.getItems());
        assertEquals("Apple", testCharacter.getItems().getName());
    }

    @Test
    public void testUseItem() {
        Item testItem = new FoodItems("Apple", 0, 1, NutriScore.A);
        testCharacter.pickUpItemLogic(testItem);

        // Kalorien vorher
        int initialCalories = testCharacter.getCurrentcalorie();
        
        // Kalorien nacher
        testCharacter.mycurrentItem();
        assertEquals(initialCalories + 10, testCharacter.getCurrentcalorie());
    }

    /*
    @Test
    public void testMove() {
        PlayerPosition newPos = testCharacter.move();
        assertEquals(6, newPos.getX());
        assertEquals(6, newPos.getY());
    }
    */
    @Test // Test, wenn kein Item gesetzt wird
    public void testPickUpItemLogicWithNullItem() {
        testCharacter.pickUpItemLogic(null);
        assertNull(testCharacter.getItems());
    }


    @Test //getter und setter
    public void testSetterAndGetter() {
        testCharacter.setSpeed(15.0);
        testCharacter.setPosX(10);
        testCharacter.setPosY(10);
        testCharacter.setCurrentcalorie(100);

        assertEquals(15.0, testCharacter.getSpeed());
        assertEquals(10, testCharacter.getPosX());
        assertEquals(10, testCharacter.getPosY());
        assertEquals(100, testCharacter.getCurrentcalorie());
    }
}
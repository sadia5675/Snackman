package de.hs_rm.backend.gamelogic;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import de.hs_rm.backend.gamelogic.characters.players.*;
import de.hs_rm.backend.gamelogic.map.Tile;
import de.hs_rm.backend.gamelogic.map.TileType;

public class CollisionTest {

    private Tile surfaceTile;
    private Tile wallTile;
    private Snackman snackman;
    private Ghost ghost;
    private FoodItems foodItem;
    private ObjectsItems objectItem;

    @BeforeEach
    void setUp() {
        surfaceTile = new Tile(TileType.SURFACE);
        wallTile = new Tile(TileType.WALL);
        snackman = new Snackman(1.0, 0, 0, 3, 3);
        ghost = new Ghost(1.0, 0, 0);
        foodItem = new FoodItems("Banana", 0, 0, NutriScore.A);
        objectItem = mock(ObjectsItems.class);

        when(objectItem.getName()).thenReturn("Speed Boost");
        when(objectItem.getEffectDescription()).thenReturn("Increases speed for 5 seconds");
        when(objectItem.getSymbol()).thenReturn('1');

    }

    @Test
    void testAddCharacterWithoutItems() {
        boolean result = surfaceTile.addCharacter(snackman);

        assertTrue(result, "Snackman should be added successfully.");
        assertTrue(surfaceTile.hasCharacter(), "Tile should have a character.");
        assertTrue(surfaceTile.getCharacterList().contains(snackman), "Tile should contain the Snackman.");
    }
    /*
    @Test
    void testAddSnackmanWithMatchingItem() {
        surfaceTile.addItem(foodItem);
        surfaceTile.addItem(objectItem);

        boolean result = surfaceTile.addCharacter(snackman);

        assertTrue(result, "Snackman should be added successfully.");
        assertEquals(objectItem, snackman.getCurrentObjectItem(), "Snackman should collect the object item.");
        assertEquals(NutriScore.A.getCalorieBonus(), snackman.getCurrentCalorie(), "Snackman should eat the food item.");
    }*/

    // @Test
    // void testAddGhostWithMatchingItem() {
    //     surfaceTile.addItem(objectItem);

    //     boolean result = surfaceTile.addCharacter(ghost);

    //     assertTrue(result, "Ghost should be added successfully.");
    //     assertTrue(ghost.getCurrentObjectItem()== objectItem, "Ghost should collect the object item.");
    // }



    @Test
    void testRemoveCharacter() {
        surfaceTile.addCharacter(snackman);
        boolean removed = surfaceTile.removeCharacter(snackman);

        assertTrue(removed, "Snackman should be removed successfully.");
        assertFalse(surfaceTile.hasCharacter(), "Tile should no longer have any characters.");
    }

    
}

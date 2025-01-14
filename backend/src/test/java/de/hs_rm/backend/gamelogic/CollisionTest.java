package de.hs_rm.backend.gamelogic;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.ArrayList;
import java.util.List;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;

import de.hs_rm.backend.gamelogic.characters.chicken.Chicken;
import de.hs_rm.backend.gamelogic.characters.players.*;
import de.hs_rm.backend.gamelogic.map.Tile;
import de.hs_rm.backend.gamelogic.map.TileType;

public class CollisionTest {

    private Tile surfaceTile;
    private Tile wallTile;
    private Snackman snackman;
    private Ghost ghost;
    private FoodItems foodItem;
    private Chicken chicken;
    private List<Item> itemList;

    //private ObjectsItems objectItem;

    @BeforeEach
    void setUp() {
        surfaceTile = new Tile(TileType.SURFACE);
        wallTile = new Tile(TileType.WALL);
        snackman = new Snackman(1.0, 0, 0, 3, 3);
        ghost = new Ghost(1.0, 0, 0);
        foodItem = new FoodItems("Banana", 0, 0, NutriScore.A);
        //objectItem = new ObjectsItems("Key", 0, 0,"description");
        chicken = new Chicken(5, 5, null);
        itemList = new ArrayList<>();
        surfaceTile.setItemList(itemList);



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
        //surfaceTile.addItem(objectItem);

        boolean result = surfaceTile.addCharacter(snackman);

        assertTrue(result, "Snackman should be added successfully.");
        //assertTrue(snackman.getCurrentObjectItem() ==objectItem, "Snackman should collect object item.");
        assertEquals(NutriScore.A.getCalorieBonus(), snackman.getCurrentCalorie(), "Snackman should eat the food item.");
    }
        */

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

     @Test
    void testAddChickenWithoutItems() {
        // Test when itemList is empty
        boolean result = surfaceTile.addChicken(chicken);

        // Assert the result is true
        assertTrue(result, "Adding chicken should return true when itemList is empty.");

        // Assert that the chicken was added
        assertTrue(surfaceTile.getChickenList().contains(chicken), "The chicken should be added to the tile.");
    }

    @Test
    void testAddChickenWithFoodItem() {
        // Create a FoodItem and add it to the itemList
        FoodItems foodItem = new FoodItems("Apple", 1, 1, NutriScore.A);
        itemList.add(foodItem);

        // Mock the chicken's behavior
        Egg mockEgg = mock(Egg.class);
        Chicken spyChicken = spy(chicken);
        doReturn(mockEgg).when(spyChicken).eatSnack(eq(foodItem), anyInt(), anyInt());

        // Call addChicken
        boolean result = surfaceTile.addChicken(spyChicken);

        // Assertions
        assertTrue(result, "Adding chicken should return true.");
        assertTrue(surfaceTile.getChickenList().contains(spyChicken), "The chicken should be added to the tile.");
        verify(spyChicken, times(1)).eatSnack(eq(foodItem), anyInt(), anyInt());
        assertTrue(surfaceTile.getItemList().contains(mockEgg), "The egg should be added to the tile.");
        assertFalse(surfaceTile.getItemList().contains(foodItem), "The food item should be removed from the tile.");

    }

    // @Test
    // void testAddChickenWithNonFoodItem() {
    //     // Create a non-FoodItem and add it to the itemList
    //     Item nonFoodItem = new Item("NonFood", 2, 2, PlayerRole.SNACKMAN);
    //     itemList.add(nonFoodItem);

    //     // Call addChicken
    //     boolean result = surfaceTile.addChicken(chicken);

    //     // Assertions
    //     assertTrue(result, "Adding chicken should return true.");
    //     assertTrue(surfaceTile.getChickenList().contains(chicken), "The chicken should be added to the tile.");
    //     assertTrue(surfaceTile.getItemList().contains(nonFoodItem), "Non-food items should remain in the itemList.");
    // }

    
}

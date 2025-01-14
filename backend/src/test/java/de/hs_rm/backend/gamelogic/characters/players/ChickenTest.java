package de.hs_rm.backend.gamelogic.characters.players;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.test.util.ReflectionTestUtils;

import de.hs_rm.backend.gamelogic.characters.chicken.Chicken;

class ChickenTest {

    private Chicken chicken;

    @BeforeEach
    void setUp() {
        // Initialize a Chicken object with initial position
        chicken = new Chicken(0, 0, null);

        // Set the value of CALORIESBONUS_EGG via ReflectionTestUtils
        ReflectionTestUtils.setField(chicken, "CALORIESBONUS_EGG", 50);
    }

    @Test
    void testEatSnackProducesEgg() {
        // Mock a FoodItems object with a NutriScore
        FoodItems mockFoodItem = Mockito.mock(FoodItems.class);
        NutriScore nutriScore = NutriScore.B; // Calorie bonus = 20
        Mockito.when(mockFoodItem.getNutriScore()).thenReturn(nutriScore);

        // Feed the chicken 3 times (20 + 20 + 20 = 60 calories, enough for 1 egg)
        chicken.eatSnack(mockFoodItem, 1, 1);
        chicken.eatSnack(mockFoodItem, 2, 2);
        Egg newEgg = chicken.eatSnack(mockFoodItem, 3, 3);

        // Check that an egg was created
        assertNotNull(newEgg, "An egg should be created when calorie threshold is reached.");
        assertEquals(3, newEgg.getX());
        assertEquals(3, newEgg.getY());
    }

    @Test
    void testEatSnackDoesNotProduceEgg() {
        // Mock a FoodItems object with a NutriScore
        FoodItems mockFoodItem = Mockito.mock(FoodItems.class);
        NutriScore nutriScore = NutriScore.A; // Calorie bonus = 10
        Mockito.when(mockFoodItem.getNutriScore()).thenReturn(nutriScore);

        // Feed the chicken 4 times (10 + 10 + 10 + 10 = 40 calories, not enough for 1 egg)
        chicken.eatSnack(mockFoodItem, 1, 1);
        chicken.eatSnack(mockFoodItem, 2, 2);
        chicken.eatSnack(mockFoodItem, 3, 3);
        Egg newEgg = chicken.eatSnack(mockFoodItem, 4, 4);

        // Check that no egg was created
        assertNull(newEgg, "No egg should be created when calorie threshold is not reached.");
    }

    @Test
    void testEatSnackResetsCalorieCount() {
        // Mock a FoodItems object with a NutriScore
        FoodItems mockFoodItem = Mockito.mock(FoodItems.class);
        NutriScore nutriScore = NutriScore.C; // Calorie bonus = 30
        Mockito.when(mockFoodItem.getNutriScore()).thenReturn(nutriScore);

        // Feed the chicken twice (30 + 30 = 60 calories, enough for 1 egg with 10 leftover calories)
        chicken.eatSnack(mockFoodItem, 1, 1);
        Egg newEgg = chicken.eatSnack(mockFoodItem, 2, 2);

        // Check that an egg was created
        assertNotNull(newEgg, "An egg should be created when calorie threshold is reached.");

        // Check that currentCalorie was reset correctly (60 - 50 = 10)
        assertEquals(10, ReflectionTestUtils.getField(chicken, "currentCalorie"), 
                     "Remaining calories should be carried over after creating an egg.");
    }
}

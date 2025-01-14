package de.hs_rm.backend.gamelogic.characters.players;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.*;

class EggTest {

    private Egg egg;

    @BeforeEach
    void setUp() {
        // Beispiel: Initialisiere das Egg-Objekt mit Testkoordinaten
        egg = new Egg(10, 20);

        // CALORIESBONUS_EGG kann mit ReflectionTestUtils gesetzt werden,
        // da @Value normalerweise von Spring injiziert wird.
        ReflectionTestUtils.setField(egg, "CALORIESBONUS_EGG", 25); // Beispielwert
    }

    @Test
    void testNutriScoreIsCorrect() {
        // NutriScore des Eies prüfen
        assertEquals(NutriScore.EGG, egg.getNutriScore(), "NutriScore sollte EGG sein.");
    }

    @Test
    void testCaloriesBonusIsCorrect() {
        // Überprüfen, ob CALORIESBONUS_EGG korrekt injiziert wurde
        assertEquals(25, egg.getCALORIESBONUS_EGG(), "CALORIESBONUS_EGG sollte 25 sein.");
    }

    @Test
    void testIsEatenInitiallyFalse() {
        // Standardwert von isEaten prüfen
        assertFalse(egg.isEaten(), "Ein neu erstelltes Ei sollte nicht gegessen sein.");
    }

    @Test
    void testSetEaten() {
        // isEaten ändern und prüfen
        egg.setEaten(true);
        assertTrue(egg.isEaten(), "Das Ei sollte als gegessen markiert sein.");
    }
}

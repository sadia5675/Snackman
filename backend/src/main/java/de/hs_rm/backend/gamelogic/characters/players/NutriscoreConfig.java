package de.hs_rm.backend.gamelogic.characters.players;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class NutriscoreConfig {
    @Value("${egg.caloriesbonus:0}")
    private int eggCalorieBonus;

    public int getEggCalorieBonus() {
        return eggCalorieBonus;
    }
}
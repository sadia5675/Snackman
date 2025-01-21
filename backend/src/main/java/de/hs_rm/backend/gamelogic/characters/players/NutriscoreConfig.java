package de.hs_rm.backend.gamelogic.characters.players;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class NutriscoreConfig {
    @Value("${egg.caloriesbonus}")
    private int eggCalorieBonus;

    public int getEggCalorieBonus() {
        if(eggCalorieBonus == 0){
            eggCalorieBonus = 500;
        }
        return eggCalorieBonus;
    }
}
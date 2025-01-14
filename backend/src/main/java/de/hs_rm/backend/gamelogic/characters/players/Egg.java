package de.hs_rm.backend.gamelogic.characters.players;

import org.springframework.beans.factory.annotation.Value;

public class Egg extends FoodItems{

    @Value("${egg.caloriesbonus}")
    private int CALORIESBONUS_EGG;


    private boolean isEaten;

    public Egg(int x, int y){
        super("Egg", x, y, NutriScore.EGG);
        this.isEaten = false;
    }

    public int getCALORIESBONUS_EGG() {
        return CALORIESBONUS_EGG;
    }

    public boolean isEaten() {
        return isEaten;
    }

    public void setEaten(boolean isEaten) {
        this.isEaten = isEaten;
    } 
}

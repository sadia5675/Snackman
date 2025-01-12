package de.hs_rm.backend.gamelogic.characters.players;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;

public class Chicken {
    private int posX;
    private int posY;
    private List<Egg> eggList;
    private int currentCalorie;

    @Value("${egg.caloriesbonus}")
    private int CALORIESBONUS_EGG;

    
    public Chicken(int posX, int posY) {
        this.posX = posX;
        this.posY = posY;
        this.eggList = new ArrayList<>();
        this.currentCalorie =0;
    }

    public Egg eatSnack(FoodItems item, int posX, int posY){
        this.currentCalorie += item.getNutriScore().getCalorieBonus();
        if(this.currentCalorie>= this.CALORIESBONUS_EGG){
            this.currentCalorie = this.currentCalorie - this.CALORIESBONUS_EGG;
            Egg newEgg = new Egg(posX,posY);
            this.eggList.add(newEgg);
            return newEgg;
        }
            return null;

    }
    public int getPosX() {
        return posX;
    }
    public void setPosX(int posX) {
        this.posX = posX;
    }
    public int getPosY() {
        return posY;
    }
    public void setPosY(int posY) {
        this.posY = posY;
    }
    
}

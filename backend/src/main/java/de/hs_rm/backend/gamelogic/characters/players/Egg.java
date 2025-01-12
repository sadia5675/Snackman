package de.hs_rm.backend.gamelogic.characters.players;

import org.springframework.beans.factory.annotation.Value;

public class Egg {

    @Value("${egg.caloriesbonus}")
    private int CALORIESBONUS_EGG;

    private int posX, posY;

    private boolean isEaten;

    public Egg( int x, int y){
        this.posX=x;
        this.posY=y;
        this.isEaten = false;
    }

    public int getCALORIESBONUS_EGG() {
        return CALORIESBONUS_EGG;
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

    public boolean isEaten() {
        return isEaten;
    }

    public void setEaten(boolean isEaten) {
        this.isEaten = isEaten;
    }

    
}

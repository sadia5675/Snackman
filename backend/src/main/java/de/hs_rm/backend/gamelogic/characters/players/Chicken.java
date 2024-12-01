package de.hs_rm.backend.gamelogic.characters.players;

public class Chicken {
    int posX;
    int posY;
    
    public Chicken(int posX, int posY) {
        this.posX = posX;
        this.posY = posY;
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

package de.hs_rm.backend.gamelogic.characters.players;

public class ChickenPosition {

    private int posX;
    private int posY;
    private int id;

    public ChickenPosition(int id, int posX, int posY){
        this.id = id;
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
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    
    
}

package de.hs_rm.backend.gamelogic.characters.players;




public class Chicken {
    int posX;
    int posY;
    String script_path;
    
    public Chicken(int posX, int posY, String script_path) {
        this.posX = posX;
        this.posY = posY;
        this.script_path = script_path;
    }
    public void move(int x, int y) {
        this.posX = x;
        this.posY = y;
    }
    public String getScript_path() {
        return script_path;
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

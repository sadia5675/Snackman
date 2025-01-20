package de.hs_rm.backend.gamelogic.characters.players;
public class PlayerPosition {
    double posX;
    double posY;
    double posZ;
    double angle;
    public double getAngle() {
        return angle;
    }

    public void setAngle(double angle) {
        this.angle = angle;
    }

    String playerName;

    public PlayerPosition(){
        this.playerName = null;
        this.angle = 0;
        this.posX = 0;
        this.posY = 0;
        this.posZ = 1;
    }

    public PlayerPosition(String playerName, double posX, double posY, double posZ, double angle){
        this.playerName = playerName;
        this.posX = posX;
        this.posY = posY;
        this.posZ = posZ;
        this.angle = angle;
    }

    @Override
    public String toString() {
        return "PlayerPosition{" +
                "posX=" + posX +
                ", posY=" + posY +
                ", playerName='" + playerName + '\'' +
                '}';
    }

    public double getPosX() {
        return posX;
    }

    public void setPosX(float posX) {
        this.posX = posX;
    }

    public double getPosY() {
        return posY;
    }

    public void setPosY(float posY) {
        this.posY = posY;
    }

    public double getPosZ() {
        return posZ;
    }

    public void setPosZ(float posZ) {
        this.posZ = posZ;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    
}
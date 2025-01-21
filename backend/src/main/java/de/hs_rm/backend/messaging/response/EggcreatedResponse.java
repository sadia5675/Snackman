package de.hs_rm.backend.messaging.response;

public class EggcreatedResponse extends BaseResponse {
    private int positionX;
    private int positionY;

    public EggcreatedResponse(int posX, int posY){
        super("itemCollected","ok");
        this.positionX = posX;
        this.positionY = posY;
    }

    public int getPositionX() {
        return positionX;
    }

    public void setPositionX(int positionX) {
        this.positionX = positionX;
    }

    public int getPositionY() {
        return positionY;
    }

    public void setPositionY(int positionY) {
        this.positionY = positionY;
    }
}

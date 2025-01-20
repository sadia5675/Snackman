package de.hs_rm.backend.messaging.response;

public class EggcreatedResponse extends BaseResponse {
    private double positionX;
    private  double positionY;

    public EggcreatedResponse(double posX, double posY){
        super("itemCollected","ok");
        this.positionX = posX;
        this.positionY = posY;
    }

    public double getPositionX() {
        return positionX;
    }

    public void setPositionX(double positionX) {
        this.positionX = positionX;
    }

    public double getPositionY() {
        return positionY;
    }

    public void setPositionY(double positionY) {
        this.positionY = positionY;
    }
}

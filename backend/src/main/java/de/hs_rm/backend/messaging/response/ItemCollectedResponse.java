package de.hs_rm.backend.messaging.response;

public class ItemCollectedResponse extends BaseResponse{
    final private String itemName;
    private double positionX;
    private double positionY;

    public ItemCollectedResponse(String itemName, double posX, double posY){
        super("itemCollected","ok");
        this.itemName = itemName;
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

    public String getItemName() {
        return itemName;
    }
}

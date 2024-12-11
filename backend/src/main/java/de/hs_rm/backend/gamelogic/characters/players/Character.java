package de.hs_rm.backend.gamelogic.characters.players;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// Bauplan der Characters --> hierbei handelt es sich um eine abstrakte Klasse!
public abstract class Character{
    //Initialisierung 
    //Der Spieler bekommt später eine spring boot entity id 
    // private long id; 
    // private String name;
    // private String gameId; 
    private double speed;
    // PlayerPosition playerposition;
    // Player player;
    private int posX, posY;
    private int currentcalorie;
    //private static final int MAX_LIFE =3;



    private Item item;
    private double angleInDegrees; //der Winkel info, die von FE bekommt

    //private int life;
    private Item item;
    Logger logger = LoggerFactory.getLogger(Character.class);




    public Character(double speed, int posX, int posY){
        // this.id=id; 
        // this.name=name; 
        // this.gameId=gameId; 
        this.speed=speed; 
        //this.playerposition=playerposition; 
        //this.player = player;
        this.posX=posX;
        this.posY=posY;
        this.currentcalorie= 0;
        //this.item = item; 
    }

    //Getter udn Setter 
    // public long getId() {
    //     return id;
    // }
    // public void setId(long id) {
    //     this.id = id;
    // }
    // public String getName() {
    //     return name;
    // }
    // public void setName(String name) {
    //     this.name = name;
    // }
    // public String getGamiId() {
    //     return gameId;
    // }
    // public void setGamiId(String gamiId) {
    //     this.gameId = gamiId;
    // }

    public void move(int x, int y){
        this.posX = x;
        this.posY = y;
    }

    public double getSpeed() {
        return speed;
    }
    public void setSpeed(double playerSpeed) {
        this.speed = playerSpeed;
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
    public Item getItems() {
        return item;
    }


    public void setItem(Item item) {
        this.item=item; 
    }
    
    //Methode: addieren der Kalorien
    public void mycurrentItem(){
      Item currentItem= item;
        if (currentItem instanceof FoodItems foodItem) {
            currentcalorie += foodItem.getNutriScore().getCalorieBonus();
            logger.info(item.getName() + " has been used. Calories increased by " + foodItem.getNutriScore().getCalorieBonus());
        }else {
            logger.info("No item to use.");
        }

    }

    // Methode: Sammeln von Items
    public void pickUpItemLogic(Item item) {
        if (item == null) {
            logger.info("No item to pick up");
            return;
        }
        setItem(item);
        logger.info(item.getName() + " is picked up");
    }

    public int getCurrentcalorie() {
        return currentcalorie;
    }

    public void setCurrentcalorie(int currentcalorie) {
        this.currentcalorie = currentcalorie;
    }

    public Item getItem() {
        return item;
    }

    //TODO: muss noch ausgearbietet werden
    // Methode: Leben verloren
    public void caught() {
       // life--;
    }

    public int getCurrentcalorie() {
        return currentcalorie;
    }

    public void setCurrentcalorie(int currentcalorie) {
        this.currentcalorie = currentcalorie;
    }

    public Item getItem() {
        return item;
    }

    public double getAngleInDegrees() {
        return angleInDegrees;
    }

    public void setAngleInDegrees(double angleInDegrees) {
        this.angleInDegrees = angleInDegrees;
    }



}

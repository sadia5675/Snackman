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
    private double posX, posY, posZ;
    private ObjectsItems currentObjectItem;
    private static final Logger logger = LoggerFactory.getLogger(Character.class);

    //private static final int MAX_LIFE =3;

    private double angleInDegrees; //der Winkel info, die von FE bekommt




    public Character(double speed, int posX, int posY){
        // this.id=id; 
        // this.name=name; 
        // this.gameId=gameId; 
        this.speed=speed; 
        //this.playerposition=playerposition; 
        //this.player = player;
        this.posX=posX;
        this.posY=posY;
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

    public void move(double x, double y, double z, double angle){
        this.posX = x;
        this.posY = y;
        this.posZ = z;
        this.angleInDegrees = angle;
    }

    public double getSpeed() {
        return speed;
    }
    public void setSpeed(double playerSpeed) {
        this.speed = playerSpeed;
    }
    public double getPosX() {
        return posX;
    }
    public void setPosX(int posX) {
        this.posX = posX;
    }
    public double getPosY() {
        return posY;
    }
    public void setPosY(int posY) {
        this.posY = posY;
    }
    public double getPosZ() {
        return posZ;
    }
    public void setPosZ(int posZ) {
        this.posZ = posZ;
    }
    public ObjectsItems getCurrentObjectItem() {
        return currentObjectItem;
    }

    public void setCurrentObjectItem(ObjectsItems objectItem) {
        this.currentObjectItem = objectItem;
    }


    public void collectObjectItem(ObjectsItems item) {
            currentObjectItem = item;
    }
    public abstract void useItem(ObjectsItems item);


    public double getAngleInDegrees() {
        return angleInDegrees;
    }

    public void setAngleInDegrees(double angleInDegrees) {
        this.angleInDegrees = angleInDegrees;
    }


}

package de.hs_rm.backend.gamelogic.characters.players;
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
            currentcalorie += foodItem.getNutriScore().getCalorieBonus();}
    }

    //Abstrakte Methoden 
    public abstract PlayerPosition move(); 
    
    // Methode: Sammeln von Items
    public void pickUpItemLogic(Item item) {
        setItem(item);
            System.out.println(item.getName() + "is picked up");
    }
    
    //TODO: muss noch ausgearbietet werden
    // Methode: Leben verloren
    public void caught() {
       // life--;
    }

    
}

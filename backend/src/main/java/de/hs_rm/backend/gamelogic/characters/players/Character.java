package de.hs_rm.backend.gamelogic.characters.players;

public abstract class Character{
    //Der Spieler bekommt später eine spring boot entity id 
    private long id; 
    private String name;
    private String gameId; 
    private double playerSpeed;
    PlayerPosition playerposition;


    public Character(long id, String name, String gameId, double playerSpeed, PlayerPosition playerposition){
        this.id=id; 
        this.name=name; 
        this.gameId=gameId; 
        this.playerSpeed=playerSpeed; 
        this.playerposition=playerposition; 

    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getGamiId() {
        return gameId;
    }
    public void setGamiId(String gamiId) {
        this.gameId = gamiId;
    }
    public double getPlayerSpeed() {
        return playerSpeed;
    }
    public void setPlayerSpeed(double playerSpeed) {
        this.playerSpeed = playerSpeed;
    }
    public PlayerPosition getPlayerposition() {
        return playerposition;
    }
    public void setPlayerposition(PlayerPosition playerposition) {
        this.playerposition = playerposition;
    }

    //Abstrakte Methoden 
    public abstract PlayerPosition move(); 
    public abstract void pickUpItem(Item item); 
    
}

package de.hs_rm.backend.gamelogic.characters.players;

public class Player{
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY) // automatische ID-Generierung
    private long userId; 
    private String name; 
    private String email; 
    private String password; 
    PlayerType playertype; 

    public Player(long userId, String name, String email, String password,PlayerType playertype){
        this.userId=userId; 
        this.name=name; 
        this.email=email; 
        this.password=password; 
        this.playertype=PlayerType.REGISTERED; 

    }
    public Player(long userId, String name){
        this.userId=0; 
        this.name=name; 
        this.playertype=PlayerType.GUEST;  
    }

    public String getEmail() {
        return email;
    }public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public long getUserId() {
        return userId;
    }public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }public void setPassword(String password) {
        this.password = password;
    }

    public PlayerType getPlayertype() {
        return playertype;
    }
    public void setPlayertype(PlayerType playertype) {
        this.playertype = playertype;
    }
}

package de.hs_rm.backend.gamelogic.characters.players;
/*
 * Die Player Klasse umfasst alle Eigenschaften zum Login und Regestrierungen. 
 * Dabei können sich Gastspieler mit einem Namen(unique) und deren ID ist immer 0 
 * währendem Spieler die sich regestrieren möchten sich richtig verifizieren müssen 
 * mit Email und Passwort. 
 * --> Unterschieden werden beide Spieler durch einen Enum 
 *  
 */
public class Player{
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY) // automatische ID-Generierung
    private long userId; 
    private String name; 
    private String email; 
    private String password; 
    PlayerType playertype; 
    
    // No-args constructor for Jackson
    public Player() {
        
    }

    //Konstruktor für regestrierte Player
    public Player(long userId, String name, String email, String password){
        this.userId=userId; 
        this.name=name; 
        this.email=email; 
        this.password=password; 
        this.playertype=PlayerType.REGISTERED; 

    }

    //Konstruktor für Gastspieler 
    public Player(String name){
        this.userId=0; 
        this.name=name; 
        this.playertype=PlayerType.GUEST;  
    }

    //Getter und Setter
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

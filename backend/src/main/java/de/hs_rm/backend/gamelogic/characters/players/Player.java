package de.hs_rm.backend.gamelogic.characters.players;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import com.fasterxml.jackson.annotation.JsonIgnore; // Korrektes Import für JsonIgnore
/*
 * Die Player Klasse umfasst alle Eigenschaften zum Login und Regestrierungen. 
 * Dabei können sich Gastspieler mit einem Namen(unique) und deren ID ist immer 0 
 * währendem Spieler die sich regestrieren möchten sich richtig verifizieren müssen 
 * mit Email und Passwort. 
 * --> Unterschieden werden beide Spieler durch einen Enum 
 *  
 */

import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;

public class Player{
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY) // automatische ID-Generierung
    private String name; 
    private String email;

    private boolean isGamemaster;

    //Character Objekt 
    private Character character;

    public Character getCharacter() {
        return character;
    }

    public void setCharacter(Character character) {
        this.character = character;
    }

    //Dadurch das wir das Passwort während der Ausgabe also von backend zu Frontend eigentlich verbergen möchten
    //Die Ausgabe erfolgt über ein Json-Format 
    @JsonIgnore 
    private String password; 

    PlayerType playertype; 
    private PlayerRole playerrole;
    

    // No-args constructor for Jackson
    public Player() {
        
    }

    //Konstruktor für regestrierte Player
    public Player(String name, String email, String password){
        this.name=name; 
        this.email=email; 
        this.password=password; 
        this.playertype=PlayerType.REGISTERED; 

    }

    //Konstruktor für Gastspieler 
    public Player(String name){
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

    public PlayerRole getPlayerrole() {
        return playerrole;
    }

    public void setPlayerrole(PlayerRole playerrole) {
        this.playerrole = playerrole;
        System.out.println("PlayerRole ist jetzt:" + this.playerrole);
    }

    public boolean isGamemaster() {
        return isGamemaster;
    }

    public void setGamemaster(boolean isGamemaster) {
        this.isGamemaster = isGamemaster;
    }

    
}

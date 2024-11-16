package de.hs_rm.backend.entities;

import de.hs_rm.backend.entities.Map;
import de.hs_rm.backend.entities.Chicken;
import de.hs_rm.backend.entities.Gamemaster;
import de.hs_rm.backend.entities.Player;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Game {
    @Id
    @GeneratedValue
    private long id;

    List<Player> players;
    List<Chicken> chickens;
    Gamemaster<Player> gamemaster;
    boolean started;
    Map map; 


    public Game(Gamemaster<Player> gamemaster, Map map) {
        this.players = new ArrayList<>();         
        this.chickens = new ArrayList<>();         
        this.gamemaster = gamemaster;              
        this.started = false;                     
        this.map =  new Map();                           
    }

    private void start(){
        this.started = true;
        System.out.print("started: "+this.started);
    }

    private void end(){
        this.started = false;
        System.out.print("started: "+this.started);
    }

    private String kick(long playerId){ 
        for (Player player : players) {
            if (player.getId() == playerId) {   
                players.remove(player);
                return "Player " + player + " has been kicked.";
            }
        }
        return "Player with ID " + playerId + " not found.";
    }

    private void setChicken(int total){ 
        System.out.print("total Chicken: "+total);
        // TODO: Implementierung für hinzufügen von Hühnern
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public List<Chicken> getChickens() {
        return chickens;
    }

    public void setChickens(List<Chicken> chickens) {
        this.chickens = chickens;
    }

    public Gamemaster<Player> getGamemaster() {
        return gamemaster;
    }

    public void setGamemaster(Gamemaster<Player> gamemaster) {
        this.gamemaster = gamemaster;
    }

    public boolean isStarted() {
        return started;
    }

    public void setStarted(boolean started) {
        this.started = started;
    }

    public Map getMap() {
        return map;
    }

    public void setMap(Map map) {
        this.map = map;
    }
}

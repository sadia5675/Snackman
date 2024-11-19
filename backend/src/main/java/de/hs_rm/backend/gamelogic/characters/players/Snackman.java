package de.hs_rm.backend.gamelogic.characters.players;

import java.util.ArrayList;
import java.util.List;

/*
 * Die Snackman Klasse erbt von der Charackter Klasse.
 */
public class Snackman extends Character {
    //Initialisierung
    private int life; 
    private double nutriscore; 
    private List <Item> items;

    public Snackman(long id, String name, String gameId, double playerSpeed, PlayerPosition playerposition, int life,double nutriscore){
        super(id,name,gameId,playerSpeed,playerposition);
        this.life=life; 
        this.nutriscore=nutriscore; 
        this.items=new ArrayList<>(); 
    }

    //Getter und Setter
    public List<Item> getItems() {
        return items;
    }
    public void setItems(List<Item> items) {
        this.items = items;
    }

    public int getLife() {
        return life;
    }
    public void setLife(int life) {
        this.life = life;
    }

    public double getNutriscore() {
        return nutriscore;
    }
    public void setNutriscore(double nutriscore) {
        this.nutriscore = nutriscore;
    }

     //abstrakte Methode zum fortbewegen--> Logik fehlt noch
    @Override
    public PlayerPosition move(){
        System.out.println("Snackman is moving");
        return null; 
    }

    //abstrakte Methode um bestimmte Items in einer Liste vom Typ Item zu sammeln
    @Override
    public void pickUpItem(Item item){
        items.add(item); 
        System.out.println(item + "was successfully added to the list");
    }
    

    public double increaseNutriScore(double amount){
        this.nutriscore += amount; 
        return this.nutriscore; 
    }

    //Methode zum Verhhalten nachdem man erwicht worden ist  
    public void caught (){
        this.life--; 
        if(this.life <= 0 ){
            System.out.println("Snackman has been caught and has no more lives.");
        }
    }
}
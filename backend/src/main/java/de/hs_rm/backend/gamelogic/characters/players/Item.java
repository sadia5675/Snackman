package de.hs_rm.backend.gamelogic.characters.players;
//Diese Klasse beinhaltet besondere Eigenschaften bzw. Items die im Spiel gesammelt werden können
public class Item {
    //Initialisierung
    private String name; 
    private PlayerPosition playerPosition; 

    public Item(String name, PlayerPosition playerPosition){
        this.name= name; 
        this.playerPosition=playerPosition; 
    }
    //Beschreibung der eigenschaften
    private void effect(){
        System.out.println("This Item is special");
    }
}

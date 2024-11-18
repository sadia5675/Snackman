package de.hs_rm.backend.gamelogic.characters.players;
//
public class Item {
    private String name; 
    private PlayerPosition playerPosition; 

    public Item(String name, PlayerPosition playerPosition){
        this.name= name; 
        this.playerPosition=playerPosition; 
    }

    private void effect(){
        System.out.println("This Item is special");
    }
}

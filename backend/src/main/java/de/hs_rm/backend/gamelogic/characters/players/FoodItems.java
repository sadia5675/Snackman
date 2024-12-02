package de.hs_rm.backend.gamelogic.characters.players;

    public class FoodItems extends  Item {
        private NutriScore nutriScore;
       
       public FoodItems(String name, int x, int y, NutriScore nutriScore) {
               super(name, x, y);
               this.nutriScore = nutriScore;
        }

       public NutriScore getNutriScore() {
               return nutriScore;
           }

       //TODO: muss noch gemacht werden
           @Override
           public void applyEffect(Player player) {
           //System.out.println("Effect applied from object: " + getName() + " - " + effectDescription);
           }       
    
}

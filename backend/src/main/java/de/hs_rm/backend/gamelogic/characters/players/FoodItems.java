package de.hs_rm.backend.gamelogic.characters.players;

    public class FoodItems extends  Item {
        private NutriScore nutriScore;
       
        // erstmal sie FoodItems für Snackman
       public FoodItems(String name, int x, int y, NutriScore nutriScore) {
               super(name, x, y, PlayerRole.SNACKMAN);
               this.nutriScore = nutriScore;
        }

       public NutriScore getNutriScore() {
               return nutriScore;
           }

    public char getSymbol() {
        return switch (this.getNutriScore()) {
            case A -> 'A';
            case B -> 'B';
            case C -> 'C';
            case D -> 'D';
            case E -> 'E';
            default -> '?';
        };
    }

       //TODO: muss noch gemacht werden
           @Override
           public void applyEffect(Player player) {
           //System.out.println("Effect applied from object: " + getName() + " - " + effectDescription);
           }       
    
}

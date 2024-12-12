package de.hs_rm.backend.gamelogic.characters.players;

public class ObjectsItems extends  Item {
    private String effectDescription;

        // erstmal sei ObjectsItem für Snackman
        public ObjectsItems(String name, int x, int y, String effectDescription) {
            super(name, x, y, PlayerRole.SNACKMAN);
            this.effectDescription = effectDescription;
        }
        
        public String getEffectDescription() {
            return effectDescription;
        }

        public void setEffectDescription(String effectDescription) {
            this.effectDescription = effectDescription;
        }

     //TODO: muss noch gemacht werden
        @Override
        public void applyEffect(Player player) {
        //System.out.println("Effect applied from object: " + getName() + " - " + effectDescription);
            // Zusätzliche Logik für spezifische Effekte könnte hier implementiert werden.
        }
}

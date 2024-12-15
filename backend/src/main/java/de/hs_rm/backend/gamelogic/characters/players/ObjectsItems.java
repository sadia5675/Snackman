package de.hs_rm.backend.gamelogic.characters.players;

public abstract class ObjectsItems extends  Item {
    private String effectDescription;

        public ObjectsItems(String name, int x, int y, PlayerRole playerRole, String effectDescription) {
            super(name, x, y,  playerRole);
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
        public abstract void applyEffect(Player player);
}

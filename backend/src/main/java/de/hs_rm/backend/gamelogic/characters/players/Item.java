package de.hs_rm.backend.gamelogic.characters.players;
//Diese Klasse beinhaltet besondere Eigenschaften bzw. Items die im Spiel gesammelt werden können
public abstract class  Item {
    private String name;
        private int x;
        private int y;

        private PlayerRole type; //für wenn ist das Item, für Snackman oder für Geist

        public Item(String name, int x, int y, PlayerRole type) {
            this.name = name;
            this.x= x;
            this.y=y;
        }
    
        public String getName() {
            return name;
        }
    
        public void setName(String name) {
            this.name = name;
        }
    
        public int getX() {
            return x;
        }
    
        public void setX( int x) {
            this.x = x;
        }
    
        public int getY() {
            return y;
        }
    
        public void setY( int y) {
            this.y = y;
        }

        // Abstrakte Methode für spezifische Effekte
        public abstract void applyEffect(Player player);

        public PlayerRole getType() {
            return type;
        }

        public void setType(PlayerRole type) {
            this.type = type;
        }
    }


    

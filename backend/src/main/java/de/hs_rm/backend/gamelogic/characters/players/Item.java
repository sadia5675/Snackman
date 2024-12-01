package de.hs_rm.backend.gamelogic.characters.players;
//Diese Klasse beinhaltet besondere Eigenschaften bzw. Items die im Spiel gesammelt werden können
public abstract class  Item {
    private String name;
        private int x;
        private int y;

        public Item(String name, int x, int y) {
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
    }
    

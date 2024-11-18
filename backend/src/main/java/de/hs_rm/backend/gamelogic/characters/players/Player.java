package de.hs_rm.backend.gamelogic.characters.players;

public class Player {
    private String uniqueName;

    public String getUniqueName() {
        return uniqueName;
    }

    public void setUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
    }

    public Player(String uniqueName) {
        this.uniqueName = uniqueName;
    }
}
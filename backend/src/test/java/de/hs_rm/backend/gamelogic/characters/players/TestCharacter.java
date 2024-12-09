
package de.hs_rm.backend.gamelogic.characters.players;


// für class CharacterTest
public class TestCharacter extends Character {

    public TestCharacter(double speed, int posX, int posY) {
        super(speed, posX, posY);
    }

    @Override
    public PlayerPosition move() {
        // TODO Auto-generated method stub
        return new PlayerPosition(getPosX() + 1, getPosY() + 1);
    }
}

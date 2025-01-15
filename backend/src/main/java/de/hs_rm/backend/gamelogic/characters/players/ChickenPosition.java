package de.hs_rm.backend.gamelogic.characters.players;
import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.characters.players.Egg;
import de.hs_rm.backend.gamelogic.characters.players.FoodItems;
import de.hs_rm.backend.api.ChickenEnvironmentApi;
import java.util.List;

public class ChickenPosition {

    private int posX;
    private int posY;
    private String id;
    private int angle;
    private List<Egg> eggList;

    public ChickenPosition(String id, int posX, int posY, int angle, List<Egg> eggList){
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.angle = angle;
        this.eggList = eggList;
    }

    public int getPosX() {
        return posX;
    }
    public void setPosX(int posX) {
        this.posX = posX;
    }
    public int getPosY() {
        return posY;
    }
    public void setPosY(int posY) {
        this.posY = posY;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public int getAngle() {
        return angle;
    }

    public void setAngle(int angle) {
        this.angle = angle;
    }

    public List<Egg> getEggList() {
        return eggList;
    }

    public void setEggList(List<Egg> eggList) {
        this.eggList = eggList;
    }
    
}

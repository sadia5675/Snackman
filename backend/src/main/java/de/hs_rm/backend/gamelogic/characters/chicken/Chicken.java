package de.hs_rm.backend.gamelogic.characters.chicken;
import java.util.ArrayList;
import java.util.List;

import org.python.util.PythonInterpreter;
import org.springframework.beans.factory.annotation.Value;

import de.hs_rm.backend.gamelogic.characters.players.Egg;
import de.hs_rm.backend.gamelogic.characters.players.FoodItems;
import de.hs_rm.backend.gamelogic.map.PlayMap;

public class Chicken {
    private int posX;
    private int posY;
    private String behaviorScript;
    private List<Egg> eggList;
    private int currentCalorie;

    @Value("${egg.caloriesbonus}")
    private int CALORIESBONUS_EGG;

    public Chicken(int posX, int posY, String behaviorScript) {
        this.posX = posX;
        this.posY = posY;
        this.behaviorScript = behaviorScript;
                
        this.eggList = new ArrayList<>();
        this.currentCalorie =0;
    }

    public Egg eatSnack(FoodItems item, int posX, int posY){
        this.currentCalorie += item.getNutriScore().getCalorieBonus();
        if(this.currentCalorie>= this.CALORIESBONUS_EGG){
            this.currentCalorie = this.currentCalorie - this.CALORIESBONUS_EGG;
            Egg newEgg = new Egg(posX,posY);
            this.eggList.add(newEgg);
            return newEgg;
        }
            return null;

    }

      public void executeBehavior(PlayMap playMap) {
        /*try (PythonInterpreter pyInterp = new PythonInterpreter()) {
            // Skript laden
            pyInterp.execfile(behaviorScript);

            // Python-Variablen setzen
            pyInterp.set("posX", posX);
            pyInterp.set("posY", posY);
            pyInterp.set("playMap", playMap);

            // Hier die Methoden aufrufen der ChickenBotMovement.py

            
        } catch (Exception e) {
            e.printStackTrace();
        }*/
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

    public String getBehaviorScript() {
        return behaviorScript;
    }

    public void setBehaviorScript(String behaviorScript) {
        this.behaviorScript = behaviorScript;
    }

    public List<Egg> getEggList() {
        return eggList;
    }

    public void setEggList(List<Egg> eggList) {
        this.eggList = eggList;
    }

    public int getCurrentCalorie() {
        return currentCalorie;
    }

    public void setCurrentCalorie(int currentCalorie) {
        this.currentCalorie = currentCalorie;
    }
    
    
}

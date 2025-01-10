package de.hs_rm.backend.gamelogic.characters.chicken;
import org.python.util.PythonInterpreter;
import de.hs_rm.backend.gamelogic.map.PlayMap;

public class Chicken {
    private int posX;
    private int posY;
    private String behaviorScript;

    public Chicken(int posX, int posY, String behaviorScript) {
        this.posX = posX;
        this.posY = posY;
        this.behaviorScript = behaviorScript;
    }


      public void executeBehavior(PlayMap playMap) {
        try (PythonInterpreter pyInterp = new PythonInterpreter()) {
            // Skript laden
            pyInterp.execfile(behaviorScript);

            // Python-Variablen setzen
            pyInterp.set("posX", posX);
            pyInterp.set("posY", posY);
            pyInterp.set("playMap", playMap);

            // Hier die Methoden aufrufen der ChickenBotMovement.py

            
        } catch (Exception e) {
            e.printStackTrace();
        }
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
    
}

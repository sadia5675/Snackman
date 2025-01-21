package de.hs_rm.backend.gamelogic.characters.chicken;
import java.io.File;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Properties;
import java.util.List;

import org.python.util.PythonInterpreter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonProperty;

import de.hs_rm.backend.api.ChickenEnvironmentApi;
import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.characters.players.Egg;
import de.hs_rm.backend.gamelogic.characters.players.FoodItems;



public class Chicken {
    private int posX;
    private int posY;
    private int angle;
    private String id;
    private Path script_path;
    private List<Egg> eggList;
    private int currentCalorie;
    private static final Logger LOGGER = LoggerFactory.getLogger(Chicken.class);
    private PythonInterpreter pyInterpreter;
    private ChickenEnvironmentApi environmentApi;


    @Value("${egg.caloriesbonus}")
    private int CALORIESBONUS_EGG;

    public Chicken(int posX, int posY, Path behaviorScript, Game game, String id) {
        this.posX = posX;
        this.posY = posY;
        this.id = id;
        this.script_path = behaviorScript;
                
        this.eggList = new ArrayList<>();
        this.currentCalorie =0;

        Properties p = new Properties();
        p.setProperty("python.import.site", "false");
        PythonInterpreter.initialize(System.getProperties(), p, new String[] {});
        this.pyInterpreter = new PythonInterpreter();

        this.environmentApi = new ChickenEnvironmentApi(game);
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

    public void executeBehavior() {
        LOGGER.info("executeBehavior() aufgerufen");
        try {
            File scriptFile = new File(script_path.toString());

            if (scriptFile.exists()) {
                LOGGER.info("Starte Python Skript...");
                pyInterpreter.set("chicken", this);
                // pyInterpreter.set("environment", environmentApi.getEnvironment(posX, posY, game));
                pyInterpreter.set("environment", environmentApi);

                pyInterpreter.execfile(scriptFile.getAbsolutePath());
                LOGGER.info("Python Skript erfolgreich gestartet");
            } else {

                LOGGER.error("Python Skript konnte nicht gestartet werden: " + scriptFile.getAbsolutePath());
            }
        } catch (Exception e) {
            e.printStackTrace();

        }

        LOGGER.info("run_auto() aufgerufen");
        pyInterpreter.exec("run_auto()");

    }

    public void stopBehavior() {
        LOGGER.info("stopBehavior() aufgerufen");
        pyInterpreter.exec("stop()");
    }

    public void move(int x, int y, int angle) {
        this.posX = x;
        this.posY = y;
        this.angle = angle;
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
    public void setAngle(int angle) {
        this.angle = angle;
    }
    public int getAngle() {
        return angle;
    }
    public void setId(String id) {
        this.id = id;
    }

    public Path getBehaviorScript() {
        return script_path;
    }

    public void setBehaviorScript(Path behaviorScript) {
        this.script_path = behaviorScript;
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

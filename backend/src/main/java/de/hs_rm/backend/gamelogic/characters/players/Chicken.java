package de.hs_rm.backend.gamelogic.characters.players;

import java.io.File;
import java.util.Arrays;

import org.python.util.PythonInterpreter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import de.hs_rm.backend.api.ChickenEnvironmentApi;
import de.hs_rm.backend.gamelogic.Game;
import jakarta.annotation.PreDestroy;

public class Chicken {
    private static final Logger LOGGER = LoggerFactory.getLogger(Chicken.class);
    private int posX;
    private int posY;
    private String script_path;
    private PythonInterpreter pyInterpreter;
    private Game game;

    @Autowired
    private ChickenEnvironmentApi environmentApi;

    public Chicken(int posX, int posY, String script_path, Game game) {
        this.posX = posX;
        this.posY = posY;
        this.script_path = script_path;
        this.pyInterpreter = new PythonInterpreter();
        this.game = game;
        

    }

    public void executeBehavior() {
        LOGGER.info("executeBehavior() aufgerufen");
        try {
            // ToDo Aron: script_path ist nur zu Testzwecken hier bis entsprechende Umgebungsvariablen in application.properties und ordner außerhalb src erneut implementiert sind!
            File scriptFile = new File(script_path);

            if (scriptFile.exists()) {
                LOGGER.info("Starte Python Skript...");
                pyInterpreter.set("chicken", this);
                pyInterpreter.set("environment", environmentApi.getEnvironment(posX, posY, game));
                pyInterpreter.execfile(scriptFile.getAbsolutePath());
                LOGGER.info("Python Skript erfolgreich gestartet");
            } else {

                LOGGER.error("Python Skript konnte nicht gestartet werden: " + scriptFile.getAbsolutePath());
            }
        } catch (Exception e) {
            e.printStackTrace();
            
        }

        
        pyInterpreter.exec("run_auto()");

    }


    public void move(int x, int y) {
        this.posX = x;
        this.posY = y;
    }

    public String getScript_path() {
        return script_path;
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

    @PreDestroy
    public void cleanup() {
        if (pyInterpreter != null) {
            pyInterpreter.close();
            LOGGER.info("Python Interpreter geschlossen");
        } else {
            LOGGER.warn("Python Interpreter doesnt exist");
        }
    }

}

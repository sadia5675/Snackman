package de.hs_rm.backend.gamelogic.characters.players;

import java.io.File;

import org.python.util.PythonInterpreter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.annotation.PreDestroy;

public class Chicken {
    private static final Logger LOGGER = LoggerFactory.getLogger(Chicken.class);
    private int posX;
    private int posY;
    private String script_path;
    private PythonInterpreter pyInterpreter;

    public Chicken(int posX, int posY, String script_path) {
        this.posX = posX;
        this.posY = posY;
        this.script_path = script_path;
        this.pyInterpreter = new PythonInterpreter();
        

    }

    public void executeBehavior() {
        LOGGER.info("executeBehavior() aufgerufen");
        try {
            // ToDo Aron: script_path ist nur zu Testzwecken hier.
            File scriptFile = new File(script_path);

            if (scriptFile.exists()) {
                LOGGER.info("Starte Python Skript...");
                pyInterpreter.set("chicken", this);
                // ToDo Aron: environment ist noch nicht implementiert
                // pyInterpreter.set("environment", null);
                pyInterpreter.execfile(scriptFile.getAbsolutePath());
                LOGGER.info("Python Skript erfolgreich gestartet");
            } else {

                LOGGER.error("Python Skript konnte nicht gestartet werden: " + scriptFile.getAbsolutePath());
            }
        } catch (Exception e) {
            e.printStackTrace();
            
        }

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

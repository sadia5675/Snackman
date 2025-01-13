package de.hs_rm.backend.gamelogic.characters.players;

import java.io.File;
import java.nio.file.Path;
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
    private Path script_path;
    private PythonInterpreter pyInterpreter;
    private Game game;

    // @Autowired
    // private ChickenEnvironmentApi environmentApi;
    private ChickenEnvironmentApi environmentApi;

    public Chicken(int posX, int posY, Path testPathForScript, Game game) {
        this.posX = posX;
        this.posY = posY;
        this.script_path = testPathForScript;
        this.pyInterpreter = new PythonInterpreter();
        this.game = game;
       
        this.environmentApi = new ChickenEnvironmentApi(game);



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

        LOGGER.error("run_auto() aufgerufen");
        pyInterpreter.exec("run_auto()");

    }




    public void move(int x, int y) {
        this.posX = x;
        this.posY = y;
    }

    public Path getScript_path() {
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

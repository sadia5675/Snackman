package de.hs_rm.backend.gamelogic.characters.players;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SnackmanObjectItem extends ObjectsItems {

    private static final Logger logger = LoggerFactory.getLogger(SnackmanObjectItem.class);

    public SnackmanObjectItem(String name, int x, int y, String effectDescription) {
        super(name, x, y, PlayerRole.SNACKMAN, effectDescription);
    }

    @Override
    public void applyEffect(Player player) {
        logger.info("Snackman-specific effect applied: {}", getEffectDescription());
    }
    
}

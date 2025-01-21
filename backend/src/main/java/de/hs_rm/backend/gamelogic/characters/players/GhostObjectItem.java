package de.hs_rm.backend.gamelogic.characters.players;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class GhostObjectItem extends ObjectsItems {

    private static final Logger LOGGER = LoggerFactory.getLogger(GhostObjectItem.class);

    public GhostObjectItem(String name, int x, int y, String effectDescription) {
        super(name, x, y, PlayerRole.GHOST, effectDescription);
    }

    @Override
    public void applyEffect(Player player) {
        LOGGER.info("Ghost-specific effect applied: {}",  getEffectDescription());
    }
    
}

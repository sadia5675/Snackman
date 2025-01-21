package de.hs_rm.backend.gamelogic;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import de.hs_rm.backend.gamelogic.characters.chicken.Chicken;
import de.hs_rm.backend.gamelogic.characters.players.ChickenPosition;
import de.hs_rm.backend.messaging.GameMessagingService;

@Service
public class ChickenService {
    
    private GameService gameService;
    private final GameMessagingService gameMessagingService;
    private static final Logger LOGGER = LoggerFactory.getLogger(ChickenService.class);
    
    public ChickenService(GameService gameService, GameMessagingService gameMessagingService) {
            this.gameService = gameService;
            this.gameMessagingService = gameMessagingService;
    }

    @Scheduled(fixedRate = 500)
    public void sendChickenPositions() {
        for (Game game : gameService.getGameList()) {
            if (!game.isStarted()) {
                continue;
            }
            List<ChickenPosition> chickenPositions = getChickenPositions(game);
            gameMessagingService.sendNewChickenPosition(game.getId(), chickenPositions);
        }
    }

    private List<ChickenPosition> getChickenPositions(Game game) {
        List<ChickenPosition> positions = new ArrayList<>();
        for (int i = 0; i < game.getChickens().size(); i++) {
            Chicken chicken = game.getChickens().get(i);
            ChickenPosition newChicken = new ChickenPosition(chicken.getId(), chicken.getPosX(), chicken.getPosY(),chicken.getAngle(),chicken.getEggList(),chicken.getCurrentCalorie());
            // LOGGER.info("chicken id ist --> " + newChicken.getId());
            positions.add(newChicken);
        }
        
        return positions;
    }

}

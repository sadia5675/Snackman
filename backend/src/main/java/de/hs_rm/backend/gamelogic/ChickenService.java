package de.hs_rm.backend.gamelogic;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import de.hs_rm.backend.gamelogic.characters.players.Chicken;
import de.hs_rm.backend.messaging.GameMessagingService;

@Service
public class ChickenService {
    
    private GameService gameService;
    private final GameMessagingService gameMessagingService;
    
        public ChickenService(GameService gameService, GameMessagingService gameMessagingService) {
            this.gameService = gameService;
            this.gameMessagingService = gameMessagingService;
    }

    @Scheduled(fixedRate = 50)
    public void sendChickenPositions() {
        for (Game game : gameService.getGameList()) {
            Map<String, Object> chickenPositions = getChickenPositions(game);
            gameMessagingService.sendNewChickenPosition(game.getId(), chickenPositions);
        }
    }

    private Map<String, Object> getChickenPositions(Game game) {
        Map<String, Object> positions = new HashMap<>();
        for (int i = 0; i < game.getChickens().size(); i++) {
            Chicken chicken = game.getChickens().get(i);
            Map<String, Integer> chickenPosition = new HashMap<>();
            chickenPosition.put("posX", chicken.getPosX());
            chickenPosition.put("posY", chicken.getPosY());
            positions.put("chicken_" + i, chickenPosition);
        }
        return positions;
    }

}

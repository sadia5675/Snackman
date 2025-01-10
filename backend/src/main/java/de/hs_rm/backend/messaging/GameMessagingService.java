package de.hs_rm.backend.messaging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import org.springframework.stereotype.Service;

@Service
public class GameMessagingService {

    Logger logger = LoggerFactory.getLogger(GameMessagingService.class);

    private final SimpMessagingTemplate template;

    public GameMessagingService(SimpMessagingTemplate template) {
        this.template = template;
    }

    public void sendPositionValidation(String lobbyid, Object position){
        logger.info("Sending Validation");
        template.convertAndSend("/topic/ingame/"+ lobbyid, position);
    }

    public void sendPlayerList(String lobbyid, Object ev) {
        template.convertAndSend("/topic/game/" + lobbyid, ev);
    }

    public void sendNewCharacterPosition(String lobbyid, Object position){
        logger.info("Sending playerPositions");
        template.convertAndSend("/topic/ingame/playerPositions/" + lobbyid, position);
    }

    public void sendGameStart(String lobbyid, Object gameState){
        template.convertAndSend("/topic/game/" + lobbyid, gameState);
    }

    // ToDo Aron
    // Chicken Daten ans Frontend schicken
    // public void sendNewChickenPosition(String gameId, Object positionChicken) {
    //     logger.info("Sending chicken position");
    //     template.convertAndSend("/topic/ingame/chickenPosition/{gameId}");
    // }
}

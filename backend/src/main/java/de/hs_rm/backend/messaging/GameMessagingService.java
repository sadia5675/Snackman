package de.hs_rm.backend.messaging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import org.springframework.stereotype.Service;

@Service
public class GameMessagingService {

    private static final Logger LOGGER = LoggerFactory.getLogger(GameMessagingService.class);

    private final SimpMessagingTemplate template;

    public GameMessagingService(SimpMessagingTemplate template) {
        this.template = template;
    }

    public void sendPositionValidation(String lobbyid, Object position){
        // LOGGER.info("Sending Validation");
        template.convertAndSend("/topic/ingame/"+ lobbyid, position);
    }

    public void sendPlayerList(String lobbyid, Object ev) {
        template.convertAndSend("/topic/game/" + lobbyid, ev);
    }

    public void sendPlayerLeave(String lobbyid, Object res){
        template.convertAndSend("/topic/game/" + lobbyid, res);
    }

    public void sendNewCharacterPosition(String lobbyid, Object position){
        // LOGGER.info("Sending playerPositions");
        template.convertAndSend("/topic/ingame/playerPositions/" + lobbyid, position);
    }

    public void sendGameStart(String lobbyid, Object gameState){
        template.convertAndSend("/topic/game/" + lobbyid, gameState);
    }

    public void sendItemUpdate(String lobbyid, Object itemUpdate) {
        // LOGGER.info("Sending item update to lobby {}: {}", lobbyid, itemUpdate);
        template.convertAndSend("/topic/ingame/" + lobbyid + "/itemUpdates", itemUpdate);
    }

    public void sendEggUpdate(String lobbyid, Object eggUpdate) {
        // LOGGER.info("Sending egg update to lobby {}: {}", lobbyid, eggUpdate);
        template.convertAndSend("/topic/ingame/" + lobbyid + "/chicken/eggUpdate", eggUpdate);
    }

    public void sendThemeUpdate(String lobbyid, Object themeData) {
        // LOGGER.info("Sending theme update");
        template.convertAndSend("/topic/game/" + lobbyid + "/theme", themeData);
    }

    public void sendMapUpdate (String lobbyid, Object mapData){
        // LOGGER.info("Sending map update");
        template.convertAndSend("/topic/game/" + lobbyid + "/map", mapData);
    }

    public void sendPlayerCollision(String lobbyid, Object collisionDetails) {
        // LOGGER.info("Sending player collision details");
        template.convertAndSend("/topic/ingame/PlayerKollision/" + lobbyid, collisionDetails);
    }

    public void sendNewChickenPosition(String lobyid, Object position){
        // LOGGER.info("Sending chickenPositions {}", position, "to lobby: {}", lobyid);
        template.convertAndSend("/topic/ingame/chickenPosition/" + lobyid, position);
    }
}

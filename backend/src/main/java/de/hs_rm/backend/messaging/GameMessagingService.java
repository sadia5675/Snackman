package de.hs_rm.backend.messaging;

import java.util.HashMap;

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
        //logger.info("Sending Validation");
        template.convertAndSend("/topic/ingame/"+ lobbyid, position);
    }

    public void sendPlayerList(String lobbyid, Object ev) {
        template.convertAndSend("/topic/game/" + lobbyid, ev);
    }

    public void sendNewCharacterPosition(String lobbyid, Object position){
        //logger.info("Sending playerPositions");
        template.convertAndSend("/topic/ingame/playerPositions/" + lobbyid, position);
    }

    public void sendGameStart(String lobbyid, Object gameState){
        template.convertAndSend("/topic/game/" + lobbyid, gameState);
    }

    public void sendItemUpdate(String lobbyid, Object itemUpdate) {
        //logger.info("Sending item update to lobby {}: {}", lobbyid, itemUpdate);
        template.convertAndSend("/topic/ingame/" + lobbyid + "/itemUpdates", itemUpdate);
    }


    // ToDo Aron
    // Chicken Daten ans Frontend schicken
    // public void sendNewChickenPosition(String gameId, Object positionChicken) {
    //     logger.info("Sending chicken position");
    //     template.convertAndSend("/topic/ingame/chickenPosition/{gameId}");
    // }
    public void sendThemeUpdate(String lobbyid, Object themeData) {
        logger.info("Sending theme update");
        template.convertAndSend("/topic/game/" + lobbyid + "/theme", themeData);
    }
    public void sendMapUpdate (String lobbyid, Object mapData){
        logger.info("Sending map update");
        template.convertAndSend("/topic/game/" + lobbyid + "/map", mapData);
    }

    public void sendPlayerCollision(String lobbyid, Object collisionDetails) {
        logger.info("Sending player collision details");
        template.convertAndSend("/topic/ingame/PlayerKollision/" + lobbyid, collisionDetails);
    }
}

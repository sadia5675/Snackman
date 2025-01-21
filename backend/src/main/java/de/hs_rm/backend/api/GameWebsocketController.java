package de.hs_rm.backend.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.messaging.GameMessagingService;

@Controller
public class GameWebsocketController {
    Game game;

    @Autowired
    GameMessagingService messagingService;

    private static final Logger LOGGER = LoggerFactory.getLogger(GameAPIController.class);

/*    @MessageMapping("/topic/game/{lobbyid}/join")
    @SendTo("/topic/game/{lobbyid}")
    public void joinLobby(Player player, @DestinationVariable String lobbyid) {
        messagingService.sendPlayerList(lobbyid, game.getPlayers());
        logger.info("PLAYER WURDE GEJOINED");
    }*/
}

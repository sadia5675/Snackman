package de.hs_rm.backend.api;

import org.springframework.web.bind.annotation.RestController;

import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.GameService;
import de.hs_rm.backend.messaging.GameMessagingService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/game/{lobbyid}/chickens")
public class ChickenController {

    @Autowired
    GameMessagingService messagingService;

    @Autowired
    GameService gameService;

    public ChickenController(GameService gameService, GameMessagingService messagingService) {
        this.gameService = gameService;
        this.messagingService = messagingService;






        
    }
}
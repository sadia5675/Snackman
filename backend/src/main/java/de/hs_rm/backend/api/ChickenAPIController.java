package de.hs_rm.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.GameService;
import de.hs_rm.backend.gamelogic.characters.players.Chicken;
import de.hs_rm.backend.gamelogic.map.PlayMap;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api/chicken")
public class ChickenAPIController {

    @Autowired
    GameService gameService;

    private static final Logger LOGGER = LoggerFactory.getLogger(PlayMap.class);

    // @GetMapping("/{gameId}/list")
    // public ResponseEntity<Map<String, Object>> getChickenList(@PathVariable String gameId) {
    //     Game existingGame = gameService.getGameById(gameId);

    //     return createOkResponseChicken(existingGame);
    // }
    
     private ResponseEntity<Map<String, Object>> createOkResponseChicken(Object list) {
        Map<String, Object> feedbackData = new HashMap<>();
        feedbackData.put("status", "ok");
        feedbackData.put("feedback", list);
        feedbackData.put("time", LocalDateTime.now().toString());
        return ResponseEntity.status(HttpStatus.OK).body(feedbackData);
    }

    
}

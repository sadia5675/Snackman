package de.hs_rm.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.characters.players.Player;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * REST controller for managing game-related operations.
 * Provides endpoints for creating, joining, starting, ending a game,
 * kicking users, setting game parameters, and checking game status.
 */
@RestController
@RequestMapping("/api/game")
public class GameAPIController {
    private Game game;

    // TODO: Sicherheit für Spiel, keys in responsebody
    // TODO: Was passiert wenn Fehler nicht hier sondern in Spiellogik (Game-Klasse) kommt

    // Method to create a new game
    @PostMapping("/create")
    public ResponseEntity<?> createGame(@RequestBody Player gamemasterFromFrontend) {
        //warte noch auf ticket #28
        Player gamemaster = new Player(gamemasterFromFrontend.getName());
        if (gamemasterFromFrontend == null || gamemasterFromFrontend.getName() == null) {
            return ResponseEntity.badRequest().body("Invalid gamemaster data");
        }
        game = new Game(gamemaster);        
        return createOkResponse();
    }
    // Method to join an existing game
    // @PostMapping("/join/{gameId}")
        // public ResponseEntity<?> joinGame(@PathVariable String gameId) {
        //     if (game == null || !game.getId().equals(gameId)) {
        //         return createErrorResponse("Game ID is invalid!");
        //     }
        //     // Logik zum Beitreten des Spiels
        //     return ResponseEntity.ok(game);
        // }

    // Method to start the game
    @PostMapping("/start")
    public ResponseEntity<?>  startGame() {
        if (game == null) {
            return createErrorResponse("No game found to start.");
        }
        game.start();
        return createOkResponse();
    }

    // Method to end the game
    @PostMapping("/end")
    public ResponseEntity<?> endGame() {
        if(game==null){
            return createErrorResponse("No game found to end.");
        }
        game.end();
        return createOkResponse();
    }
    
    // Method to kick a user from the game
    // soll username oder playerobj von frontend bekommen?
    @PostMapping("/kick/{usernameKicker}/{usernameKicked}") // soll username
    public ResponseEntity<?> kickUser(@PathVariable String usernameKicker, @PathVariable String usernameKicked) {
        if (game == null) {
            return createErrorResponse("No game found.");
        }
        if(game.kick(usernameKicker, usernameKicked)){
            return createOkResponse();
        }
        return createErrorResponse("can not kick "+ usernameKicked +"!");
                
    }

    @PostMapping("/addPlayer") // soll username
    public ResponseEntity<?> kickUser(@RequestBody Player playerFromFrontend) {
        if (game == null) {
            return createErrorResponse("No game found.");
        }
        Player player = new Player(playerFromFrontend.getName());
        if(game.addPlayer(player)){
            return createOkResponse();
        }

        return createErrorResponse("can not add "+ player.getName() +"!");
        
                
    }

    
    // Method to set the number of elements (e.g., chickens) in the game
    @PostMapping("/setChicken/{number}")
    public ResponseEntity<?> setNumberOfChicken(@PathVariable int number) {
        if (game == null) {
            return createErrorResponse("No game found.");
        }
        game.setChicken(number);
        return createOkResponse();
    }

    // Retrieve the game status
    @GetMapping("/status")
    public ResponseEntity<?> getGameStatus() {
        if (game == null) {
            return createErrorResponse("No game found.");
        }
        return createOkResponse();
    }

    // Helper method for standardized error response
    private ResponseEntity<Map<String, Object>> createErrorResponse(String feedbackMessage) {
        Map<String, Object> feedbackData = new HashMap<>();
        feedbackData.put("status", "error");
        feedbackData.put("feedback", feedbackMessage);
        feedbackData.put("time", LocalDateTime.now().toString());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(feedbackData);
    }
        // Helper method for standardized ok response
    private ResponseEntity<Map<String, Object>> createOkResponse() {
        Map<String, Object> feedbackData = new HashMap<>();
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String gameJSON;
        feedbackData.put("status", "ok");
        feedbackData.put("time", LocalDateTime.now().toString());
        try {
            gameJSON = ow.writeValueAsString(game);
            feedbackData.put("feedback", game);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            feedbackData.put("feedback", "something in backend went wrong!");
        }

        return ResponseEntity.status(HttpStatus.OK).body(feedbackData);
    }
}



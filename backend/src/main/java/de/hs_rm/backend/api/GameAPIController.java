package de.hs_rm.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
 
    // Method to create a new game
    @PostMapping("/create")
    public ResponseEntity<?> createGame() {
        if(game==null){
            game = new Game();
            return ResponseEntity.ok(game);
        }
        return createErrorResponse("A game exists already");
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
        return ResponseEntity.ok(game);
    }

    // Method to end the game
    @PostMapping("/end")
    public ResponseEntity<Game> endGame() {
        if(game==null){
            return createErrorResponse("No game found to end.");
        }
        game.end();
        return ResponseEntity.ok(game);
    }
    
    // Method to kick a user from the game
    @PostMapping("/kick/{userId}")
    public ResponseEntity<?> kickUser(@PathVariable String userId) {
        if (game == null) {
            return createErrorResponse("No game found.");
        }
        game.kick(userId);
        return ResponseEntity.ok(game);
    }

    
    // Method to set the number of elements (e.g., chickens) in the game
    @PostMapping("/setChicken/{number}")
    public ResponseEntity<?> setNumberOfChicken(@PathVariable int number) {
        if (game == null) {
            return createErrorResponse("No game found.");
        }
        game.setChickenCount(number);
        return ResponseEntity.ok(game);
    }

    // Retrieve the game status
    @GetMapping("/status")
    public ResponseEntity<?> getGameStatus() {
        if (game == null) {
            return createErrorResponse("No game found.");
        }
        return ResponseEntity.ok(game);
    }

    // Helper method for standardized error response
    private ResponseEntity<Map<String, Object>> createErrorResponse(String feedbackMessage) {
        Map<String, Object> feedbackData = new HashMap<>();
        feedbackData.put("status", "error");
        feedbackData.put("feedback", feedbackMessage);
        feedbackData.put("time", LocalDateTime.now().toString());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(feedbackData);
    }
}



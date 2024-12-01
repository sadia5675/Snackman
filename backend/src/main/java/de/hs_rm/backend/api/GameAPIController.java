package de.hs_rm.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import de.hs_rm.backend.exception.GameJoinException;
import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.GameService;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.map.PlayMap;
import de.hs_rm.backend.messaging.GameMessagingService;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * REST controller for managing game-related operations.
 * Provides endpoints for creating, joining, starting, ending a game,
 * kicking users, setting game parameters, and checking game status.
 */
@RestController
@RequestMapping("/api/game")
public class GameAPIController {

    @Autowired
    GameMessagingService messagingService;

    @Autowired
    GameService gameService;

    Logger logger = LoggerFactory.getLogger(GameAPIController.class);


    //private Game game;

    // TODO: Sicherheit für Spiel, keys in responsebody
    // TODO: Was passiert wenn Fehler nicht hier sondern in Spiellogik (Game-Klasse)
    // kommt

    // Method to create a new game
    @PostMapping("/create")
    public ResponseEntity<?> createGame(@RequestBody Player gamemasterFromFrontend) {
        // warte noch auf ticket #28
        if (gamemasterFromFrontend == null || gamemasterFromFrontend.getName() == null) {
            return ResponseEntity.badRequest().body("Invalid gamemaster data");
        }

        Player gamemaster = new Player(gamemasterFromFrontend.getName());
        gamemaster.setPlayerrole(PlayerRole.SNACKMAN);
        // #63 NEW: gameservice now creates game
        Game newGame = gameService.createGame(gamemaster);

        return createOkResponse(newGame);
    }
    // Method to join an existing game
    // @PostMapping("/join/{gameId}")
    // public ResponseEntity<?> joinGame(@PathVariable String gameId) {
    // if (game == null || !game.getId().equals(gameId)) {
    // return createErrorResponse("Game ID is invalid!");
    // }
    // // Logik zum Beitreten des Spiels
    // return ResponseEntity.ok(game);
    // }

    // Method to start the game
    @PostMapping("/start/{gameId}")
    public ResponseEntity<?> startGame(@PathVariable String gameId) {
        // #63 NEW: gameService now starts the game
        Game existingGame = gameService.startGame(gameId);

        if (existingGame == null) {
            return createErrorResponse("No game found to start.");
        }

        return createOkResponse(existingGame);
    }

    @MessageMapping("/topic/game/{lobbyid}/join")
    @SendTo("/topic/game/{lobbyid}")
    public void joinLobby(Player player, @DestinationVariable String lobbyid) {
        // #63 NEW: gameService now handles Player join
        HashMap<String,Object> response = new HashMap<>();

        try{
            Game existingGame = gameService.joinGame(lobbyid, player);
            logger.info("Player: {}, joined game: {}", player.getName(), lobbyid);

            response.put("feedback", existingGame.getPlayers());
            response.put("status", "ok");
            response.put("time", LocalDateTime.now().toString());

            messagingService.sendPlayerList(lobbyid, response);

        }catch(GameJoinException e){
            response.put("feedback", e.getMessage());
            response.put("status", "error");
            response.put("time", LocalDateTime.now().toString());

            messagingService.sendPlayerList(lobbyid, response);
        }
    }

    // Method to end the game
    @PostMapping("/end/{gameId}")
    public ResponseEntity<?> endGame(@PathVariable String gameId) {
        // #63 NEW: gameService now ends the game
        Game existingGame = gameService.endGame(gameId);

        if (existingGame == null) {
            return createErrorResponse("No game found to end.");
        }

        return createOkResponse(existingGame);
    }

    // Method to kick a user from the game
    // soll username oder playerobj von frontend bekommen?
    @PostMapping("/kick/{gameId}/{usernameKicker}/{usernameKicked}") // soll username
    public ResponseEntity<?> kickUser(@PathVariable String gameId ,@PathVariable String usernameKicker, @PathVariable String usernameKicked) {
        Game existingGame = gameService.getGameById(gameId);

        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }
        if(existingGame.kick(usernameKicker, usernameKicked)){
            return createOkResponse(existingGame);
        }
        return createErrorResponse("can not kick "+ usernameKicked +"!");
                
    }

    // Method to set the number of elements (e.g., chickens) in the game
    @PostMapping("/setChicken/{gameId}/{number}")
    public ResponseEntity<?> setNumberOfChicken(@PathVariable String gameId ,@PathVariable int number) {
        // #63 NEW: gameService now sets the number of Chickens
        Game existingGame = gameService.setChicken(gameId, number);

        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }

        return createOkResponse(existingGame);
    }

    // Retrieve the game status
    @GetMapping("/status/{gameId}")
    public ResponseEntity<?> getGameStatus(@PathVariable String gameId) {
        Game existingGame = gameService.getGameById(gameId);

        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }
        return createOkResponse(existingGame);
    }

    @PostMapping("/setRole/{gameId}")
    public ResponseEntity<?> setPlayerRole(@RequestBody Map<String, String> payload, @PathVariable String gameId) {
        Game existingGame = gameService.getGameById(gameId);

        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }

        // Extrahiere username und role aus der Anfrage
        String username = payload.get("username");
        String role = payload.get("role");

        if (username == null || role == null) {
            return createErrorResponse("Invalid payload: 'username' or 'role' is missing.");
        }

        Player player = existingGame.findPlayerByUsername(username);
        if (player == null) {
            return createErrorResponse("Player with username '" + username + "' not found.");
        }
        try {
            player.setPlayerrole(PlayerRole.valueOf(role.toUpperCase()));
        } catch (IllegalArgumentException e) {
            logger.error("Invalid player role: {}", role);

        }
        return createOkResponse(existingGame);
    }

    @PostMapping("/addPlayer/{gameId}")
    public ResponseEntity<?> kickUser(@RequestBody Player playerFromFrontend, @PathVariable String gameId) {
        Game existingGame = gameService.getGameById(gameId);
        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }
        Player player = new Player(playerFromFrontend.getName());
        if(existingGame.addPlayer(player)){
            return createOkResponse(existingGame);
        }

        return createErrorResponse("can not add "+ player.getName() +"!");
             
    }

    @GetMapping("/games")
    public ResponseEntity<Map<String, Object>> getMethodName() {
        Collection<?> gameList = gameService.getGameList();

        Map<String, Object> response = new HashMap<>();
        response.put("feedback", gameList);
        response.put("status", "ok");
        response.put("time", LocalDateTime.now().toString());

        return ResponseEntity.ok(response);
    }


    @PostMapping("/move/{gameId}/{username}/{coordinateX}/{coordinateY}")
    public ResponseEntity<?> movePlayer( @PathVariable String gameId, @PathVariable String username, @PathVariable int coordinateX, @PathVariable int coordinateY) {

        Game existingGame = gameService.getGameById(gameId);
        
        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }
        try {
            boolean success = gameService.move(username, coordinateX, coordinateY);
            if (success) {
                return createOkResponse(existingGame);
            } else {
                return ResponseEntity.badRequest().body("Failed to move player --> TileTyp is WALL.");
            }
        } catch (IllegalArgumentException e) {
            return createErrorResponse(e.getMessage());
        } catch (Exception e) {
            return createErrorResponse("An unexpected error occurred.");
        }
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
    private ResponseEntity<Map<String, Object>> createOkResponse(Game game) {
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
package de.hs_rm.backend.api;

import de.hs_rm.backend.exception.SetRoleException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import de.hs_rm.backend.exception.GameJoinException;
import de.hs_rm.backend.exception.GameLeaveException;
import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.GameService;
import de.hs_rm.backend.gamelogic.ChickenService;
import de.hs_rm.backend.gamelogic.characters.chicken.Chicken;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.PlayerPosition;
import de.hs_rm.backend.gamelogic.map.PlayMap;
import de.hs_rm.backend.gamelogic.map.PlayMapService;
import de.hs_rm.backend.messaging.GameMessagingService;
import de.hs_rm.backend.messaging.errorResponse.LeaveErrorResponse;
import de.hs_rm.backend.messaging.errorResponse.PlayerJoinErrorResponse;
import de.hs_rm.backend.messaging.response.CollisionValidationResponse;
import de.hs_rm.backend.messaging.response.EggcreatedResponse;
import de.hs_rm.backend.messaging.response.ItemCollectedResponse;
import de.hs_rm.backend.messaging.response.LeaveResponse;
import de.hs_rm.backend.messaging.response.PlayerJoinResponse;
import de.hs_rm.backend.messaging.response.PlayerMoveValidationResponse;
import de.hs_rm.backend.messaging.response.PlayerPositionResponse;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
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

    @Value("${scripts.dir}")
    private String scriptsDirectory;

    @Autowired
    GameMessagingService messagingService;

    @Autowired
    GameService gameService;

    @Autowired
    ChickenService chickenService;

    @Autowired
    PlayMapService playMapService;

    private static final Logger LOGGER = LoggerFactory.getLogger(GameAPIController.class);

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
        gamemaster.setGamemaster(true);
        gamemaster.setPlayerrole(PlayerRole.SNACKMAN);
        gamemaster.setPassword(gamemasterFromFrontend.getPassword());

        // Nur zu Testzwecken hier
        // PythonInterpreter interpreter = new PythonInterpreter();
        // try {
        //     String scriptPath = "chicken_bot_movement.py";

        // File scriptFile = new File(scriptsDirectory, scriptPath);

        // if (scriptFile.exists()) {
        // LOGGER.info("Starte Python Skript...");
        // interpreter.execfile(scriptsDirectory + "/" + scriptPath);
        // LOGGER.info("Python Skript erfolgreich gestartet");
        // } else {
        // LOGGER.error("Python Skript konnte nicht gestartet werden: " +
        // scriptFile.getAbsolutePath());
        // }
        // } catch (Exception e) {
        // e.printStackTrace();
        // }
        // #63 NEW: gameservice now creates game
        Game newGame = gameService.createGame(gamemaster);

        return createOkResponse(newGame);
    }

    // Method to start the game
    @PostMapping("/start/{gameId}")
    public ResponseEntity<?> startGame(@PathVariable String gameId, @RequestBody Map<String, Object> payload) {
        String selectedMap = (String) payload.get("selectedMap");
        int chickenNum = (Integer) payload.get("chickenNum");

        LOGGER.info("Starting game with ID: {} and selected map: {}", gameId, selectedMap);

        if (selectedMap == null || selectedMap.isEmpty()) {
            return createErrorResponse("Invalid request: 'selectedMap' is required.");
        }
        if (chickenNum == 0) {
            return createErrorResponse("Invalid request: 'chickenNum' is required.");
        }
        PlayMap playMap = playMapService.createPlayMap(selectedMap);
        // #63 NEW: gameService now starts the game
        Game existingGame = gameService.startGame(gameId, playMap, chickenNum);

        if (existingGame == null) {
            return createErrorResponse("No game found to start.");
        }

        //boolean success = gameService.startGame(gameId, playMap, chickenNum);
/*
        if (!success) {
            return createErrorResponse("Chicken nummbers in game is not fair");
        } */

        return createOkResponse(existingGame);
    }

    @PostMapping("/{lobbyId}/selectedTheme")
    public ResponseEntity<Map<String, String>> checkSelectedTheme(@PathVariable String lobbyId) {
        return ResponseEntity.ok(Map.of("selectedTheme", gameService.getSelectedTheme(lobbyId)));
    }

    @MessageMapping("/topic/game/{lobbyId}/setTheme")
    @SendTo("/topic/game/{lobbyId}")
    public Map<String, Object> setTheme(@DestinationVariable String lobbyId, @RequestBody Map<String, String> theme) {
        gameService.setSelectedTheme(lobbyId, theme.get("themeName"));
        messagingService.sendThemeUpdate(lobbyId, theme.get("themeName"));
        return Map.of(
                "type", "themeUpdate",
                "status", "ok",
                "feedback", theme.get("themeName")
        );
    }

    @MessageMapping("/topic/game/{lobbyId}/setMap")
    @SendTo("/topic/game/{lobbyId}")
    public Map<String, Object> setMap(
            @DestinationVariable String lobbyId,
            @RequestBody Map<String, String> map) {
        messagingService.sendMapUpdate(lobbyId, map.get("mapName"));
        return Map.of(
                "type", "mapUpdate",
                "status", "ok",
                "feedback", map.get("mapName")
        );
    }

    @MessageMapping("/topic/game/{lobbyid}/start/{selectedMapName}/{chickenNum}")
    @SendTo("/topic/game/{lobbyid}")
    public void startGameViaStomp(
            Player actingPlayer,
            @DestinationVariable String lobbyid,
            @DestinationVariable String selectedMapName,
            @DestinationVariable int chickenNum
    ) {
        HashMap<String, Object> response = new HashMap<>();

        try {
            if (selectedMapName == null || selectedMapName.isEmpty()) {
                response.put("type", "gameStart");
                response.put("feedback", null);
                response.put("status", "no map selected");

            } else {
                PlayMap playMap = playMapService.createPlayMap(selectedMapName);
                Game existingGame = gameService.startGame(lobbyid, playMap, chickenNum);

                LOGGER.info("Received chickenNum: {}", existingGame.getChickenNum());
                LOGGER.info("Chickens before initialization: {}", existingGame.getChickens());

                response.put("type", "gameStart");
                response.put("feedback", existingGame);
                response.put("status", "ok");

            }
        } catch (Exception e) {
            response.put("type", "gameStart");
            response.put("feedback", null);
            response.put("status", "Error: " + e.getMessage());
        }

        response.put("time", LocalDateTime.now().toString());
        messagingService.sendGameStart(lobbyid, response);
    }

    @MessageMapping("/topic/game/{lobbyid}/join")
    @SendTo("/topic/game/{lobbyid}")
    public void joinLobby(Player player, @DestinationVariable String lobbyid) {
        try {
            List<Player> existingPlayers = gameService.joinGame(lobbyid, player);

            if (existingPlayers == null) {
                PlayerJoinErrorResponse playerJoinErrorResponse = new PlayerJoinErrorResponse("playerJoin", "error", "Game Not Found!");
                messagingService.sendPlayerList(lobbyid, playerJoinErrorResponse);
                return;
            }

            PlayerJoinResponse playerJoinResponse = new PlayerJoinResponse("playerJoin", "ok", existingPlayers);
            messagingService.sendPlayerList(lobbyid, playerJoinResponse);

        } catch (GameJoinException e) {

            PlayerJoinErrorResponse playerJoinErrorResponse = new PlayerJoinErrorResponse("playerJoin", "error", e.getMessage());
            messagingService.sendPlayerList(lobbyid, playerJoinErrorResponse);
        }
    }

    @MessageMapping("/topic/game/{lobbyid}/leave")
    @SendTo("/topic/game/{lobbyid}")
    public void leaveLobby(Player player, @DestinationVariable String lobbyid) {

        try {
            // Spieler aus dem Spiel entfernen
            List<Player> players = gameService.leaveGame(lobbyid, player);
            LeaveResponse leaveResponse = new LeaveResponse("playerLeave", "ok", players);
            messagingService.sendPlayerLeave(lobbyid, leaveResponse);

        } catch (GameLeaveException e) {
            LeaveErrorResponse leaveErrorResponse = new LeaveErrorResponse("playerLeave", "error", e.getMessage());
            messagingService.sendPlayerLeave(lobbyid, leaveErrorResponse);
        }
    }

    @MessageMapping("/topic/ingame/{lobbyid}/playerPosition")
    public void moveCharacter(PlayerPosition position, @DestinationVariable String lobbyid) {
        boolean madeValidMove = gameService.move(lobbyid, position);

        if (madeValidMove) {

            String itemCollected = gameService.checkItemCollcted(lobbyid);
            if(itemCollected != null){
                ItemCollectedResponse itemCollectedResponse = new ItemCollectedResponse(itemCollected, position.getPosX(), position.getPosY());
                messagingService.sendItemUpdate(lobbyid, itemCollectedResponse);
            }

            int eggLayed = gameService.checkEggLayed(lobbyid);
            if (eggLayed != 0) {
                // LOGGER.info("Egg location: {} {} {} width {} height {}", gameService.getGameById(lobbyid).getPlaymap().getWidth() % eggLayed, (double) gameService.getGameById(lobbyid).getPlaymap().getWidth() / eggLayed, eggLayed, gameService.getGameById(lobbyid).getPlaymap().getWidth(), gameService.getGameById(lobbyid).getPlaymap().getHeight());
                EggcreatedResponse eggcreatedResponse = new EggcreatedResponse((int) eggLayed / gameService.getGameById(lobbyid).getPlaymap().getWidth(), eggLayed % gameService.getGameById(lobbyid).getPlaymap().getWidth());
                messagingService.sendEggUpdate(lobbyid, eggcreatedResponse);
            }

            // sende das die Validation in Ordnung war
            PlayerMoveValidationResponse playerMoveValidationResponse = new PlayerMoveValidationResponse(position);
            messagingService.sendPositionValidation(lobbyid, playerMoveValidationResponse);

            //Winner checken
            PlayerRole winnerRole = gameService.checkWinner(lobbyid);
            CollisionValidationResponse collisionValidationResponse = new CollisionValidationResponse(gameService.getCharacterListByGameId(lobbyid), winnerRole);
            messagingService.sendPlayerCollision(lobbyid, collisionValidationResponse);


            //senden der Liste von Chars
            PlayerPositionResponse playerPositionResponse = new PlayerPositionResponse(gameService.getCharactersByGameId(lobbyid));
            messagingService.sendNewCharacterPosition(lobbyid, playerPositionResponse);
        }

    }

    @PostMapping("/{gameId}/jumpAllowed")
    public ResponseEntity<Map<String, Boolean>> checkJumpAllowed(
            @PathVariable String gameId,
            @RequestBody Map<String, String> requestBody) {

        String playerName = requestBody.get("name");
        if (playerName == null || playerName.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(Map.of("jumpAllowed", false));
        }
        boolean isJumpAllowed = gameService.isJumpAllowed(gameId, playerName);

        return ResponseEntity.ok(Map.of("jumpAllowed", isJumpAllowed));
    }


    @MessageMapping("/topic/ingame/{lobbyid}/chickenPosition")
    @SendTo("/topic/ingame/{lobbyod}")
    public Map<String, Object> chickenPosition(@DestinationVariable String lobbyid) {

        Game existingGame = gameService.getGameById(lobbyid);
        List<Chicken> chickens = existingGame.getChickens();

        Map<String, Object> response = new HashMap<>();
        response.put("type", "chickenPositions");
        response.put("chickens", chickens);
        response.put("status", "ok");
        response.put("time", LocalDateTime.now().toString());
        LOGGER.info("Sending Chicken Data: {}", chickens);

        return response;
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
    @SendTo("/topic/game/{lobbyid}")
    public ResponseEntity<?> kickUser(@PathVariable String gameId, @PathVariable String usernameKicker,
                                      @PathVariable String usernameKicked) {
        Game existingGame = gameService.getGameById(gameId);
        HashMap<String, Object> response = new HashMap<>();

        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }
        try {
            if (existingGame.kick(usernameKicker, usernameKicked)) {
                return createOkResponse(existingGame);
            }

            response.put("feedback", existingGame.getPlayers());
            response.put("status", "ok");
            response.put("time", LocalDateTime.now().toString());
            LOGGER.info("Kicked {} successfully", usernameKicked);

            messagingService.sendPlayerList(gameId, response);

        } catch (Exception e) {
            response.put("feedback", e.getMessage());
            response.put("status", "error");
            response.put("time", LocalDateTime.now().toString());

            messagingService.sendPlayerList(gameId, response);
        }
        return createErrorResponse("can not kick " + usernameKicked + "!");

    }

    // Method to set the number of elements (e.g., chickens) in the game
    /*
    @PostMapping("/setChicken/{gameId}/{number}")
    public ResponseEntity<?> setNumberOfChicken(@PathVariable String gameId, @PathVariable int number) {
        // #63 NEW: gameService now sets the number of Chickens
        Game existingGame = gameService.setChicken(gameId, number);

        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }

        return createOkResponse(existingGame);
    } */

    @GetMapping("/ingame/{gameId}/{playerId}/isValidJump/{jumpType}")
    public ResponseEntity<?> isValidJump(
            @PathVariable String gameId,
            @PathVariable String playerId,
            @PathVariable String jumpType
    ) {
        Game existingGame = gameService.getGameById(gameId);
        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }

        boolean isValid = existingGame.isValidJump(playerId, jumpType);

        return ResponseEntity.ok(isValid);
    }

    @GetMapping("/ingame/{gameId}/{playerId}/isValidSprint")
    public ResponseEntity<?> isValidSprint(
            @PathVariable String gameId,
            @PathVariable String playerId
    ) {
        Game existingGame = gameService.getGameById(gameId);
        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }

        boolean isValid = existingGame.isValidSprint(playerId);

        return ResponseEntity.ok(isValid);
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
            LOGGER.error("Invalid player role: {}", role);

        }
        return createOkResponse(existingGame);
    }

    @MessageMapping("/topic/game/{lobbyId}/setRole/{nameOfPlayerToSetRole}/{role}")
    @SendTo("/topic/game/{lobbyId}")
    public void setRoleViaStomp(
            Player actingPlayer,
            @DestinationVariable String lobbyId,
            @DestinationVariable String nameOfPlayerToSetRole,
            @DestinationVariable String role) {
        HashMap<String, Object> response = new HashMap<>();

        try {
            Game existingGame = gameService.setRole(lobbyId, nameOfPlayerToSetRole, role);
            LOGGER.info("Player: {}, sets role: {}, for player: {}", actingPlayer.getName(), role,
                    nameOfPlayerToSetRole);

            response.put("type", "playerRole");
            response.put("feedback", existingGame.getPlayers());
            response.put("status", "ok");
            response.put("time", LocalDateTime.now().toString());

            messagingService.sendPlayerList(lobbyId, response);
        } catch (SetRoleException e) {
            response.put("type", "playerRole");
            response.put("feedback", e.getMessage());
            response.put("status", "error");
            response.put("time", LocalDateTime.now().toString());

            messagingService.sendPlayerList(lobbyId, response);
        }
    }

    @PostMapping("/addPlayer/{gameId}")
    public ResponseEntity<?> kickUser(@RequestBody Player playerFromFrontend, @PathVariable String gameId) {
        Game existingGame = gameService.getGameById(gameId);
        if (existingGame == null) {
            return createErrorResponse("No game found.");
        }
        Player player = new Player(playerFromFrontend.getName());
        if (existingGame.addPlayer(player)) {
            return createOkResponse(existingGame);
        }

        return createErrorResponse("can not add " + player.getName() + "!");

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
        feedbackData.put("password", game.getPassword());
        try {
            gameJSON = ow.writeValueAsString(game);
            feedbackData.put("feedback", game);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            feedbackData.put("feedback", "something in backend went wrong!");
        }

        return ResponseEntity.status(HttpStatus.OK).body(feedbackData);
    }

    @GetMapping("/{gameId}/isPrivate")
    public ResponseEntity<Map<String, Object>> isPrivate(@PathVariable String gameId) {
        Game existingGame = gameService.getGameById(gameId);

        if (existingGame == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of(
                            "status", "error",
                            "message", "Lobby nicht gefunden",
                            "isPrivate", false));
        }

        return ResponseEntity.ok(Map.of(
                "status", "ok",
                "isPrivate", existingGame.getPrivateLobby(),
                "password", ""));
    }
}
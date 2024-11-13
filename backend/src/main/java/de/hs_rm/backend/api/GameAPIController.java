package de.hs_rm.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/game")
public class GameAPIController {
    private Game game;
    @PostMapping("/create")
    public ResponseEntity<Game> createGame() {
        if(game==null){
            game = new Game();
            return ResponseEntity.ok(game);
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/start/{gameid}")
    public ResponseEntity<Game>  startGame() {
        if(game==null){
            return ResponseEntity.badRequest().build();
        }
        game.start();
        return ResponseEntity.ok(game);
    }
    
    @PostMapping("/end/{gameid}")
    public ResponseEntity<Game> endGame() {
        if(game==null){
            return ResponseEntity.badRequest().build();
        }
        game.end();
        return ResponseEntity.ok(game);
    }
    

    @PostMapping("/kick/{userid}")
    public ResponseEntity<Game> kickUser(@RequestBody String entity) {
        if(game==null){
            return ResponseEntity.badRequest().build();
        }
        game.kick();
        return ResponseEntity.ok(game);
    }
    
    @PostMapping("/setChicken/{number}")
    public ResponseEntity<Game> setNumberOfChicken(@RequestBody String entity) {
        //TODO: process POST request
        
        return entity;
    }

    @GetMapping("/status")
    public ResponseEntity<Game> getGameStatus() {
        if (game == null) {
            return ResponseEntity.badRequest().build(); // Fehlermeldung, wenn kein Spiel existiert
        }
        return ResponseEntity.ok(game); // Gibt das Game-Objekt als JSON zurück
    }
}



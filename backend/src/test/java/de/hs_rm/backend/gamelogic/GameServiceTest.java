package de.hs_rm.backend.gamelogic;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;

import de.hs_rm.backend.gamelogic.characters.players.Player;


import org.junit.jupiter.api.BeforeEach;

import java.util.HashMap;
import java.util.Map;

public class GameServiceTest {

    private GameService gameService;
    private Map<String, Game> gameList; // Spiel-Liste injizieren

    @BeforeEach
    void setUp() {
        gameService = new GameService();
        gameList = new HashMap<>();
        gameService.setGameList(gameList); 
    }

    @Test // Test für null Username
    void testMoveUsernameIsNull() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            gameService.move(null, 1, 1, 1);
        });
        assertEquals("Username and direction must not be empty.", exception.getMessage());
    }


    @Test // Test für leeren Username
    void testMoveUsernameIsEmpty() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            gameService.move("", 1, 1, 1);
        });
        assertEquals("Username and direction must not be empty.", exception.getMessage());
    }

    @Test // Test für Spieler, der in keinem Spiel ist
    void testMovePlayerNotFound() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            gameService.move("unknownPlayer", 1, 1, 1);
        });
        assertEquals("Player not found in any game.", exception.getMessage());
    }

    @Test // Spieler wird gefunden, aber Bewegung schlägt fehl
    void testMoveMoveFails() {
        Player mockPlayer = mock(Player.class); // Mock-Spieler erstellen
        Game mockGame = mock(Game.class); // Mock-Spiel erstellen
        when(mockGame.findPlayerByUsername("testPlayer")).thenReturn(mockPlayer); // Spieler wird gefunden
        when(mockGame.move("testPlayer", 2, 2, 1)).thenReturn(false); // Bewegung schlägt fehl

        gameList.put("game1", mockGame);

        boolean result = gameService.move("testPlayer", 2, 2, 1);

        assertFalse(result);
        verify(mockGame).move("testPlayer", 2, 2, 1); // Überprüfen, ob move aufgerufen wurde
    }

    @Test // Spieler wird gefunden, Bewegung gelingt
    void testMoveMoveSucceeds() {
        Player mockPlayer = mock(Player.class); 
        Game mockGame = mock(Game.class); 
        when(mockGame.findPlayerByUsername("testPlayer")).thenReturn(mockPlayer); 
        when(mockGame.move("testPlayer", 3, 3, 1)).thenReturn(true);

        gameList.put("game1", mockGame); 

        boolean result = gameService.move("testPlayer", 3, 3, 1);

        assertTrue(result);
        verify(mockGame).move("testPlayer", 3, 3, 1);
    }
}
package de.hs_rm.backend.gamelogic;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.map.PlayMap;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

public class GameServiceTest {

    private GameService gameService;
    private Map<String, Game> gameList;
    private PlayMap mockPlayMap;
    private Game mockGame;

    @BeforeEach
    void setUp() {
        gameService = new GameService();
        gameList = new HashMap<>();
        gameService.setGameList(gameList);

        // PlayMap und Game Mock
        mockPlayMap = mock(PlayMap.class);
        when(mockPlayMap.getWidth()).thenReturn(10);
        when(mockPlayMap.getHeight()).thenReturn(10);

        mockGame = mock(Game.class);
        when(mockGame.getPlaymap()).thenReturn(mockPlayMap);

        gameList.put("game1", mockGame);
    }

    @Test // Test für null Username
    void testMoveUsernameIsNull() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            gameService.move(null, 1, 1);
        });

        assertEquals("Player 'null' not found in any game.", exception.getMessage());
    }

    @Test // Test für leeren Username
    void testMoveUsernameIsEmpty() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            gameService.move("", 1, 1);
        });

        assertEquals("Player '' not found in any game.", exception.getMessage());
    }

    @Test // Test für Spieler, der in keinem Spiel ist
    void testMovePlayerNotFound() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            gameService.move("unknownPlayer", 1, 1);
        });

        assertEquals("Player 'unknownPlayer' not found in any game.", exception.getMessage());
    }

    @Test // Spieler wird gefunden, aber Bewegung schlägt fehl
    void testMoveMoveFails() {
        when(mockGame.findPlayerByUsername("testPlayer")).thenReturn(mock(Player.class));
        when(mockGame.move("testPlayer", 2, 2,0))
                .thenThrow(new IllegalArgumentException("Failed to move Player 'testPlayer'. Tile is a wall"));

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            gameService.move("testPlayer", 2, 2);
        });

        assertEquals("Failed to move Player 'testPlayer'. Tile is a wall", exception.getMessage());
    }

    @Test // Spieler wird gefunden, Bewegung gelingt
    void testMoveMoveSucceeds() {
        when(mockGame.findPlayerByUsername("testPlayer")).thenReturn(mock(Player.class));
        when(mockGame.move("testPlayer", 3, 3,0)).thenReturn(true);

        boolean result = gameService.move("testPlayer", 3, 3);

        assertTrue(result);
        verify(mockGame).move("testPlayer", 3, 3,0);
    }
}
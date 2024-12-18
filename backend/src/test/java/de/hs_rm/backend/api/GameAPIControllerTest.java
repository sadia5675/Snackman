package de.hs_rm.backend.api;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import de.hs_rm.backend.gamelogic.GameService;
import de.hs_rm.backend.gamelogic.characters.players.Player;

import de.hs_rm.backend.gamelogic.Game;

public class GameAPIControllerTest {

    @Mock // Mock-Objekt für GameService, um die Abhängigkeit zu simulieren
    private GameService gameService;

    @InjectMocks // InjectMocks injiziert die gemockten Abhängigkeiten in den GameAPIController
    private GameAPIController gameAPIController;

    // MockMvc wird verwendet, um HTTP-Anfragen an den Controller zu simulieren
    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this); // Initialisiert Mockito
        mockMvc = MockMvcBuilders.standaloneSetup(gameAPIController).build(); // Erstellt die MockMvc-Instanz

    }

    @Test // Testet die erfolgreiche Bewegung eines Spielers
    void testMovePlayerSuccess() throws Exception {

        // Testdaten
        String gameId = "game123";
        String username = "player1";
        int coordinateX = 1;
        int coordinateY = 1;
        int coordinateZ = 1;
        Player player = new Player(username);
        
        Game mockGame = new Game(player); // Erstellen Sie ein Mock-Spiel

         // Mockt die Rückgabe des Spiels
        when(gameService.getGameById(gameId)).thenReturn(mockGame);
        when(gameService.move(username, coordinateX, coordinateY, coordinateZ)).thenReturn(true);  // Bewegung erfolgreich

        // Führt einen POST-Request aus, um die Bewegung zu testen
        mockMvc.perform(post("/api/game/move/{gameId}/{username}/{coordinateX}/{coordinateY}/{coordinateZ}", gameId, username,
                coordinateX, coordinateY, coordinateZ)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("ok"));
    }


    @Test //Testet wenn der Spieler gegen eine Wand läuft
    void testMovePlayerFail() throws Exception {

        String gameId = "game123";
        String username = "player1";
        int coordinateX = 1;
        int coordinateY = 0;
        int coordinateZ = 1;
        Player player = new Player(username);

        Game mockGame = new Game(player); 

        when(gameService.getGameById(gameId)).thenReturn(mockGame);
        when(gameService.move(username, coordinateX, coordinateY, coordinateZ)).thenReturn(false);  // Bewegung schlägt fehl

        // Führt einen POST-Request aus und erwartet eine Fehlermeldung
        mockMvc.perform(post("/api/game/move/{gameId}/{username}/{coordinateX}/{coordinateY}/{coordinateZ}", gameId, username,
                coordinateX, coordinateY, coordinateZ)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest())
                .andExpect(content().string("Failed to move player --> Tile is Wall, Invalid Coordinates or OutOfBounds"));
    }

}
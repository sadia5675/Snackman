package de.hs_rm.backend.gameTests;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import de.hs_rm.backend.exception.GameJoinException;
import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.GameService;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;

@SpringBootTest
class GameServiceTests {

    private GameService gameService;

    @BeforeEach
    void init() {
        gameService = new GameService();
    }

    @Test
    void testCreateGame() {
        Player gamemaster = new Player("Gamemaster");
        gamemaster.setPlayerrole(PlayerRole.SNACKMAN);

        Game game = gameService.createGame(gamemaster);

        assertNotNull(game);
        assertEquals(1, game.getPlayers().size());
        assertEquals(gamemaster, game.getGamemaster());
        assertFalse(game.isStarted());
    }

    @Test
    void testGetGameList() {
        Player gamemaster1 = new Player("Master1");
        Player gamemaster2 = new Player("Master2");

        gameService.createGame(gamemaster1);
        gameService.createGame(gamemaster2);

        assertEquals(2, gameService.getGameList().size());
    }

    @Test
    void testGetGameById() {
        Player gamemaster = new Player("Gamemaster");
        Game game = gameService.createGame(gamemaster);

        Game foundGame = gameService.getGameById(game.getId());

        assertNotNull(foundGame);
        assertEquals(game, foundGame);
    }

    @Test
    void testGetGameById_NotFound() {
        Game foundGame = gameService.getGameById("InvalidID");

        assertNull(foundGame);
    }

    @Test
    void testStartGame() {
        Player gamemaster = new Player("Gamemaster");
        Game game = gameService.createGame(gamemaster);
        gameService.setChicken(game.getId(), 3);

        Game startedGame = gameService.startGame(game.getId());

        assertNotNull(startedGame);
        assertTrue(startedGame.isStarted());
        assertEquals(3, startedGame.getChickens().size());
    }

    @Test
    void testEndGame() {
        Player gamemaster = new Player("Gamemaster");
        Game game = gameService.createGame(gamemaster);
        

        gameService.startGame(game.getId());
        Game endedGame = gameService.endGame(game.getId());

        assertNotNull(endedGame);
        assertFalse(endedGame.isStarted());
    }

    @Test
    void testJoinGame() {
        Player gamemaster = new Player("Gamemaster");
        Game game = gameService.createGame(gamemaster);

        Player player = new Player("Player1");
        player.setPlayerrole(PlayerRole.GHOST);

        Game updatedGame = gameService.joinGame(game.getId(), player);

        assertNotNull(updatedGame);
        assertTrue(updatedGame.getPlayers().contains(player));
        assertEquals(2, updatedGame.getPlayers().size());
    }

    @Test
    void testJoinGame_NameConflict() {
        Player gamemaster = new Player("Gamemaster");
        Game game = gameService.createGame(gamemaster);

        Player duplicate = new Player("Gamemaster");
        duplicate.setPlayerrole(PlayerRole.SNACKMAN);

        assertThrows(GameJoinException.class, () -> gameService.joinGame(game.getId(), duplicate));
    }

    @Test
    void testLeaveGame() {
        Player gamemaster = new Player("Gamemaster");
        Game game = gameService.createGame(gamemaster);

        Player player = new Player("Player1");
        player.setPlayerrole(PlayerRole.GHOST);
        gameService.joinGame(game.getId(), player);

        Game updatedGame = gameService.leaveGame(game.getId(), player);

        assertNotNull(updatedGame);
        assertFalse(updatedGame.getPlayers().contains(player));
        assertEquals(1, updatedGame.getPlayers().size());
    }

    @Test
    void testLeaveGame_NonExistentPlayer() {
        Player gamemaster = new Player("Gamemaster");
        Game game = gameService.createGame(gamemaster);

        Player nonPlayer = new Player("NonExistent");

        Game updatedGame = gameService.leaveGame(game.getId(), nonPlayer);

        assertNotNull(updatedGame);
        assertEquals(1, updatedGame.getPlayers().size());
    }

    @Test
    void testSetChicken() {
        Player gamemaster = new Player("Gamemaster");
        Game game = gameService.createGame(gamemaster);

        Game updatedGame = gameService.setChicken(game.getId(), 5);

        assertNotNull(updatedGame);
        assertEquals(5, updatedGame.getChickens().size());
    }
}

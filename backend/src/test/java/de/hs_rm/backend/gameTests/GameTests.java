package de.hs_rm.backend.gameTests;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import de.hs_rm.backend.gamelogic.characters.players.Chicken;

@SpringBootTest
class GameTests {

    private Game game;
    private Player gamemaster;

    @BeforeEach
    void init() {
        gamemaster = new Player("Gamemaster");
        gamemaster.setPlayerrole(PlayerRole.SNACKMAN);
        game = new Game(gamemaster);
    }

    @Test
    void testInit() {
        assertEquals(1, game.getPlayers().size());
        assertEquals(gamemaster, game.getGamemaster());
        assertFalse(game.isStarted());
        assertNotNull(game.getId());
    }

    @Test
    void startTest() {
        game.setChicken(2);
        Player ghost = new Player("Ghost");
        ghost.setPlayerrole(PlayerRole.GHOST);
        game.addPlayer(ghost);

        boolean started = game.start();

        assertTrue(started);
        assertTrue(game.isStarted());
        assertNotNull(game.getPlaymap());
        assertEquals(2, game.getChickens().size());
        assertEquals(2, game.getPlayers().size());
    }

    @Test
    void endTest() {
        game.start();
        boolean ended = game.end();

        assertFalse(game.isStarted());
        assertFalse(ended);
    }

    @Test
    void kickTest_Positive() {
        Player player = new Player("Joendhard");
        player.setPlayerrole(PlayerRole.GHOST);
        game.addPlayer(player);

        boolean kicked = game.kick("Gamemaster", "Joendhard");

        assertTrue(kicked);
        assertFalse(game.getPlayers().contains(player));
    }

    @Test
    void kickTest_Negative() {
        Player player = new Player("Joendhard");
        player.setPlayerrole(PlayerRole.SNACKMAN);
        game.addPlayer(player);

        boolean kicked = game.kick("Joendhard", "Gamemaster");

        assertFalse(kicked);
        assertTrue(game.getPlayers().contains(player));
    }

    @Test
    void kickTest_Negative_Gamemaster() {
        boolean kicked = game.kick("Gamemaster", "Gamemaster");

        assertFalse(kicked);
    }

    @Test
    void joinGameTest() {
        Player player = new Player("Joghurta");
        player.setPlayerrole(PlayerRole.GHOST);

        boolean joined = game.addPlayer(player);

        assertTrue(joined);
        assertTrue(game.getPlayers().contains(player));
    }

    @Test
    void leaveGameTest_Player() {
        Player player = new Player("Notulen");
        player.setPlayerrole(PlayerRole.GHOST);
        game.addPlayer(player);

        game.leaveGame(player);

        assertFalse(game.getPlayers().contains(player));
        assertEquals(1, game.getPlayers().size());
    }

    @Test
    void leaveGameTest_NonPlayer() {
        Player player = new Player("Notulen");

        game.leaveGame(player);

        assertEquals(1, game.getPlayers().size());
    }

    @Test
    void leaveGameTest_GamemasterThrowsException() {
        assertThrows(IllegalStateException.class, () -> game.leaveGame(gamemaster));
    }

    @Test
    void randomPlayerTest() {
        Player player1 = new Player("Player1");
        player1.setPlayerrole(PlayerRole.SNACKMAN);
        game.addPlayer(player1);

        Player player2 = new Player("Player2");
        player2.setPlayerrole(PlayerRole.GHOST);
        game.addPlayer(player2);

        Player randomPlayer = game.getRandomPlayer();
        assertNotNull(randomPlayer);
        assertTrue(game.getPlayers().contains(randomPlayer));
    }

    @Test
    void findPlayerByUsernameTest() {
        Player player = new Player("Joghurta");
        game.addPlayer(player);

        Player foundPlayer = game.findPlayerByUsername("Joghurta");
        assertNotNull(foundPlayer);
        assertEquals(player, foundPlayer);

        Player notFound = game.findPlayerByUsername("Nonexistent");
        assertNull(notFound);
    }

    @Test
    void setChickenTest() {
        game.setChicken(5);

        assertEquals(5, game.getChickens().size());
    }
}

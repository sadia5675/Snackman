package de.hs_rm.backend.gamelogic;
import org.junit.jupiter.api.Test;

import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import de.hs_rm.backend.gamelogic.characters.players.Snackman;
import de.hs_rm.backend.gamelogic.map.PlayMap;
import de.hs_rm.backend.gamelogic.map.Tile;
import de.hs_rm.backend.gamelogic.map.TileType;

import static org.junit.jupiter.api.Assertions.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class GameTest {

    @Test // Testet die Länge und Einzigartigkeit der generierten IDs
    void testGenerateIdLengthAndUniqueness() {
        int numGames = 1000;// Anzahl der Tests
        int idLength = 5; 

        Set<String> ids = new HashSet<>();

        for (int i = 0; i < numGames; i++) {
            Game game = new Game(new Player("TestPlayer" + i)); 
            String gameId = game.getId(); 

            // Überprüfen, ob die Länge der ID der erwarteten Länge entsprich
            assertEquals(idLength, gameId.length());

            // Überprüfen, ob die ID einzigartig ist (es darf keine Duplikate geben)
            assertTrue(ids.add(gameId));
        }
    }

    @Test // Testet, ob die ID-Generierung thread-sicher ist
    void testGenerateIdThreadSafety() throws InterruptedException {
        int numThreads = 100; // Anzahl der Threads, die gleichzeitig laufen
        int numIdsPerThread = 50;// Anzahl der IDs, die jeder Thread generieren soll
        ExecutorService executor = Executors.newFixedThreadPool(numThreads);// Thread-Pool
        Set<String> ids = ConcurrentHashMap.newKeySet(); // Thread-sicheres Set, um IDs zu speichern

        CountDownLatch latch = new CountDownLatch(numThreads);// Zählt herunter, bis alle Threads fertig sind

        for (int i = 0; i < numThreads; i++) {
            executor.submit(() -> { // Startet einen neuen Thread
                try {
                    for (int j = 0; j < numIdsPerThread; j++) {
                        Game game = new Game(new Player("ThreadPlayer"));
                        ids.add(game.getId());
                    }
                } finally {
                    latch.countDown();
                }
            });
        }

        latch.await();
        executor.shutdown();

        // Überprüft, ob die Anzahl der generierten IDs der erwarteten Anzahl entspricht //// Das Set enthält nur einzigartige IDs
        assertEquals(numThreads * numIdsPerThread, ids.size());
    }


    @Test // Spielende wird überprüft
    void testEnd() {
        Player gamemaster = new Player("TestMaster");
        Game game = new Game(gamemaster);

        boolean isEnded = game.end();

        assertFalse(isEnded);
    }

    
    @Test // Spieler kann erfolgreich entfernt werden
    void testKickPlayerSuccessful() {
        Player gamemaster = new Player("Master");
        Game game = new Game(gamemaster);

        Player player1 = new Player("Player1");
        Player player2 = new Player("Player2");

        game.addPlayer(player1); 
        game.addPlayer(player2);

        boolean wasKicked = game.kick("Master", "Player2");

        assertTrue(wasKicked);
        assertFalse(game.getPlayers().contains(player2));
    }

    @Test // Gamemaster kann nicht entfernt werden
    void testKickFailsIfKickedIsGamemaster() {
        Player gamemaster = new Player("Master");
        Game game = new Game(gamemaster);

        boolean wasKicked = game.kick("Master", "Master");

        assertFalse(wasKicked);
    }

    @Test // Nur Gamemaster darf kicken
    void testKickFailsIfNotKickedByGamemaster() {
        Player gamemaster = new Player("Master");
        Game game = new Game(gamemaster);

        Player player1 = new Player("Player1");
        Player player2 = new Player("Player2");

        game.addPlayer(player1); 
        game.addPlayer(player2);

        // player1 verucht zu entfernen
        boolean wasKicked = game.kick("Player1", "Player2");

        assertFalse(wasKicked);
        assertTrue(game.getPlayers().contains(player2));
    }

    @Test /// Nicht vorhandene Spieler können nicht entfernt werden
    void testKickFailsIfPlayerNotFound() {
        Player gamemaster = new Player("Master");
        Game game = new Game(gamemaster);

        Player player1 = new Player("Player1");
        game.addPlayer(player1);

        //Gamemaster versucht Spieler zu entfernen, der nicht in der Liste ist
        boolean wasKicked = game.kick("Master", "UnknownPlayer");

        assertFalse(wasKicked);
        assertEquals(2, game.getPlayers().size());
    }
       
    @Test // Auf den Spielfeld bewegen
    void testMove() throws IOException {
        // Pfad zur temporären Test-Datei
        Path resourcePath = Path.of("src/main/resources/maps/tempMap.txt");
        // Test-Datei
        Files.write(resourcePath, """
                ****
                *  *
                * **
                *  *
                ****
                """.stripIndent().getBytes());

        // Lade Karte und erstelle Spiel
        PlayMap playmap = new PlayMap("tempMap");
        Player player = new Player("testPlayer");
        player.setPlayerrole(PlayerRole.SNACKMAN);
        Game game = new Game(player);
        game.setPlaymap(playmap);

        // Positioniere Snackman auf einem zufälligen gültigen Tile
        Random random = new Random();
        Tile randomTile = null;
        int index = -1;
        do {
            index = random.nextInt(playmap.getTilesList().size());
            randomTile = playmap.getTilesList().get(index);
        } while (randomTile.getType() != TileType.SURFACE || randomTile.hasCharacter());

        Snackman snackman = new Snackman(1.0, index % playmap.getWidth(), index / playmap.getWidth(), 3);
        game.getCharacters().put(player.getName(), snackman);
        randomTile.addCharacter(snackman);
        game.setCharacters(game.getCharacters());

        // Check Ausgangsposition
        assertEquals(snackman.getPosX(), index % playmap.getWidth());
        assertEquals(snackman.getPosY(), index / playmap.getWidth());

        // Bewegung testen
        boolean surface = game.move("testPlayer", 2, 1); // gültig
        boolean wall = game.move("testPlayer", 0, 1); // Wand
        boolean edge = game.move("testPlayer", 0, 0); // Ecke

        // Out-of-Bounds testen
        assertThrows(IndexOutOfBoundsException.class, () -> {
            game.move("testPlayer", -1, -1); // ungültig
        });

        // Validierung der Ergebnisse
        assertTrue(surface);
        assertFalse((wall));
        assertFalse(edge);
        assertEquals(2, snackman.getPosX());
        assertEquals(1, snackman.getPosY());

        // Entferne Testdatei
        Files.delete(resourcePath);
    }

}

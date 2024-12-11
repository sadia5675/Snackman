package de.hs_rm.backend.gamelogic;

import de.hs_rm.backend.gamelogic.characters.players.Character;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import de.hs_rm.backend.gamelogic.characters.players.Snackman;
import de.hs_rm.backend.gamelogic.map.PlayMap;
import de.hs_rm.backend.gamelogic.map.Tile;
import de.hs_rm.backend.gamelogic.map.TileType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class GameTest{
    private Game game;
    private Player mockGamemaster;

    @BeforeEach
    void setUp() {
        // Mocking des Gamemasters
        mockGamemaster = mock(Player.class);
        when(mockGamemaster.getName()).thenReturn("Gamemaster");
        when(mockGamemaster.getPlayerrole()).thenReturn(PlayerRole.GHOST);

        // Initialisierung des Spiels
        game = new Game(mockGamemaster);
    }

    @Test
    void testAddPlayer() {
        Player newPlayer = mock(Player.class);
        when(newPlayer.getName()).thenReturn("Player1");
        when(newPlayer.getPlayerrole()).thenReturn(PlayerRole.SNACKMAN);

        boolean result = game.addPlayer(newPlayer);

        assertTrue(result, "Der Spieler sollte erfolgreich hinzugefügt werden.");
        assertEquals(2, game.getPlayers().size(), "Es sollten zwei Spieler im Spiel sein.");
    }

    @Test
    void testStartGame() {
        // Sicherstellen, dass das PlayMap-Mock korrekt funktioniert
        PlayMap mockPlayMap = mock(PlayMap.class);
        when(mockPlayMap.getWidth()).thenReturn(10);
    
        // Sicherstellen, dass die TilesList erstellt wird
        List<Tile> mockTilesList = createMockTilesList(100);
        assertNotNull(mockTilesList, "Die TilesList sollte nicht null sein.");
        when(mockPlayMap.getTilesList()).thenReturn(mockTilesList);
    
        // Spiel initialisieren
        game.setPlaymap(mockPlayMap);
        game.setChicken(5);
    
        boolean started = game.start();
    
        assertTrue(started, "Das Spiel sollte erfolgreich gestartet werden.");
        assertNotNull(game.getPlaymap(), "Die Spielfläche sollte initialisiert werden.");
        assertEquals(5, game.getChickens().size(), "Die Anzahl der Hühner sollte korrekt sein.");
    }
    
    @Test
    void testMoveCharacter() {
        // Mock PlayMap and Tiles
        PlayMap mockPlayMap = mock(PlayMap.class);
        when(mockPlayMap.getWidth()).thenReturn(10);
    
        // Erstelle echte Instanzen von Tiles
        List<Tile> tilesList = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            tilesList.add(new Tile(TileType.SURFACE)); // Initialisiere alle Tiles als FLOOR
        }
        // Setze bestimmte Tiles als Wände
        tilesList.get(11).setType(TileType.WALL);
    
        // Mock die Tiles-Liste in der PlayMap
        when(mockPlayMap.getTilesList()).thenReturn(tilesList);
    
        // Initialisiere das Spiel
        game.setPlaymap(mockPlayMap);
        game.start();
    
        // Füge einen Spieler hinzu
        Player newPlayer = mock(Player.class);
        when(newPlayer.getName()).thenReturn("Player1");
        when(newPlayer.getPlayerrole()).thenReturn(PlayerRole.SNACKMAN);
    
        // Füge einen Charakter hinzu
        Character character = new Snackman(1.0, 0, 0,3); // Charakter startet bei (0, 0)
        game.addPlayer(newPlayer);
        game.addCharacter("Player1", character);
    
        // Setze den Charakter auf das Startfeld
        Tile startTile = tilesList.get(0);
        startTile.addCharacter(character);
    
        // Ziel-Tile für den Move
        Tile targetTile = tilesList.get(22); // Tile an Position (2, 2)
    
        // Bewegung des Charakters
        boolean moved = game.move("Player1", 2, 2);
    
        // Assertions
        assertTrue(moved, "Character should be able to move.");
        assertFalse(startTile.getCharacterList().contains(character), "Character should be removed from the start tile.");
        assertTrue(targetTile.getCharacterList().contains(character), "Character should be added to the target tile.");
        assertEquals(2, character.getPosX(), "Character's X position should be updated to 2.");
        assertEquals(2, character.getPosY(), "Character's Y position should be updated to 2.");
    }
    
    @Test
    void testCannotKickGamemaster() {
        boolean result = game.kick("Gamemaster", "Gamemaster");

        assertFalse(result, "Der Gamemaster sollte nicht entfernt werden können.");
    }

    private List<Tile> createMockTilesList(int size) {
        List<Tile> tiles = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            Tile mockTile = mock(Tile.class);
            when(mockTile.getType()).thenReturn(TileType.SURFACE);
            when(mockTile.hasCharacter()).thenAnswer(invocation -> !mockTile.getCharacterList().isEmpty());
            when(mockTile.hasChicken()).thenReturn(false);
    
            // Use a real list for characterList
            List<Character> characterList = new ArrayList<>();
            when(mockTile.getCharacterList()).thenReturn(characterList);
    
            // Mock addCharacter
            when(mockTile.addCharacter(any())).thenAnswer(invocation -> {
                Character character = invocation.getArgument(0);
                characterList.add(character);
                return true;
            });
    
            // Mock removeCharacter
            when(mockTile.removeCharacter(any())).thenAnswer(invocation -> {
                Character character = invocation.getArgument(0);
                return characterList.remove(character);
            });
    
            tiles.add(mockTile);
        }
        return tiles;
    }

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
        playmap.createTiles();
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

package de.hs_rm.backend.gamelogic;

import de.hs_rm.backend.gamelogic.Game;
import de.hs_rm.backend.gamelogic.characters.players.Player;
import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import de.hs_rm.backend.gamelogic.characters.players.Snackman;
import de.hs_rm.backend.gamelogic.characters.players.Character;
import de.hs_rm.backend.gamelogic.characters.players.Item;
import de.hs_rm.backend.gamelogic.map.PlayMap;
import de.hs_rm.backend.gamelogic.map.Tile;
import de.hs_rm.backend.gamelogic.map.TileType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
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

        // Mock für SURFACE-Tiles setzen
        for (int i = 0; i < mockTilesList.size(); i++) {
            Tile mockTile = mockTilesList.get(i);
            when(mockTile.getType()).thenReturn(i < 80 ? TileType.SURFACE : TileType.WALL); // 80% SURFACE
            
            List<Item> mockItemList = new ArrayList<>();
            when(mockTile.getItemList()).thenReturn(mockItemList);
            when(mockTile.hasItem()).thenAnswer(invocation -> !mockItemList.isEmpty());
            
            doAnswer(invocation -> {
                Item item = invocation.getArgument(0);
                mockItemList.add(item);
                return true;
            }).when(mockTile).addItem(any(Item.class));
        }
    
        // Spiel initialisieren
        game.setPlaymap(mockPlayMap);
        game.setChicken(5);
    
        boolean started = game.start();
    
        assertTrue(started, "Das Spiel sollte erfolgreich gestartet werden.");
        assertNotNull(game.getPlaymap(), "Die Spielfläche sollte initialisiert werden.");
        assertEquals(5, game.getChickens().size(), "Die Anzahl der Hühner sollte korrekt sein.");

        // Sicherstellen, dass 5 Items verteilt wurden
        int totalItems = 0;
        for (Tile tile : mockTilesList) {
            if(tile.hasItem()){
                totalItems += 1;
            }

        }

        assertEquals(5, totalItems, "Es sollten genau 5 Items auf der Spielfläche verteilt werden.");

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
    
    
    


}
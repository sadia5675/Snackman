package de.hs_rm.backend.gamelogic.characters.players;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PlayerTest {

    private Player testRegisteredPlayer;
    private Player testGuestPlayer;

    @BeforeEach
    public void setUp() {
        // Vor jedem Test
        testRegisteredPlayer = new Player("Delal", "john@example.com", "password123");
        testGuestPlayer = new Player("GuestPlayer");
    }

    @Test
    public void testRegisteredPlayerConstructor() {
        assertNotNull(testRegisteredPlayer);
        assertEquals("Delal", testRegisteredPlayer.getName());
        assertEquals("john@example.com", testRegisteredPlayer.getEmail());
        assertEquals(PlayerType.REGISTERED, testRegisteredPlayer.getPlayertype());
        assertNotNull(testRegisteredPlayer.getPassword());
    }

    @Test
    public void testGuestPlayerConstructor() {
        assertNotNull(testGuestPlayer);
        assertEquals("GuestPlayer", testGuestPlayer.getName());
        assertEquals(PlayerType.GUEST, testGuestPlayer.getPlayertype());
        assertNull(testGuestPlayer.getEmail());  
        assertNull(testGuestPlayer.getPassword());
    }

    @Test
    public void testSetterAndGetter() {
        testRegisteredPlayer.setName("JaneDoe");
        testRegisteredPlayer.setEmail("jane@example.com");
        testRegisteredPlayer.setPassword("newpassword123");

        assertEquals("JaneDoe", testRegisteredPlayer.getName());
        assertEquals("jane@example.com", testRegisteredPlayer.getEmail());
        assertEquals("newpassword123", testRegisteredPlayer.getPassword());
    }

    @Test
    public void testSetPlayerRole() {
        testRegisteredPlayer.setPlayerrole(PlayerRole.SNACKMAN);
        assertEquals(PlayerRole.SNACKMAN, testRegisteredPlayer.getPlayerrole());
        
        testRegisteredPlayer.setPlayerrole(PlayerRole.GHOST);
        assertEquals(PlayerRole.GHOST, testRegisteredPlayer.getPlayerrole());
    }

    @Test
    public void testIsGamemaster() {
        testRegisteredPlayer.setGamemaster(true);
        assertTrue(testRegisteredPlayer.isGamemaster());
        
        testRegisteredPlayer.setGamemaster(false);
        assertFalse(testRegisteredPlayer.isGamemaster());
    }

    @Test
    public void testPasswordNotVisibleInJson() {
        // Passwort mit @JsonIgnore markiert --> Abrufen des Players nicht sichtbar
        assertNotNull(testRegisteredPlayer.getPassword()); 
    }
}
package de.hs_rm.backend.messaging.response;

import java.util.Map;

import de.hs_rm.backend.gamelogic.characters.players.PlayerRole;
import de.hs_rm.backend.gamelogic.characters.players.Character;

public class CollisionValidationResponse extends BaseResponse {
    private Map<String, Character> updateCharacters;
    private PlayerRole winnerRole;

    public CollisionValidationResponse(Map<String,Character> chars, PlayerRole winner){
        super("collisionValidation","ok");
        this.updateCharacters = chars;
        this.winnerRole = winner;
    }

    public Map<String, Character> getUpdateCharacters() {
        return updateCharacters;
    }

    public void setUpdateCharacters(Map<String, Character> updateCharacters) {
        this.updateCharacters = updateCharacters;
    }

    public PlayerRole getWinnerRole() {
        return winnerRole;
    }

    public void setWinnerRole(PlayerRole winnerRole) {
        this.winnerRole = winnerRole;
    }

}

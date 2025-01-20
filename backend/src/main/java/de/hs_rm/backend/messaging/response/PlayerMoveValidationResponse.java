package de.hs_rm.backend.messaging.response;

import de.hs_rm.backend.gamelogic.characters.players.PlayerPosition;

public class PlayerMoveValidationResponse extends BaseResponse {
    private PlayerPosition feedback;

    public PlayerMoveValidationResponse(PlayerPosition feedback) {
        super("playerMoveValidation", "ok");
        this.feedback = feedback;
    }

    public PlayerPosition getFeedback() {
        return feedback;
    }

    public void setFeedback(PlayerPosition feedback) {
        this.feedback = feedback;
    }

}

package de.hs_rm.backend.messaging.response;

import java.util.List;

import de.hs_rm.backend.gamelogic.characters.players.Player;

public class LeaveResponse extends BaseResponse {
    private List<Player> feedback;
    
    public LeaveResponse(String type, String status, List<Player> playerInLobby){
        super(type, status);
        this.feedback = playerInLobby;
    }

    public List<Player> getFeedback() {
        return feedback;
    }

    public void setFeedback(List<Player> feedback) {
        this.feedback = feedback;
    }

}

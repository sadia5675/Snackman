package de.hs_rm.backend.messaging.response;

import java.util.List;

import de.hs_rm.backend.gamelogic.characters.players.Player;

public class PlayerJoinResponse extends BaseResponse{
    private List<Player> feedback;
    public PlayerJoinResponse(String type, String status, List<Player> feedback){
        super(type,status);
        this.feedback = feedback;
    }
    
    public List<Player> getFeedback() {
        return feedback;
    }
    public void setFeedback(List<Player> feedback) {
        this.feedback = feedback;
    }

}

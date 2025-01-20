package de.hs_rm.backend.messaging.response;

import java.util.Collection;

public class PlayerPositionResponse extends BaseResponse{
    private Collection<Object> feedback;

    public PlayerPositionResponse(Collection<Object> feedback){
        super("playerPosition", "ok");
        this.feedback = feedback;
    }

    public Collection<Object> getFeedback() {
        return feedback;
    }

    public void setFeedback(Collection<Object> feedback) {
        this.feedback = feedback;
    }
}

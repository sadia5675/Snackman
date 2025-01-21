package de.hs_rm.backend.messaging.errorResponse;

import de.hs_rm.backend.messaging.response.BaseResponse;

public class PlayerJoinErrorResponse extends BaseResponse{
    private String feedback;
    
    public PlayerJoinErrorResponse(String type, String status, String feedback){
        super(type,status);
        this.feedback = feedback;
    }

    public String getFeedback() {
        return feedback;
    }
    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
    
}

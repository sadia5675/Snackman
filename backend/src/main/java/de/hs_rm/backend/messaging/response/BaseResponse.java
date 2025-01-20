package de.hs_rm.backend.messaging.response;

import java.time.LocalDateTime;

public class BaseResponse {
    private String type;
    private String status;
    private String time;

    public BaseResponse(String type, String status) {
        this.type = type;
        this.status = status;
        this.time = LocalDateTime.now().toString();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}

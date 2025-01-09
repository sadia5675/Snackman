package de.hs_rm.backend.exception;

public class GameLeaveException extends RuntimeException{
    public GameLeaveException(String message) {
        super(message);
    }
}

package de.hs_rm.backend.entities;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;

@Entity
public class Player {
    @Id
    @GeneratedValue
    private long id;



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

}
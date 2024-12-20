package de.hs_rm.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/chicken")
public class ChickenAPIController {

@PostMapping("")
public String moveChicken(@RequestBody String entity) {
    //todo Aron
    return entity;
}

    
}

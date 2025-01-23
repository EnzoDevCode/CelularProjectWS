package org.enzo.springboot.msvc_celular.controllers;

import org.enzo.springboot.msvc_celular.services.SPARQLService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sparql")
public class SPARQLController {

    private final SPARQLService sparqlService;

    public SPARQLController(SPARQLService sparqlService) {
        this.sparqlService = sparqlService;
    }

    @PostMapping("/query")
    public String executeQuery(@RequestBody String query) {
        return sparqlService.executeSPARQLQuery(query);
    }
}


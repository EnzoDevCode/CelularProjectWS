package org.enzo.springboot.msvc_celular.controllers;
import org.enzo.springboot.msvc_celular.services.SemanticService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/semantic")
public class SemanticController {
    private final SemanticService semanticService;

    public SemanticController(SemanticService semanticService) {
        this.semanticService = semanticService;
    }

    @GetMapping("/rdf")
    public String getOntologyRDF() {
        return semanticService.getOntologyAsRDF
                ();
    }

    @GetMapping("/jsonld")
    public String getOntologyJSONLD() {
        return semanticService.getOntologyAsJSONLD();
    }
}

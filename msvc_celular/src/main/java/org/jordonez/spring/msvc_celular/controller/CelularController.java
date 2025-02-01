package org.jordonez.spring.msvc_celular.controller;

import org.jordonez.spring.msvc_celular.config.JenaConfig;
import org.jordonez.spring.msvc_celular.model.Celular;
import org.jordonez.spring.msvc_celular.service.CelularService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/celulares")
public class CelularController {

    private final CelularService celularService;

    public CelularController(CelularService celularService) {
        this.celularService = celularService;
    }

    @PostMapping
    public String agregarCelular(@RequestBody Celular celular) {
        celularService.agregarCelular(celular);
        return "Celular agregado correctamente";
    }

    @GetMapping("/search")
    public String buscarCelularesSPARQL() {
        String consulta = """
            PREFIX schema: <http://schema.org/>
            SELECT ?nombre WHERE {
                ?celular schema:name ?nombre .
            }
        """;
        return String.join(", ", JenaConfig.obtenerResultados(consulta));
    }
}


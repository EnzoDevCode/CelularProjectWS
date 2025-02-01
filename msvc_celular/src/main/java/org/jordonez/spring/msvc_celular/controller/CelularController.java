package org.jordonez.spring.msvc_celular.controller;

import org.jordonez.spring.msvc_celular.config.JenaConfig;
import org.jordonez.spring.msvc_celular.model.Celular;
import org.jordonez.spring.msvc_celular.service.CelularService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
    public List<Map<String, Object>> buscarCelularesSPARQL() {
        String consulta = """
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX schema: <http://schema.org/> 
        SELECT ?producto ?nombre ?marca ?precio ?categoria ?descripcion ?ram ?almacenamiento ?bateria ?procesador ?pantalla ?sistemaOperativo
        WHERE {
            ?producto rdf:type schema:Celular .
            ?producto schema:name ?nombre .
            OPTIONAL { ?producto schema:brand ?marca }.
            OPTIONAL { ?producto schema:price ?precio }.
            OPTIONAL { ?producto schema:category ?categoria }.
            OPTIONAL { ?producto schema:description ?descripcion }.
            OPTIONAL { ?producto schema:ram ?ram }.
            OPTIONAL { ?producto schema:storage ?almacenamiento }.
            OPTIONAL { ?producto schema:battery ?bateria }.
            OPTIONAL { ?producto schema:processor ?procesador }.
            OPTIONAL { ?producto schema:screen ?pantalla }.
            OPTIONAL { ?producto schema:operatingSystem ?sistemaOperativo }.
        }
    """;

        return JenaConfig.obtenerResultadosComoJsonLD(consulta);
    }



}


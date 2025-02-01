package org.jordonez.spring.msvc_celular.controller;

import org.jordonez.spring.msvc_celular.config.JenaConfig;
import org.jordonez.spring.msvc_celular.model.Celular;
import org.jordonez.spring.msvc_celular.service.CelularService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*") // Permitir cualquier origen
@RestController
@RequestMapping("/api/celulares")
public class CelularController {

    private final CelularService celularService;

    public CelularController(CelularService celularService) {
        this.celularService = celularService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> agregarCelular(@RequestBody Celular celular) {
        celularService.agregarCelular(celular);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Celular agregado correctamente");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/search")
    public String buscarCelularesSPARQL(
            @RequestParam(required = false) String nombre,
            @RequestParam(required = false) String marca,
            @RequestParam(required = false) String precioMin,
            @RequestParam(required = false) String precioMax,
            @RequestParam(required = false) String categoria) {

        // Construir la consulta SPARQL con filtros dinámicos
        String consulta = """
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX schema: <http://schema.org/> 
        SELECT ?producto ?nombre ?marca ?precio ?categoria ?descripcion ?ram ?almacenamiento ?bateria ?procesador ?pantalla
        WHERE {
            ?producto rdf:type schema:Celular .
            OPTIONAL { ?producto schema:name ?nombre }.
            OPTIONAL { ?producto schema:brand ?marca }.
            OPTIONAL { ?producto schema:price ?precio }.
            OPTIONAL { ?producto schema:category ?categoria }.
            OPTIONAL { ?producto schema:description ?descripcion }.
            OPTIONAL { ?producto schema:ram ?ram }.
            OPTIONAL { ?producto schema:storage ?almacenamiento }.
            OPTIONAL { ?producto schema:battery ?bateria }.
            OPTIONAL { ?producto schema:processor ?procesador }.
            OPTIONAL { ?producto schema:screen ?pantalla }.
        """;

        // Agregar filtros si los parámetros no son nulos
        if (nombre != null) {
            consulta += " FILTER regex(?nombre, \"" + nombre + "\", \"i\") .\n";
        }
        if (marca != null) {
            consulta += " FILTER regex(?marca, \"" + marca + "\", \"i\") .\n";
        }
        if (precioMin != null) {
            consulta += " FILTER (?precio >= " + precioMin + ") .\n";
        }
        if (precioMax != null) {
            consulta += " FILTER (?precio <= " + precioMax + ") .\n";
        }
        if (categoria != null) {
            consulta += " FILTER regex(?categoria, \"" + categoria + "\", \"i\") .\n";
        }

        consulta += "}"; // Cierre de la consulta SPARQL

        return JenaConfig.obtenerResultadosComoJsonLD(consulta);
    }
}


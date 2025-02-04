package org.jordonez.spring.msvc_celular.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.jordonez.spring.msvc_celular.config.JenaConfig;
import org.jordonez.spring.msvc_celular.model.Celular;
import org.jordonez.spring.msvc_celular.service.CelularService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*") // Permitir cualquier origen
@RestController
@RequestMapping("/api/celulares")
public class CelularController {

    private static final Logger logger = LoggerFactory.getLogger(CelularController.class);
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
    public ResponseEntity<Map<String, Object>> buscarCelularesSPARQL(
            @RequestParam(required = false) String nombre,
            @RequestParam(required = false) String marca,
            @RequestParam(required = false) Integer precioMax,
            @RequestParam(required = false) Integer ramMin
    ) {
        StringBuilder consulta = new StringBuilder("""
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX schema: <http://schema.org/>
    SELECT ?producto ?nombre ?marca ?precio ?categoria ?descripcion ?ram ?almacenamiento ?bateria ?procesador ?pantalla
    WHERE {
        ?producto rdf:type schema:Celular .
        ?producto schema:name ?nombre .  # a
        OPTIONAL { ?producto schema:brand ?marca }.
        OPTIONAL { ?producto schema:price ?precio }.
        OPTIONAL { ?producto schema:category ?categoria }.
        OPTIONAL { ?producto schema:description ?descripcion }.
        OPTIONAL { ?producto schema:ram ?ram }.
        OPTIONAL { ?producto schema:storage ?almacenamiento }.
        OPTIONAL { ?producto schema:battery ?bateria }.
        OPTIONAL { ?producto schema:processor ?procesador }.
        OPTIONAL { ?producto schema:screen ?pantalla }.
    """);

        if (nombre != null && !nombre.trim().isEmpty()) {
            consulta.append(" FILTER (REGEX(STR(?nombre), \"")
                    .append(nombre)
                    .append("\", \"i\")) .\n");
        }

        if (marca != null && !marca.trim().isEmpty()) {
            consulta.append(" FILTER (REGEX(STR(?marca), \"")
                    .append(marca)
                    .append("\", \"i\")) .\n");
        }

        if (precioMax != null) {
            consulta.append(" FILTER (?precio <= ").append(precioMax).append(") .\n");
        }

        if (ramMin != null) {
            consulta.append(" FILTER (?ram >= ").append(ramMin).append(") .\n");
        }

        consulta.append("}");

        // 📌 Log para ver la consulta generada
        logger.info("Consulta SPARQL generada:\n{}", consulta);

        // 📌 Obtener resultados en JSON-LD
        String jsonLdString = JenaConfig.obtenerResultadosComoJsonLD(consulta.toString());

        try {
            // 📌 Convertir String JSON-LD a Map para que Spring lo maneje correctamente
            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, Object> jsonResponse = objectMapper.readValue(jsonLdString, Map.class);

            return ResponseEntity.ok(jsonResponse);
        } catch (Exception e) {
            logger.error("Error procesando JSON-LD", e);
            return ResponseEntity.internalServerError().build();
        }
    }
}

package org.jordonez.spring.msvc_celular.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.jordonez.spring.msvc_celular.config.JenaConfig;
import org.jordonez.spring.msvc_celular.model.Celular;
import org.jordonez.spring.msvc_celular.service.CelularService;
import org.jordonez.spring.msvc_celular.service.KeywordService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*") // Permitir cualquier origen
@RestController
@RequestMapping("/api/celulares")
public class CelularController {

    private static final Logger logger = LoggerFactory.getLogger(CelularController.class);
    private final CelularService celularService;
    private final KeywordService keywordService;

    public CelularController(CelularService celularService, KeywordService keywordService) {
        this.celularService = celularService;
        this.keywordService = keywordService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> agregarCelular(@RequestBody Celular celular) {
        celularService.agregarCelular(celular);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Celular agregado correctamente");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/search")
    public ResponseEntity<Map<String, Object>> buscarCelulares(@RequestParam String query) {
        // ✅ Analizar la búsqueda y obtener los filtros detectados
        Map<String, String> filtros = keywordService.analizarBusqueda(query);

        // 📌 Construcción de la consulta SPARQL
        StringBuilder consulta = new StringBuilder("""
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX schema: <http://schema.org/>
        SELECT ?producto ?nombre ?marca ?precio ?categoria ?descripcion ?ram ?almacenamiento ?bateria ?procesador ?pantalla ?sistemaOperativo
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
            OPTIONAL { ?producto schema:operatingSystem ?sistemaOperativo }.
    """);

        // ✅ Aplicar filtros basados en palabras clave detectadas
        if (filtros.containsKey("nombre")) {
            consulta.append(" FILTER (REGEX(STR(?nombre), \"").append(filtros.get("nombre")).append("\", \"i\")) .\n");
        }
        if (filtros.containsKey("marca")) {
            consulta.append(" FILTER (REGEX(STR(?marca), \"").append(filtros.get("marca")).append("\", \"i\")) .\n");
        }
        if (filtros.containsKey("caracteristica")) {
            consulta.append(" FILTER (REGEX(STR(?descripcion), \"").append(filtros.get("caracteristica")).append("\", \"i\")) .\n");
        }
        if (filtros.containsKey("sistemaOperativo")) {
            consulta.append(" FILTER (REGEX(STR(?sistemaOperativo), \"").append(filtros.get("sistemaOperativo")).append("\", \"i\")) .\n");
        }
        if (filtros.containsKey("ram")) {
            consulta.append(" FILTER (REGEX(STR(?ram), \"").append(filtros.get("ram")).append("\", \"i\")) .\n");
        }
        if (filtros.containsKey("almacenamiento")) {
            consulta.append(" FILTER (REGEX(STR(?almacenamiento), \"").append(filtros.get("almacenamiento")).append("\", \"i\")) .\n");
        }
        if (filtros.containsKey("procesador")) {
            consulta.append(" FILTER (REGEX(STR(?procesador), \"").append(filtros.get("procesador")).append("\", \"i\")) .\n");
        }
        if (filtros.containsKey("pantalla")) {
            consulta.append(" FILTER (REGEX(STR(?pantalla), \"").append(filtros.get("pantalla")).append("\", \"i\")) .\n");
        }

        consulta.append("}");

        // 📌 Log para ver la consulta generada
        System.out.println("Consulta SPARQL generada:\n" + consulta);

        // 📌 Obtener resultados en JSON-LD
        String jsonLdString = JenaConfig.obtenerResultadosComoJsonLD(consulta.toString());

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, Object> jsonResponse = objectMapper.readValue(jsonLdString, Map.class);
            return ResponseEntity.ok(jsonResponse);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }


}

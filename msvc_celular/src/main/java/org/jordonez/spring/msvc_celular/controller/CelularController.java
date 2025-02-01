package org.jordonez.spring.msvc_celular.controller;

import org.apache.jena.query.*;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.riot.RDFDataMgr;
import org.apache.jena.riot.RDFFormat;
import org.jordonez.spring.msvc_celular.config.JenaConfig;
import org.jordonez.spring.msvc_celular.model.Celular;
import org.jordonez.spring.msvc_celular.service.CelularService;
import org.springframework.web.bind.annotation.*;

import java.io.StringWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/celulares")
public class CelularController {

    private final CelularService celularService;

    public CelularController(CelularService celularService) {
        this.celularService = celularService;
    }

    @PostMapping("/agregar")
    public String agregarCelular(@RequestBody Celular celular) {
        celularService.agregarCelular(celular);
        return "Celular agregado correctamente";
    }

    @GetMapping("/search")
    public String buscarCelularesSPARQL() {
        String consulta = """
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                                PREFIX schema: <http://schema.org/>\s
                                SELECT ?producto ?nombre ?marca ?precio ?categoria ?descripcion ?ram ?almacenamiento ?bateria ?procesador ?pantalla ?sistemaOperativo
                                WHERE {
                                    ?producto a schema:Celular . # ✅ Cambiado de schema:Celular a schema:Product
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

    @GetMapping("/rdf/turtle")
    public String obtenerCelularesEnTurtle() {
        Model model = celularService.aplicarInferencias(celularService.getModel());
        return modelToString(model, "TURTLE");
    }

    @GetMapping("/rdf/jsonld")
    public String obtenerCelularesEnJsonLD() {
        Model model = celularService.aplicarInferencias(celularService.getModel());
        return modelToString(model, "JSON-LD");
    }

    private String modelToString(Model model, String format) {
        StringWriter out = new StringWriter();
        RDFFormat rdfFormat;

        switch (format.toUpperCase()) {
            case "TURTLE":
                rdfFormat = RDFFormat.TURTLE;
                break;
            case "JSON-LD":
                rdfFormat = RDFFormat.JSONLD;
                break;
            case "RDF/XML":
                rdfFormat = RDFFormat.RDFXML;
                break;
            default:
                rdfFormat = RDFFormat.TURTLE; // ✅ Valor por defecto
        }

        RDFDataMgr.write(out, model, rdfFormat);
        return out.toString();
    }

    @GetMapping("/recomendaciones/{id}")
    public List<Map<String, String>> recomendarCelulares(@PathVariable String id) {
        Model model = celularService.getModel();

        // 🔍 Obtener la marca del celular cuyo ID fue pasado
        String marca = obtenerMarca(id, model);

        if (marca == null) {
            return List.of(Map.of("error", "No se encontró la marca del celular con ID " + id));
        }

        System.out.println("✅ Marca encontrada: " + marca);

        // 📌 Consulta SPARQL para buscar celulares de la misma marca
        String consultaSPARQL = """
        PREFIX schema: <http://schema.org/>
        SELECT ?producto ?nombre ?marca ?precio
        WHERE {
            ?producto a schema:Celular ;
                      schema:name ?nombre ;
                      schema:brand ?marca ;
                      schema:price ?precio .
            FILTER(?marca = "%s") 
        }
    """.formatted(marca);

        // ✅ Imprimir la consulta en la consola para depuración
        System.out.println("🔍 Consulta SPARQL enviada al servidor:");
        System.out.println(consultaSPARQL);

        return ejecutarConsultaSPARQL(model, consultaSPARQL);
    }


    /**
     * 📌 Obtener el sistema operativo de un celular por su ID
     */
    private String obtenerMarca(String id, Model model) {
        String uriBuscada = "http://example.com/celular/" + id;
        System.out.println("🔍 Buscando marca para URI: " + uriBuscada);

        String consultaSPARQL = """
        PREFIX schema: <http://schema.org/>
        SELECT ?marca
        WHERE {
            <%s> schema:brand ?marca .
        }
    """.formatted(uriBuscada);

        // ✅ Imprimir la consulta para depuración
        System.out.println("🔍 Consulta SPARQL para obtener la marca:");
        System.out.println(consultaSPARQL);

        List<Map<String, String>> resultado = ejecutarConsultaSPARQL(model, consultaSPARQL);

        if (resultado.isEmpty() || !resultado.get(0).containsKey("marca") || resultado.get(0).get("marca") == null) {
            System.out.println("❌ No se encontró marca para URI: " + uriBuscada);
            return null;
        }

        return resultado.get(0).get("marca");
    }


    /**
     * 📌 Ejecuta consultas SPARQL sobre el modelo RDF
     */
    private List<Map<String, String>> ejecutarConsultaSPARQL(Model model, String consultaSPARQL) {
        List<Map<String, String>> resultados = new ArrayList<>();
        try (QueryExecution qexec = QueryExecutionFactory.create(QueryFactory.create(consultaSPARQL), model)) {
            ResultSet results = qexec.execSelect();
            while (results.hasNext()) {
                QuerySolution soln = results.nextSolution();
                Map<String, String> resultado = new HashMap<>();

                // ✅ Evita `NullPointerException`
                if (soln.contains("producto")) {
                    resultado.put("producto", soln.get("producto").toString());
                }
                if (soln.contains("nombre")) {
                    resultado.put("nombre", soln.get("nombre").toString());
                }
                if (soln.contains("marca")) {
                    resultado.put("marca", soln.get("marca").toString());
                }
                if (soln.contains("precio")) {
                    resultado.put("precio", soln.get("precio").toString());
                }
                if (soln.contains("sistemaOperativo")) {
                    resultado.put("sistemaOperativo", soln.get("sistemaOperativo").toString());
                }

                resultados.add(resultado);
            }
        }
        return resultados;
    }

}


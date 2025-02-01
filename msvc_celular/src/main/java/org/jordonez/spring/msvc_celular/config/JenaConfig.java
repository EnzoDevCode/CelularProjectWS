package org.jordonez.spring.msvc_celular.config;

import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.query.*;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.util.FileManager;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class JenaConfig {

    private static final String RDF_FILE = "src/main/resources/rows.rdf";

    public static ResultSet ejecutarConsulta(String consultaSPARQL) {
        OntModel modelo = ModelFactory.createOntologyModel(OntModelSpec.OWL_MEM, null);
        try (InputStream in = FileManager.get().open(RDF_FILE)) {
            modelo.read(in, null);
            Query query = QueryFactory.create(consultaSPARQL);
            QueryExecution qe = QueryExecutionFactory.create(query, modelo);
            return qe.execSelect();
        } catch (Exception e) {
            throw new RuntimeException("Error ejecutando SPARQL", e);
        }
    }

    public static List<String> obtenerResultados(String consultaSPARQL) {
        ResultSet resultados = ejecutarConsulta(consultaSPARQL);
        List<String> listaResultados = new ArrayList<>();
        while (resultados.hasNext()) {
            QuerySolution solucion = resultados.nextSolution();
            listaResultados.add(solucion.get("nombre").toString());
        }
        return listaResultados;
    }

    public static List<Map<String, Object>> obtenerResultadosComoJsonLD(String consultaSPARQL) {
        ResultSet resultados = ejecutarConsulta(consultaSPARQL);
        List<Map<String, Object>> listaResultados = new ArrayList<>();

        while (resultados.hasNext()) {
            QuerySolution solucion = resultados.nextSolution();
            Map<String, Object> jsonLD = new HashMap<>();

            jsonLD.put("@context", "http://schema.org");
            jsonLD.put("@type", "Celular");

            if (solucion.contains("nombre")) {
                jsonLD.put("name", solucion.get("nombre").toString());
            }
            if (solucion.contains("marca")) {
                jsonLD.put("brand", solucion.get("marca").toString());
            }
            if (solucion.contains("precio")) {
                jsonLD.put("price", solucion.get("precio").toString());
            }
            if (solucion.contains("categoria")) {
                jsonLD.put("category", solucion.get("categoria").toString());
            }
            if (solucion.contains("descripcion")) {
                jsonLD.put("description", solucion.get("descripcion").toString());
            }
            if (solucion.contains("ram")) {
                jsonLD.put("ram", solucion.get("ram").toString());
            }
            if (solucion.contains("almacenamiento")) {
                jsonLD.put("storage", solucion.get("almacenamiento").toString());
            }
            if (solucion.contains("bateria")) {
                jsonLD.put("battery", solucion.get("bateria").toString());
            }
            if (solucion.contains("procesador")) {
                jsonLD.put("processor", solucion.get("procesador").toString());
            }
            if (solucion.contains("pantalla")) {
                jsonLD.put("screen", solucion.get("pantalla").toString());
            }
            if (solucion.contains("sistemaOperativo")) {
                jsonLD.put("operatingSystem", solucion.get("sistemaOperativo").toString());
            }

            listaResultados.add(jsonLD);
        }
        return listaResultados;
    }


}


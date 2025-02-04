package org.jordonez.spring.msvc_celular.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.io.output.ByteArrayOutputStream;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.query.*;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.RDFNode;
import org.apache.jena.riot.RDFDataMgr;
import org.apache.jena.riot.RDFFormat;
import org.apache.jena.util.FileManager;
import org.jordonez.spring.msvc_celular.model.Celular;
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

            // ✅ Manejar valores nulos antes de llamar a .toString()
            RDFNode resultadoNode = solucion.get("sugerencia"); // Asegúrate de que "sugerencia" es el nombre correcto en la consulta
            if (resultadoNode != null) {
                listaResultados.add(resultadoNode.toString());
            }
        }

        return listaResultados;
    }


    public static String obtenerResultadosComoJsonLD(String consultaSPARQL) {
        // 🔥 Cargar el modelo RDF desde el archivo
        Model modelo = ModelFactory.createDefaultModel();
        try (InputStream in = FileManager.get().open(RDF_FILE)) {
            if (in == null) {
                throw new RuntimeException("No se pudo encontrar el archivo RDF: " + RDF_FILE);
            }
            modelo.read(in, null);
        } catch (Exception e) {
            throw new RuntimeException("Error leyendo el archivo RDF", e);
        }

        // 🔥 Ejecutar la consulta SPARQL sobre el modelo RDF
        Query query = QueryFactory.create(consultaSPARQL);
        Model modeloResultados = ModelFactory.createDefaultModel(); //  Modelo RDF para guardar los resultados filtrados

        try (QueryExecution qexec = QueryExecutionFactory.create(query, modelo)) {
            ResultSet results = qexec.execSelect();
            QuerySolution solution;

            //  Convertir resultados a un nuevo modelo RDF
            while (results.hasNext()) {
                solution = results.nextSolution();
                modeloResultados.add(modelo.listStatements(solution.getResource("?producto"), null, (String) null));
            }
        } catch (Exception e) {
            throw new RuntimeException("Error ejecutando SPARQL en el archivo RDF", e);
        }

        // 🔥 Convertir el modelo filtrado a JSON-LD
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        RDFDataMgr.write(outputStream, modeloResultados, RDFFormat.JSONLD);

        // 📌 Mostrar los resultados en consola para debugging
        System.out.println("Resultados SPARQL filtrados en JSON-LD:\n" + outputStream.toString());

        return outputStream.toString();
    }

}


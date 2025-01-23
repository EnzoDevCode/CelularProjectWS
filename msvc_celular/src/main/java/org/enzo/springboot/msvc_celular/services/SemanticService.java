package org.enzo.springboot.msvc_celular.services;

import org.apache.jena.rdf.model.*;
import org.apache.jena.riot.RDFDataMgr;
import org.apache.jena.riot.RDFFormat;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.io.StringWriter;

@Service
public class SemanticService {
    private static final String ONTOLOGY_FILE = "/celular.owl"; // ✅ Nombre del archivo sin slash
    private final Model model;

    public SemanticService() {
        model = ModelFactory.createDefaultModel();
        try {
            // Usamos el ClassLoader para obtener el archivo desde resources
            InputStream in = Thread.currentThread().getContextClassLoader().getResourceAsStream(ONTOLOGY_FILE);
            if (in == null) {
                throw new RuntimeException("No se pudo encontrar la ontología: " + ONTOLOGY_FILE);
            }
            RDFDataMgr.read(model, in, null);
        } catch (Exception e) {
            throw new RuntimeException("Error cargando la ontología RDF", e);
        }
    }

    public Model getModel() {
        return model;
    }

    public String getOntologyAsRDF() {
        StringWriter out = new StringWriter();
        model.write(out, "TURTLE");
        return out.toString();
    }

    public String getOntologyAsJSONLD() {
        StringWriter out = new StringWriter();
        RDFDataMgr.write(out, model, RDFFormat.JSONLD);
        return out.toString();
    }
}

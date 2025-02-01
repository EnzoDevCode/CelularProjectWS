package org.jordonez.spring.msvc_celular.service;

import org.apache.jena.rdf.model.*;
import org.jordonez.spring.msvc_celular.model.Celular;
import org.springframework.stereotype.Service;

import java.io.FileWriter;
import java.io.IOException;

@Service
public class CelularService {

    private static final String BASE_URI = "http://example.com/celular/";
    private static final String SCHEMA = "http://schema.org/";
    private static final String RDF_FILE = "src/main/resources/rows.rdf";

    private final Model modelo;

    public CelularService() {
        this.modelo = ModelFactory.createDefaultModel();
    }

    public void agregarCelular(Celular celular) {
        Resource celularResource = modelo.createResource(BASE_URI + celular.getId())
                .addProperty(modelo.createProperty(SCHEMA, "name"), celular.getNombre())
                .addProperty(modelo.createProperty(SCHEMA, "brand"), celular.getMarca())
                .addProperty(modelo.createProperty(SCHEMA, "price"), celular.getPrecio())
                .addProperty(modelo.createProperty(SCHEMA, "category"), celular.getCategoria());

        guardarEnArchivo();
    }

    private void guardarEnArchivo() {
        try (FileWriter out = new FileWriter(RDF_FILE)) {
            modelo.write(out, "RDF/XML");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

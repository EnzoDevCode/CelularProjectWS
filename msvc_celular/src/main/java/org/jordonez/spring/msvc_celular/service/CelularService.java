package org.jordonez.spring.msvc_celular.service;

import org.apache.jena.rdf.model.*;
import org.apache.jena.vocabulary.RDF;
import org.jordonez.spring.msvc_celular.model.Celular;
import org.springframework.stereotype.Service;

import java.io.*;

@Service
public class CelularService {

    private static final String BASE_URI = "http://example.com/celular/";
    private static final String SCHEMA = "http://schema.org/";
    private static final String RDF_FILE = "src/main/resources/rows.rdf";

    private Model modelo;

    public CelularService() {
        this.modelo = ModelFactory.createDefaultModel();
        cargarDatosExistentes(); // ✅ Cargar datos previos al iniciar el servicio
    }

    public void agregarCelular(Celular celular) {
        // ✅ Crear recurso RDF con `rdf:type schema:Product`
        Resource celularResource = modelo.createResource(BASE_URI + celular.getId())
                .addProperty(RDF.type, modelo.createResource(SCHEMA + "Celular"))
                .addProperty(modelo.createProperty(SCHEMA, "name"), celular.getNombre())
                .addProperty(modelo.createProperty(SCHEMA, "brand"), celular.getMarca())
                .addProperty(modelo.createProperty(SCHEMA, "price"), celular.getPrecio())
                .addProperty(modelo.createProperty(SCHEMA, "category"), celular.getCategoria())
                .addProperty(modelo.createProperty(SCHEMA, "description"), celular.getDescripcion())
                .addProperty(modelo.createProperty(SCHEMA, "ram"), celular.getRam())
                .addProperty(modelo.createProperty(SCHEMA, "storage"), celular.getAlmacenamiento())
                .addProperty(modelo.createProperty(SCHEMA, "battery"), celular.getBateria())
                .addProperty(modelo.createProperty(SCHEMA, "processor"), celular.getProcesador())
                .addProperty(modelo.createProperty(SCHEMA, "screen"), celular.getPantalla());
        // Omitir la propiedad operatingSystem para que la inferencia la deduzca automáticamente
        if (celular.getSistemaOperativo() != null) {
            celularResource.addProperty(modelo.createProperty(SCHEMA, "operatingSystem"), celular.getSistemaOperativo());
        }

        guardarEnArchivo();
    }

    private void guardarEnArchivo() {
        try (FileWriter out = new FileWriter(RDF_FILE)) {
            modelo.setNsPrefix("schema", SCHEMA); // ✅ Asegurar prefijo correcto en RDF
            modelo.write(out, "RDF/XML");  // ✅ Guardar en formato con `rdf:Description`
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void cargarDatosExistentes() {
        File archivo = new File(RDF_FILE);

        // ✅ Si el archivo no existe, se crea vacío
        if (!archivo.exists()) {
            try {
                archivo.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        // ✅ Intentar leer solo si el archivo no está vacío
        if (archivo.length() > 0) {
            try (InputStream in = new FileInputStream(RDF_FILE)) {
                modelo.read(in, null);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

}
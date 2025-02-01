package org.jordonez.spring.msvc_celular.service;

import org.apache.jena.rdf.model.*;
import org.apache.jena.reasoner.Reasoner;
import org.apache.jena.reasoner.rulesys.GenericRuleReasoner;
import org.apache.jena.reasoner.rulesys.Rule;
import org.apache.jena.util.FileManager;
import org.apache.jena.vocabulary.RDF;
import org.jordonez.spring.msvc_celular.model.Celular;
import org.springframework.stereotype.Service;
import java.io.*;
import java.util.List;

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
        // ✅ Crear recurso RDF con los datos iniciales
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

        // ✅ Aplicar inferencia para completar los atributos faltantes
        Model inferido = aplicarInferencias(modelo);

        // ✅ Guardar el RDF con los datos inferidos
        guardarEnArchivo(inferido);
    }

    private void guardarEnArchivo(Model model) {
        try (FileWriter out = new FileWriter(RDF_FILE)) {
            model.setNsPrefix("schema", SCHEMA); // ✅ Asegurar prefijo correcto en RDF
            model.write(out, "RDF/XML");  // ✅ Guardar en formato RDF/XML
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void cargarDatosExistentes() {
        File archivo = new File(RDF_FILE);
        if (!archivo.exists()) {
            try {
                archivo.createNewFile();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        if (archivo.length() > 0) {
            try (InputStream in = new FileInputStream(RDF_FILE)) {
                modelo.read(in, null);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    // ✅ Aplicar inferencias y devolver el modelo modificado
    private Model aplicarInferencias(Model model) {
        File file = new File("src/main/resources/rules.txt");
        System.out.println("🔍 Probando acceso a rules.txt en: " + file.getAbsolutePath());

        if (!file.exists()) {
            System.out.println("❌ Archivo rules.txt NO encontrado en " + file.getAbsolutePath());
            throw new RuntimeException("No se encontró rules.txt en la ruta absoluta.");
        } else {
            System.out.println("✅ Archivo rules.txt encontrado en " + file.getAbsolutePath());
        }

        InputStream reglasStream;
        try {
            reglasStream = new FileInputStream(file);
        } catch (FileNotFoundException e) {
            throw new RuntimeException("Error al abrir rules.txt", e);
        }

        // ✅ Leer el archivo como un String
        StringBuilder reglasString = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(reglasStream))) {
            String linea;
            while ((linea = reader.readLine()) != null) {
                reglasString.append(linea).append("\n");
            }
        } catch (IOException e) {
            throw new RuntimeException("Error leyendo rules.txt", e);
        }

        // ✅ Convertir el String en una lista de reglas
        List<Rule> reglas = Rule.parseRules(reglasString.toString());

        Reasoner razonador = new GenericRuleReasoner(reglas);
        razonador.setDerivationLogging(true);

        // ✅ Aplicar razonamiento
        InfModel infModel = ModelFactory.createInfModel(razonador, model);
        return infModel;
    }
}

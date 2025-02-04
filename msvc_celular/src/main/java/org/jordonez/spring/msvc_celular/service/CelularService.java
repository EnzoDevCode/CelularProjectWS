package org.jordonez.spring.msvc_celular.service;

import org.apache.jena.rdf.model.*;
import org.apache.jena.reasoner.Reasoner;
import org.apache.jena.reasoner.rulesys.GenericRuleReasoner;
import org.apache.jena.reasoner.rulesys.Rule;
import org.apache.jena.util.FileManager;
import org.apache.jena.vocabulary.RDF;
import org.jordonez.spring.msvc_celular.model.Celular;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.*;
import java.util.List;

@Service
public class CelularService {

    private static final String BASE_URI = "http://example.com/celular/";
    private static final String SCHEMA = "http://schema.org/";
    private static final String RDF_FILE = "src/main/resources/rows.rdf";
    private static final String RULES_FILE = "src/main/resources/rules.txt";

    private Model modelo;
    private final Reasoner reasoner;

    public CelularService() {
        this.modelo = ModelFactory.createDefaultModel();
        this.reasoner = cargarReasoner();
        cargarDatosExistentes();
    }

    private Reasoner cargarReasoner() {
        File file = new File(RULES_FILE);
        if (!file.exists()) {
            throw new RuntimeException("❌ No se encontró rules.txt en " + file.getAbsolutePath());
        }

        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            StringBuilder reglasString = new StringBuilder();
            String linea;
            while ((linea = reader.readLine()) != null) {
                reglasString.append(linea).append("\n");
            }
            return new GenericRuleReasoner(Rule.parseRules(reglasString.toString()));
        } catch (IOException e) {
            throw new RuntimeException("❌ Error leyendo rules.txt", e);
        }
    }

    private String generarIdUnico() {
        return "cel-" + System.currentTimeMillis();
    }


    public void agregarCelular(Celular celular) {

        if (celular.getId() == null || celular.getId().trim().isEmpty()) {
            celular.setId(generarIdUnico());
        }

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

        if ("Apple".equalsIgnoreCase(celular.getMarca())) {
            celularResource.addProperty(modelo.createProperty(SCHEMA, "sameAs"),
                    modelo.createResource("http://dbpedia.org/resource/Apple_Inc."));
        } else if ("Samsung".equalsIgnoreCase(celular.getMarca())) {
            celularResource.addProperty(modelo.createProperty(SCHEMA, "sameAs"),
                    modelo.createResource("http://dbpedia.org/resource/Samsung"));
        } else if ("Huawei".equalsIgnoreCase(celular.getMarca())) {
            celularResource.addProperty(modelo.createProperty(SCHEMA, "sameAs"),
                    modelo.createResource("http://dbpedia.org/resource/Huawei"));
        }

        celularResource.addProperty(modelo.createProperty(SCHEMA, "category"),
                modelo.createResource("http://www.wikidata.org/entity/Q22686"));


        // ✅ Aplicar inferencia para completar los atributos faltantes
        modelo = aplicarInferencias(modelo);

        // ✅ Guardar el RDF con los datos inferidos
        guardarEnArchivo(modelo);
    }

    private void guardarEnArchivo(Model model) {
        try {
            model.setNsPrefix("schema", SCHEMA);

            // ✅ Limpiar el archivo antes de guardar
            File file = new File(RDF_FILE);
            if (file.exists()) {
                file.delete();
            }

            try (FileWriter out = new FileWriter(RDF_FILE, false)) {
                model.write(out, "RDF/XML");
            }
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
    public Model aplicarInferencias(Model model) {
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
        infModel.prepare();
        return infModel;
    }

    public Model getModel() {
        return modelo;
    }
}

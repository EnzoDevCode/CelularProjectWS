package org.jordonez.spring.msvc_celular.service;

import org.apache.jena.rdf.model.*;
import org.apache.jena.reasoner.Reasoner;
import org.apache.jena.reasoner.rulesys.GenericRuleReasoner;
import org.apache.jena.reasoner.rulesys.Rule;
import org.apache.jena.util.FileManager;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.List;

@Service
public class InferenciaService {

    private static final String RDF_FILE = "src/main/resources/rows.rdf";

    public Model aplicarInferencias() {
        Model model = ModelFactory.createDefaultModel();

        // ✅ Cargar el modelo RDF existente
        InputStream in = FileManager.get().open(RDF_FILE);
        if (in != null) {
            model.read(in, null);
        }


        // ✅ Cargar reglas desde el archivo con manejo de excepciones
        File file = new File("src/main/resources/rules.txt");
        System.out.println("🔍 Probando acceso a rules.txt en: " + file.getAbsolutePath());

        if (!file.exists()) {
            System.out.println("❌ Archivo rules.txt NO encontrado en " + file.getAbsolutePath());
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

package org.jordonez.spring.msvc_celular.service;

import org.apache.jena.rdf.model.*;
import org.apache.jena.reasoner.Reasoner;
import org.apache.jena.reasoner.rulesys.GenericRuleReasoner;
import org.apache.jena.reasoner.rulesys.Rule;
import org.apache.jena.util.FileManager;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.List;

@Service
public class InferenciaService {

    private static final String RDF_FILE = "src/main/resources/rows.rdf";
    private static final String RULES_FILE = "src/main/resources/rules.txt";

    public Model aplicarInferencias() {
        Model model = ModelFactory.createDefaultModel();

        // ✅ Cargar el modelo RDF existente
        InputStream in = FileManager.get().open(RDF_FILE);
        if (in != null) {
            model.read(in, null);
        }

        // ✅ Cargar reglas desde el archivo
        List<Rule> reglas = Rule.rulesFromURL(RULES_FILE);
        Reasoner razonador = new GenericRuleReasoner(reglas);
        razonador.setDerivationLogging(true);

        // ✅ Aplicar razonamiento
        InfModel infModel = ModelFactory.createInfModel(razonador, model);
        return infModel;
    }
}

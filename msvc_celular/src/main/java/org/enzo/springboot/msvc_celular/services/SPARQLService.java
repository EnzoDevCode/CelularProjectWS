package org.enzo.springboot.msvc_celular.services;
import org.apache.jena.query.*;
import org.apache.jena.rdf.model.Model;
import org.springframework.stereotype.Service;

@Service
public class SPARQLService {
    private static final String QUERY_PREFIXES = """
        PREFIX ex: <http://example.org/celular#>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    """;

    private final Model model;

    public SPARQLService(SemanticService semanticService) {
        this.model = semanticService.getModel();
    }

    public String executeSPARQLQuery(String sparqlQuery) {
        Query query = QueryFactory.create(QUERY_PREFIXES + sparqlQuery);
        try (QueryExecution qexec = QueryExecutionFactory.create(query, model)) {
            ResultSet results = qexec.execSelect();
            return ResultSetFormatter.asText(results);
        }
    }
}


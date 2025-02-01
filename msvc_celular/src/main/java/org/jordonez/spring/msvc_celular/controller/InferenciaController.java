package org.jordonez.spring.msvc_celular.controller;

import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.RDFWriterI;
import org.jordonez.spring.msvc_celular.service.InferenciaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayOutputStream;

@RestController
@RequestMapping("/api/inferencia")
public class InferenciaController {

    private final InferenciaService inferenciaService;

    public InferenciaController(InferenciaService inferenciaService) {
        this.inferenciaService = inferenciaService;
    }

    @GetMapping
    public String obtenerInferencias() {
        Model infModel = inferenciaService.aplicarInferencias();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        RDFWriterI writer = infModel.getWriter("RDF/XML-ABBREV");
        writer.write(infModel, out, null);
        return out.toString();
    }
}
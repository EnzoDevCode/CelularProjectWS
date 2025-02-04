package org.jordonez.spring.msvc_celular.controller;

import org.jordonez.spring.msvc_celular.service.KeywordService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/sugerencias")
public class KeywordController {

    private final KeywordService keywordService;

    public KeywordController(KeywordService keywordService) {
        this.keywordService = keywordService;
    }

    @GetMapping
    public List<String> obtenerSugerencias(@RequestParam String query) {
        return keywordService.obtenerSugerencias(query);
    }
}

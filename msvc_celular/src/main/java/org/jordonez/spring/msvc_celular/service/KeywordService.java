package org.jordonez.spring.msvc_celular.service;

import org.apache.jena.query.*;
import org.jordonez.spring.msvc_celular.config.JenaConfig;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class KeywordService {
    private static final List<String> MARCAS = Arrays.asList("Apple", "Samsung", "Motorola", "Xiaomi", "Huawei", "Oppo", "OnePlus", "Realme", "Google", "Sony", "LG", "Nokia");

    private static final List<String> CATEGORIAS = Arrays.asList("Smartphone", "Tablet", "Phablet", "Feature phone", "Gama alta", "Gama media", "Gama baja");

    private static final List<String> SISTEMAS_OPERATIVOS = Arrays.asList("Android", "iOS", "HarmonyOS", "KaiOS", "Windows Phone");

    private static final List<String> CARACTERISTICAS_CLAVE = Arrays.asList("Batería potente", "Carga rápida", "Pantalla grande", "Resistente al agua", "Compatible con 5G", "Pantalla AMOLED", "Sensor de huellas", "Reconocimiento facial", "PIZZA");

    private static final List<String> NOMBRES_DISPOSITIVOS = Arrays.asList("iPhone 15", "iPhone 14", "Galaxy S24", "Galaxy Z Flip 5", "Pixel 8 Pro", "Xiaomi 13 Ultra", "Moto Edge 40", "OnePlus 12", "Sony Xperia 1 V");

    private static final List<String> ESPECIFICACIONES = Arrays.asList("6GB de RAM", "8GB de RAM", "12GB de RAM", "16GB de RAM", "128GB de almacenamiento", "256GB de almacenamiento", "512GB de almacenamiento", "Snapdragon 8 Gen 2", "Exynos 2400", "MediaTek Dimensity 9200", "Pantalla de 6.1 pulgadas", "Pantalla de 6.7 pulgadas", "Pantalla de 7.6 pulgadas");
    private static final List<String> PALABRAS_CLAVE = new ArrayList<>(Arrays.asList("Apple", "Samsung", "Motorola", "Xiaomi", "Android", "iOS", "Gama alta", "Gama media", "Gama baja", "5G", "Pantalla grande", "Batería potente", "Baratos", "Caros"));

    // Método para obtener sugerencias semánticas desde RDF
    public List<String> obtenerSugerencias(String textoBusqueda) {
        if (textoBusqueda == null || textoBusqueda.trim().isEmpty()) {
            return new ArrayList<>();
        }

        // Escapar caracteres especiales en la búsqueda
        textoBusqueda = textoBusqueda.replace("\"", "\\\"");

        // Construcción de la consulta SPARQL
        String consultaSPARQL = """
                    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                                                    PREFIX schema: <http://schema.org/>
                                                    
                                                    SELECT DISTINCT ?sugerencia ?prioridad WHERE {
                                                        ?producto rdf:type schema:Celular .
                                                        OPTIONAL { ?producto schema:name ?nombre }.
                                                        OPTIONAL { ?producto schema:brand ?marca }.
                                                        OPTIONAL { ?producto schema:category ?categoria }.
                                                        OPTIONAL { ?producto schema:processor ?procesador }.
                                                        OPTIONAL { ?producto schema:ram ?ram }.
                                                        OPTIONAL { ?producto schema:storage ?almacenamiento }.
                                                        OPTIONAL { ?producto schema:operatingSystem ?sistemaOperativo }.
                                                    
                                                        # 📌 Filtrar palabras clave en múltiples atributos
                                                        FILTER (
                                                            REGEX(STR(?nombre), "%1$s", "i") ||\s
                                                            REGEX(STR(?marca), "%1$s", "i") ||\s
                                                            REGEX(STR(?categoria), "%1$s", "i") ||\s
                                                            REGEX(STR(?procesador), "%1$s", "i") ||
                                                            REGEX(STR(?ram), "%1$s", "i") ||
                                                            REGEX(STR(?almacenamiento), "%1$s", "i") ||
                                                            REGEX(STR(?sistemaOperativo), "%1$s", "i")
                                                        )
                                                    
                                                        # 📌 Asignar prioridad a cada tipo de sugerencia
                                                        { BIND(CONCAT("Celulares ", ?marca) AS ?sugerencia) BIND(1 AS ?prioridad) }
                                                        UNION
                                                        { BIND(?nombre AS ?sugerencia) BIND(2 AS ?prioridad) }
                                                        UNION
                                                        { BIND(CONCAT(?categoria) AS ?sugerencia) BIND(6 AS ?prioridad) }
                                                        UNION
                                                        { BIND(CONCAT("Celulares con ", ?ram, " de RAM") AS ?sugerencia) BIND(3 AS ?prioridad) }
                                                        UNION
                                                        { BIND(CONCAT("Celulares con ", ?almacenamiento, " de almacenamiento") AS ?sugerencia) BIND(4 AS ?prioridad) }
                                                        UNION
                                                        { BIND(CONCAT(?sistemaOperativo) AS ?sugerencia) BIND(5 AS ?prioridad) }
                                                    }
                                                    ORDER BY ASC(?prioridad) ASC(?sugerencia)
                                                    LIMIT 6                                                            
                """.formatted(textoBusqueda);

        try {
            List<String> resultados = JenaConfig.obtenerResultados(consultaSPARQL);

            if (resultados.isEmpty()) {
                System.out.println("⚠️ No se encontraron coincidencias para: " + textoBusqueda);
            }

            return resultados;
        } catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>(); // Evitar fallos en la interfaz
        }
    }

    // 🔍 Método para detectar palabras clave en tiempo real
    public List<String> detectarPalabrasClave(String entrada) {
        if (entrada == null || entrada.trim().isEmpty()) {
            return new ArrayList<>();
        }

        List<String> coincidencias = new ArrayList<>();
        for (String palabra : PALABRAS_CLAVE) {
            if (palabra.toLowerCase().startsWith(entrada.toLowerCase())) {
                coincidencias.add(palabra);
            }
        }
        return coincidencias;
    }

    // 🔍 Detecta palabras clave en la búsqueda del usuario
    public Map<String, String> analizarBusqueda(String texto) {
        Map<String, String> filtros = new HashMap<>();

        // ✅ Buscar si hay una marca en el texto
        for (String marca : MARCAS) {
            if (texto.toLowerCase().contains(marca.toLowerCase())) {
                filtros.put("marca", marca);
                break;
            }
        }

// ✅ Buscar si hay características específicas
        for (String caracteristica : CARACTERISTICAS_CLAVE) {
            if (texto.toLowerCase().contains(caracteristica.toLowerCase())) {
                filtros.put("caracteristica", caracteristica);
                break;
            }
        }

// ✅ Buscar sistema operativo
        for (String so : SISTEMAS_OPERATIVOS) {
            if (texto.toLowerCase().contains(so.toLowerCase())) {
                filtros.put("sistemaOperativo", so);
                break;
            }
        }

// ✅ Buscar nombre del dispositivo
        for (String nombre : NOMBRES_DISPOSITIVOS) {
            if (texto.toLowerCase().contains(nombre.toLowerCase())) {
                filtros.put("nombre", nombre);
                break;
            }
        }

// ✅ Buscar especificaciones técnicas (RAM, almacenamiento, procesador, pantalla)
        for (String especificacion : ESPECIFICACIONES) {
            if (texto.toLowerCase().contains(especificacion.toLowerCase())) {
                if (especificacion.contains("RAM")) {
                    filtros.put("ram", especificacion.replace(" de RAM", ""));
                } else if (especificacion.contains("almacenamiento")) {
                    filtros.put("almacenamiento", especificacion.replace(" de almacenamiento", ""));
                } else if (especificacion.contains("Snapdragon") || especificacion.contains("Exynos") || especificacion.contains("MediaTek")) {
                    filtros.put("procesador", especificacion);
                } else if (especificacion.contains("Pantalla")) {
                    filtros.put("pantalla", especificacion.replace("Pantalla de ", ""));
                }
                break;
            }
        }


        return filtros; // Retorna un mapa con los filtros detectados
    }
}

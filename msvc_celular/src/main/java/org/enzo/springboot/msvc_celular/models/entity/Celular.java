package org.enzo.springboot.msvc_celular.models.entity;
import lombok.Data;

@Data
public class Celular {
    private String id; // URI en RDF
    private String nombre;
    private String modelo;
    private String marca;
    private String sistemaOperativo;
    private double precio;

}


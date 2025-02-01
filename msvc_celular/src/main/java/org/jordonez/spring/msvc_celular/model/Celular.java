package org.jordonez.spring.msvc_celular.model;

public class Celular {
    private String id;
    private String nombre;
    private String marca;
    private String precio;
    private String categoria;

    public Celular() {}

    public Celular(String id, String nombre, String marca, String precio, String categoria) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.categoria = categoria;
    }

    public String getId() { return id; }
    public String getNombre() { return nombre; }
    public String getMarca() { return marca; }
    public String getPrecio() { return precio; }
    public String getCategoria() { return categoria; }
}

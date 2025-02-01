package org.jordonez.spring.msvc_celular.model;

public class Celular {
    private String id;
    private String nombre;
    private String marca;
    private String precio;
    private String categoria;
    private String descripcion;
    private String ram;
    private String almacenamiento;
    private String bateria;
    private String procesador;
    private String pantalla;
    private String sistemaOperativo;

    public Celular() {}

    public Celular(String id, String nombre, String marca, String precio, String categoria, String descripcion,
                   String ram, String almacenamiento, String bateria, String procesador, String pantalla, String sistemaOperativo) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.bateria = bateria;
        this.procesador = procesador;
        this.pantalla = pantalla;
        this.sistemaOperativo = sistemaOperativo;
    }

    // Getters y Setters
    public String getId() { return id; }
    public String getNombre() { return nombre; }
    public String getMarca() { return marca; }
    public String getPrecio() { return precio; }
    public String getCategoria() { return categoria; }
    public String getDescripcion() { return descripcion; }
    public String getRam() { return ram; }
    public String getAlmacenamiento() { return almacenamiento; }
    public String getBateria() { return bateria; }
    public String getProcesador() { return procesador; }
    public String getPantalla() { return pantalla; }
    public String getSistemaOperativo() { return sistemaOperativo; }
}

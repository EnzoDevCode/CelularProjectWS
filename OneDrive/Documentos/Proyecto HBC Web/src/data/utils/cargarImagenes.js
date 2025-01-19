// src/data/utils/cargarImagenes.js

const cargarTodasLasImagenes = require.context('../../images/images-tour', true, /\.(png|jpe?g|svg)$/);

export const obtenerImagenPrincipal = (nombreImagen) => {
  try {
    return cargarTodasLasImagenes(`./${nombreImagen}`); 
  } catch (error) {
    console.error(`Imagen principal no encontrada: ${nombreImagen}`);
    return null; 
  }
};

export const obtenerRutaImagenesPaquete = (nombreCarpeta) => {
  return cargarTodasLasImagenes.keys()
    .filter((ruta) => ruta.includes(nombreCarpeta)) // Filtra imágenes en la subcarpeta
    .map(cargarTodasLasImagenes);
};

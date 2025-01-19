// src/data/toursLatinoamerica.js
import { obtenerImagenPrincipal, obtenerRutaImagenesPaquete } from './utils/cargarImagenes';

export const toursLatinoamerica = [
  {
    id: 4,
    tipo: "TODO EL DÍA",
    backgroundTitle: "Cartagena",
    title: "Cartagena de Indias",
    subtitle: "Historia y Encanto Caribeño",
    link: "cartagena",
    description: "Explora la joya del Caribe colombiano, con historia y playas hermosas.",
    descriptionm: "Explora la joya del Caribe colombiano...",
    location: "Colombia - Sudamérica",
    imagenPrincipal: obtenerImagenPrincipal("cartagena.jpg"),
    clienteFotos: obtenerRutaImagenesPaquete("cartagena"),
    itinerario: {
      cronograma: [
        {
          titulo: "Mañana cultural",
          hora: "10:00 AM",
          actividades: [
            "• Recorrido por la Ciudad Amurallada.",
            "• Visita al Castillo de San Felipe.",
          ],
        },
      ],
    },
  }
];

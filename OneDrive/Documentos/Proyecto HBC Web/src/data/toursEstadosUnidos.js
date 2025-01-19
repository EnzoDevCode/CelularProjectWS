// src/data/toursEstadosUnidos.js
import { obtenerImagenPrincipal, obtenerRutaImagenesPaquete } from './utils/cargarImagenes';

export const toursEstadosUnidos = [
  {
    id: 1,
    tipo: "TODO EL DÍA",
    backgroundTitle: "New York",
    title: "New York",
    subtitle: "La Gran Manzana",
    link: "new-york",
    description: "Sumérgete en la ciudad que nunca duerme, visitando lugares icónicos como Times Square, Central Park y la Estatua de la Libertad.",
    descriptionm: "Sumérgete en la ciudad que nunca duerme con vistas icónicas...",
    location: "Estados Unidos - América",
    imagenPrincipal: obtenerImagenPrincipal("new-york.jpg"),
    clienteFotos: obtenerRutaImagenesPaquete("new-york"),
    itinerario: {
      cronograma: [
        {
          titulo: "Mañana en Manhattan",
          hora: "09:00 AM",
          actividades: [
            "• Paseo por Times Square.",
            "• Caminata en Central Park.",
            "• Visita al Empire State Building.",
          ],
        },
        {
          titulo: "Tarde en Brooklyn",
          hora: "02:00 PM",
          actividades: [
            "• Paseo por el Puente de Brooklyn.",
            "• Degustación de comida local.",
          ],
        },
      ],
    },
  }
];

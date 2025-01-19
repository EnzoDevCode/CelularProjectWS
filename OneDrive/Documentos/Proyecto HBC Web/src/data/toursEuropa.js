// src/data/toursEuropa.js
import { obtenerImagenPrincipal, obtenerRutaImagenesPaquete } from './utils/cargarImagenes';

export const toursEuropa = [
  {
    id: 2,
    tipo: "TODO EL DÍA",
    backgroundTitle: "Paris",
    title: "Paris",
    subtitle: "La Ciudad del Amor",
    link: "paris",
    description: "Disfruta de la ciudad del amor visitando la Torre Eiffel, el Louvre y los encantadores cafés parisinos.",
    descriptionm: "Disfruta de la ciudad del amor visitando la Torre Eiffel y más...",
    location: "Francia - Europa",
    imagenPrincipal: obtenerImagenPrincipal("paris.jpg"),
    clienteFotos: obtenerRutaImagenesPaquete("paris"),
    itinerario: {
      cronograma: [
        {
          titulo: "Visita a los principales puntos turísticos",
          hora: "08:00 AM",
          actividades: [
            "• Recorrido por la Torre Eiffel.",
            "• Paseo por el río Sena.",
            "• Visita al Museo del Louvre.",
          ],
        },
        {
          titulo: "Tarde libre",
          hora: "03:00 PM",
          actividades: ["• Tiempo libre para disfrutar de la gastronomía local."],
        },
      ],
    },
  }
];

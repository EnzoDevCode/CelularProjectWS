// src/data/toursAsia.js
import { obtenerImagenPrincipal, obtenerRutaImagenesPaquete } from './utils/cargarImagenes';

export const toursAsia = [
  {
    id: 3,
    tipo: "TODO EL DÍA",
    backgroundTitle: "Tokio",
    title: "Tokio",
    subtitle: "Tecnología y Tradición",
    link: "tokio",
    description: "Explora la vibrante ciudad de Tokio, una mezcla de lo moderno y lo tradicional.",
    descriptionm: "Explora la vibrante ciudad de Tokio con su tecnología...",
    location: "Japón - Asia",
    imagenPrincipal: obtenerImagenPrincipal("tokio.jpg"),
    clienteFotos: obtenerRutaImagenesPaquete("tokio"),
    itinerario: {
      cronograma: [
        {
          titulo: "Exploración Urbana",
          hora: "10:00 AM",
          actividades: [
            "• Visita a la Torre de Tokio.",
            "• Paseo por Shibuya.",
          ],
        },
        {
          titulo: "Tarde Cultural",
          hora: "02:00 PM",
          actividades: [
            "• Visita al Templo Sensoji.",
          ],
        },
      ],
    },
  }
];

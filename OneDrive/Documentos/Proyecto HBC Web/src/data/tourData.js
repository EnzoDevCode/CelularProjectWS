const cargarTodasLasImagenes = require.context('../images/images-tour', true, /\.(png|jpe?g|svg)$/);

const obtenerImagenPrincipal = (nombreImagen) => {
  try {
    return cargarTodasLasImagenes(`./${nombreImagen}`); 
  } catch (error) {
    console.error(`Imagen principal no encontrada: ${nombreImagen}`);
    return null; 
  }
};

const obtenerRutaImagenesPaquete = (nombreCarpeta) => {
  return cargarTodasLasImagenes.keys()
    .filter((ruta) => ruta.includes(nombreCarpeta)) // Filtra imágenes en la subcarpeta
    .map(cargarTodasLasImagenes);
};

// Definición de los datos de los tours
export const tours = [
  {
    id: 7,
    tipo: "TODO EL DÍA",
    backgroundTitle: "Paris",
    title: "Paris",
    subtitle: "La Ciudad del Amor",
    link: "paris",
    description: "Disfruta de la ciudad del amor visitando la Torre Eiffel, el Louvre y los encantadores cafés parisinos. Vive una experiencia romántica única.",
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
  },
  {
    id: 8,
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
  },
  {
    id: 9,
    tipo: "TODO EL DÍA",
    backgroundTitle: "Cartagena",
    title: "Cartagena de Indias",
    subtitle: "Historia y Encanto Caribeño",
    link: "cartagena",
    description: "Explora la joya del Caribe colombiano. Camina por sus calles adoquinadas, descubre su historia en la Ciudad Amurallada y relájate en sus playas.",
    descriptionm: "Explora la joya del Caribe colombiano, con su historia y encanto...",
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
            "• Visita a las Bóvedas y el Castillo de San Felipe.",
          ],
        },
        {
          titulo: "Tarde relajante",
          hora: "02:00 PM",
          actividades: [
            "• Tiempo en las playas de Bocagrande.",
            "• Disfruta de la comida caribeña.",
          ],
        },
      ],
    },
  },

  {
    id: 1,
    tipo: "TODO EL DÍA",
    backgroundTitle: "Cartagena",
    title: "Cartagena de Indias",
    subtitle: "Historia y Encanto Caribeño",
    link: "cartagena",
    description: "Explora la joya del Caribe colombiano. Camina por sus calles adoquinadas, descubre su historia en la Ciudad Amurallada y relájate en sus playas.",
    descriptionm: "Explora la joya del Caribe colombiano, con su historia y encanto...",
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
            "• Visita a las Bóvedas y el Castillo de San Felipe.",
          ],
        },
        {
          titulo: "Tarde relajante",
          hora: "02:00 PM",
          actividades: [
            "• Tiempo en las playas de Bocagrande.",
            "• Disfruta de la comida caribeña.",
          ],
        },
      ],
    },
  },
];


// src/data/paquetesData.js

// Cargar todas las imágenes de la carpeta ../images/images-paquetes
const cargarTodasLasImagenes = require.context(
  "../images/images-paquetes",
  true,
  /\.(png|jpe?g|svg)$/
);

// Función para obtener la ruta de la imagen basada en el nombre del paquete
const obtenerRutaImagenesPaquete = (nombrePaquete) => {
  return cargarTodasLasImagenes
    .keys()
    .filter((ruta) => ruta.includes(nombrePaquete)) // Filtramos las imágenes que coincidan con el nombre del paquete
    .map(cargarTodasLasImagenes);
};

// Exportamos los paquetes con los nuevos atributos
export const paquetes = [
  {
    id: 1,
    nombre: "Amazonía Viva",
    subtitulo: "Explora la rica cultura de Tarapoto y sus paisajes",
    descripcion: `Sumérgete en la rica cultura de Tarapoto, donde los mitos y leyendas cobran vida en cada rincón. Este paquete te llevará a explorar Lamas, un pueblo emblemático que refleja la tradición quechua, y la majestuosa Laguna Azul, con sus aguas turquesas y paisajes de ensueño. Con actividades que destacan la belleza natural de la región, este paquete es perfecto para quienes buscan una experiencia auténtica en la Amazonía.`,
    descripcionm:
      "Explora Lamas y la Laguna Azul en una experiencia única en la Amazonía.",
    duracion: { dias: 3, noches: 2 },
    itinerario: {
      cronograma: [
        {
          titulo: "Visita el Castillo de Lamas",
          hora: "Día 1",
          actividades: [
            "• Descubre la cultura quechua-lamista",
            "• Explora su mercado artesanal lleno de mitos y tradiciones",
          ],
        },
        {
          titulo: "Explora la majestuosa Laguna Azul",
          hora: "Día 2",
          actividades: [
            "• Relájate en un paseo en bote sobre aguas cristalinas",
            "• Disfruta de vistas impresionantes",
            "• Nada en la laguna",
          ],
        },
        {
          titulo: "Aventura en las cascadas de Ahuashiaco",
          hora: "Día 3",
          actividades: [
            "• Caminatas por senderos rodeados de exuberante vegetación",
            "• Descubre la vida silvestre de la región",
          ],
        },
      ],
    },
    incluye: [
      "Transporte terrestre (ida y vuelta)",
      "Guía turístico especializado",
      "Seguro de viaje",
    ],
    imagenes: obtenerRutaImagenesPaquete("amazonia-viva"),
    destacado: true,
    precio: 0,
    backgroudTitle: "SELVA",
  },
  {
    id: 2,
    nombre: "Magia del Alto Mayo",
    subtitulo: "Conecta con la naturaleza y la cultura del Alto Mayo",
    descripcion: `Descubre la magia del Alto Mayo en este emocionante paquete por Tarapoto, donde la naturaleza y la cultura se entrelazan. Explora Lamas, conocido por su rica herencia quechua, y disfruta de la belleza de la Reserva Alto Mayo, un refugio para la biodiversidad. Este paquete es ideal para los amantes de la aventura que buscan conectar con la Amazonía a través de actividades inmersivas.`,
    descripcionm: "Explora Lamas y la Reserva Alto Mayo en un paquete único.",
    duracion: { dias: 3, noches: 2 },
    itinerario: {
      cronograma: [
        {
          titulo: "Explora Lamas y su cultura quechua",
          hora: "Día 1",
          actividades: [
            "• Vive el folclore y las costumbres ancestrales quechuas",
            "• Recorre sus calles y el famoso castillo",
          ],
        },
        {
          titulo: "Aventura en la Reserva Alto Mayo",
          hora: "Día 2",
          actividades: [
            "• Sumérgete en una caminata a través de la Reserva Alto Mayo",
            "• Descubre su biodiversidad y paisajes naturales únicos",
          ],
        },
        {
          titulo: "Disfruta de las cascadas de Ahuashiaco",
          hora: "Día 3",
          actividades: [
            "• Explora las cascadas y pozas de Ahuashiaco",
            "• Conecta con la naturaleza en un entorno de aventura",
          ],
        },
      ],
    },
    incluye: [
      "Transporte terrestre (ida y vuelta)",
      "Guía turístico especializado",
      "Seguro de viaje",
    ],
    imagenes: obtenerRutaImagenesPaquete("magia-del-alto-mayo"),
    destacado: true,
    precio: 0,
    backgroudTitle: "ALTO MAYO",
  },
  {
    id: 3,
    nombre: "Encanto Amazónico",
    subtitulo: "Descubre la magia y belleza de la Amazonía en Tarapoto",
    descripcion: `Vive el encanto de la Amazonía en este paquete que combina paisajes impresionantes con la rica cultura de Tarapoto. Desde las impresionantes cascadas de Ahuashiaco hasta las tranquilas aguas de la Laguna Azul, cada día está lleno de aventuras y oportunidades para conectar con la naturaleza. Este paquete es perfecto para quienes buscan experiencias únicas y memorables en la Amazonía.`,
    descripcionm: "Explora cascadas, reservas y lagunas en la Amazonía.",
    duracion: { dias: 3, noches: 2 },
    itinerario: {
      cronograma: [
        {
          titulo: "Visita Lamas y las cascadas de Ahuashiaco",
          hora: "Día 1",
          actividades: [
            "• Recorre el castillo y los mercados de Lamas",
            "• Disfruta de una caminata refrescante en las cascadas de Ahuashiaco",
          ],
        },
        {
          titulo: "Trekking en la Reserva Alto Mayo",
          hora: "Día 2",
          actividades: [
            "• Realiza un trekking en la reserva Alto Mayo",
            "• Descubre orquídeas, aves y paisajes inolvidables en la selva",
          ],
        },
        {
          titulo: "Relájate en la Laguna Azul",
          hora: "Día 3",
          actividades: [
            "• Paseo en bote con vistas panorámicas",
            "• Conecta con la calma y la naturaleza de la laguna",
          ],
        },
      ],
    },
    incluye: [
      "Transporte terrestre (ida y vuelta)",
      "Guía turístico especializado",
      "Seguro de viaje",
    ],
    imagenes: obtenerRutaImagenesPaquete("encanto-amazonico"),
    destacado: true,
    precio: 0,
    backgroudTitle: "AMAZONÍA",
  },
  {
    id: 4,
    nombre: "Aventura Amazónica Completa",
    subtitulo:
      "Explora la cultura y naturaleza de la Amazonía en su máximo esplendor",
    descripcion: `Embárcate en una aventura inolvidable por la Amazonía con este completo paquete que te llevará a descubrir la riqueza cultural y natural de Tarapoto. Desde el histórico pueblo de Lamas hasta las exuberantes cascadas de Ahuashiaco, cada día ofrece una nueva oportunidad para explorar mitos, leyendas y la biodiversidad única de la región. Este paquete es ideal para quienes desean una experiencia de inmersión total en la Amazonía.`,
    descripcionm: "Explora Lamas, Alto Mayo, la Laguna Azul y Ahuashiaco.",
    duracion: { dias: 4, noches: 3 },
    itinerario: {
      cronograma: [
        {
          titulo: "Explora la historia y cultura de Lamas",
          hora: "Día 1",
          actividades: [
            "• Visita el castillo de Lamas",
            "• Aprende sobre las tradiciones de la comunidad quechua",
          ],
        },
        {
          titulo: "Trekking en la Reserva Alto Mayo",
          hora: "Día 2",
          actividades: [
            "• Observa aves y plantas exóticas en la reserva",
            "• Conecta con la riqueza natural de la Amazonía",
          ],
        },
        {
          titulo: "Relájate en la Laguna Azul",
          hora: "Día 3",
          actividades: [
            "• Navega por la laguna en un bote",
            "• Disfruta de un día de relajación y paisajes vírgenes",
          ],
        },
        {
          titulo: "Cierra tu aventura en las cascadas de Ahuashiaco",
          hora: "Día 4",
          actividades: [
            "• Explora las cascadas de Ahuashiaco",
            "• Disfruta de la naturaleza y la biodiversidad de la región",
          ],
        },
      ],
    },
    incluye: [
      "Transporte terrestre (ida y vuelta)",
      "Guía turístico especializado",
      "Seguro de viaje",
    ],
    imagenes: obtenerRutaImagenesPaquete("aventura-amazonica-completa"),
    destacado: true,
    precio: 0,
    backgroudTitle: "AMAZONÍA",
  },
  {
    id: 5,
    nombre: "Místico de la Amazonía",
    subtitulo: "Experimenta el misticismo y la belleza de la Amazonía",
    descripcion: `Descubre el misticismo de la Amazonía en este paquete diseñado para los viajeros curiosos que desean experimentar la cultura y la naturaleza de Tarapoto. Desde la rica herencia de Lamas hasta las mágicas cascadas de Ahuashiaco y las aguas termales de Carpishuyacu, cada día te conectará con la belleza y los mitos de la Amazonía, ofreciendo una experiencia única y enriquecedora.`,
    descripcionm: "Explora Lamas, Alto Mayo, Laguna Azul y Carpishuyacu.",
    duracion: { dias: 4, noches: 3 },
    itinerario: {
      cronograma: [
        {
          titulo: "Explora Lamas y las cascadas de Ahuashiaco",
          hora: "Día 1",
          actividades: [
            "• Recorre el castillo y los mercados de Lamas",
            "• Disfruta de una caminata refrescante en las cascadas de Ahuashiaco",
          ],
        },
        {
          titulo: "Senderismo en la Reserva Alto Mayo",
          hora: "Día 2",
          actividades: [
            "• Aventúrate por los senderos de la reserva",
            "• Rodeado de flora y fauna amazónica, ideal para fotos y avistamientos",
          ],
        },
        {
          titulo: "Relájate en la Laguna Azul",
          hora: "Día 3",
          actividades: [
            "• Paseo en bote con vistas panorámicas",
            "• Nada en un entorno paradisíaco",
          ],
        },
        {
          titulo: "Disfruta de las aguas termales de Carpishuyacu",
          hora: "Día 4",
          actividades: [
            "• Relájate en aguas termales naturales",
            "• Conéctate con la naturaleza en su máxima expresión",
          ],
        },
      ],
    },
    incluye: [
      "Transporte terrestre (ida y vuelta)",
      "Guía turístico especializado",
      "Seguro de viaje",
    ],
    imagenes: obtenerRutaImagenesPaquete("mistico-de-la-amazonia"),
    destacado: true,
    precio: 0,
    backgroudTitle: "AMAZONÍA",
  },
  {
    id: 6,
    nombre: "Arma tu Paquete",
    subtitulo: "A Medida con Nosotros",
    descripcion: `¿Buscas una experiencia única y adaptada a tus gustos? Con nuestro servicio "Arma tu Paquete", tú decides qué, cuándo y cómo disfrutar tu próxima aventura.`,
    descripcionm: "¿Buscas una experiencia única y adaptada a tus gustos?",
    duracion: { dias: "?", noches: "?" },
    itinerario: {
      cronograma: [
        {
          titulo: "Elige tus Destinos Favoritos",
          hora: "",
          actividades: [
            "• Desde majestuosas montañas y selvas hasta lagunas paradisíacas",
            "• ¡Tú decides dónde quieres ir!",
          ],
        },
        {
          titulo: "Selecciona las Actividades que Más te Gusten",
          hora: "",
          actividades: [
            "• Paquetes de aventura",
            "• Experiencias culturales",
            "• Escapadas románticas",
            "• ¡Dinos qué tipo de experiencias quieres vivir!",
          ],
        },
        {
          titulo:
            "Te ayudamos a encontrar las mejores opciones sin exceder tu presupuesto",
          hora: "",
          actividades: [
            "• Queremos que vivas una experiencia increíble",
            "• Accesible para ti",
          ],
        },
        {
          titulo: "Recibe tu Paquete Personalizado",
          hora: "",
          actividades: [
            "• Contactanos vía WhatsApp",
            "• Trabajaremos contigo para crear el itinerario perfecto",
            "• Confirmarlo en minutos",
          ],
        },
      ],
    },
    incluye: [
      "Envíanos un mensaje mencionando el paquete que te interesa o si deseas una experiencia personalizada.",
      "Recibe atención directa y cotizaciones al instante.",
      "¡Consulta por nuestras promociones exclusivas para reservas anticipadas!",
    ],
    imagenes: obtenerRutaImagenesPaquete("arma-tu-paquete"),
    destacado: false,
    precio: 0,
    backgroudTitle: "PERSONALIZA",
  },
];

import React from "react";
import ContenedorPaquete from "../components/ContenedorPaquete";
import ContenedorTour from "../components/ContenedorTour";
import FAQs from "../components/FAQs";
import ImageBackground from "../components/ImageBackground"; // Asegúrate de importar ImageBackground
import PaqueteSlider from "../components/PaqueteSlider";
import Question from "../components/Question";
import TitleSubtitle from "../components/TitleSubtitle";
import TourCard from "../components/TourCard"; // Importa el componente de la tarjeta
import TourSlider from "../components/TourSlider";
import VerticalSeparator from "../components/VerticalSeparator";
import { tours } from "../data/tourData"; // Importa los datos desde tourData.js
import imagenHeader from "../images/images-tour/principal.jpg";
import "../styles/Tours.css";

const Tours = () => {
  return (
    <div>
      <ImageBackground url={imagenHeader} />
      <TitleSubtitle
        backgroundTitle={"Explora"}
        title={"Tours"}
        subtitle={"Nuestros Destinos"}
        position="centro"
      />
      <main className="tours-main">
        <div className="bg-shadow">
          <VerticalSeparator altura={"1"} />
          <div className="tour-card-container">
            {tours.map((tour) => (
              <ContenedorTour
                key={tour.id} // Agrega un key único para cada tour
                tipo={tour.tipo}
                link={tour.link}
                title={tour.title}
                description={tour.descriptionm}
                imagenPrincipal={tour.imagenPrincipal} // Pasa la imagen principal
              />
            ))}
          </div>
        </div>

        {/* Slider adicional si lo necesitas */}
        {/* <TourSlider />  */}

        {/* Slider de otros paquetes */}
        <PaqueteSlider title="¿Interesado en un paquete?" />
        <TitleSubtitle
          title="Preguntas Frecuentes"
          subtitle="Resuelve tus Dudas"
          backgroundTitle=""
          position="izquierda"
        />
        <FAQs>
          <Question question="¿Qué tipo de experiencias ofrecen los Tours?">
            Ofrecemos tours culturales y naturales que incluyen caminatas por la
            selva y exploración de paisajes únicos como miradores y ríos. Cada
            experiencia está diseñada para conectar a los visitantes con la
            riqueza de la Amazonía.
          </Question>
          <Question question="¿Los Tours son aptos para todas las edades?">
            Sí, nuestros tours están diseñados para ser disfrutados por personas
            de todas las edades. Contamos con opciones más tranquilas para
            familias con niños pequeños y actividades emocionantes para viajeros
            jóvenes y adultos. Antes de reservar, verifica la descripción del
            tour para asegurarte de que sea adecuado para tus necesidades.
          </Question>
          <Question question="¿Cómo puedo reservar un Tour?">
            Para reservar un tour, contáctanos directamente por WhatsApp.
            Procuraremos estar disponibles para responder tus consultas y
            ayudarte con la reserva lo más pronto posible.
          </Question>
        </FAQs>
      </main>
    </div>
  );
};

export default Tours;

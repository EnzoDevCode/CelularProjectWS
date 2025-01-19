import React from "react";
import ContenedorPaquete from "../components/ContenedorPaquete";
import FAQs from "../components/FAQs";
import ImageBackground from "../components/ImageBackground";
import Question from "../components/Question";
import TitleSubtitle from "../components/TitleSubtitle";
import TourSlider from "../components/TourSlider";
import VerticalSeparator from "../components/VerticalSeparator";
import { paquetes } from "../data/paquetesData";
import useFadeIn from "../hooks/useFadeIn";
import imagenHeader from "../images/images-paquetes/amazonia-viva/1.jpg";
import "../styles/Paquetes.css";

const Paquetes = () => {
  useFadeIn();

  return (
    <div>
      <ImageBackground url={imagenHeader} />
      <VerticalSeparator altura="2" />
      <TitleSubtitle
        title="Paquetes Turísticos"
        subtitle="Nuestras Experiencias"
        backgroundTitle="sumérgete"
        position="centro"
      />
      {/* <VerticalSeparator altura="1" /> */}
      {/* Contenedor solo para las tarjetas de los paquetes */}
      <div className="bg-shadow">
        <div className="paquetes-container">
          {paquetes.map((paquete) => (
            <ContenedorPaquete key={paquete.id} paquete={paquete} />
          ))}
        </div>
      </div>
      <TourSlider title="¿Interesado en un Tour?" />
      <TitleSubtitle
          title="Preguntas Frecuentes"
          subtitle="Resuelve tus Dudas"
          backgroundTitle=""
          position="izquierda"
        />
      <FAQs>
        <Question question="¿Qué incluyen los paquetes turísticos?">
          Nuestros paquetes incluyen transporte terrestre de ida y vuelta, guías
          turísticos especializados y seguro de viaje. Además, cada paquete está
          diseñado para ofrecer experiencias únicas que combinan cultura,
          naturaleza y aventura.
        </Question>
        <Question question="¿Cómo puedo reservar un paquete turístico?">
          Para reservar un paquete, contáctanos directamente por WhatsApp.
          Nuestro equipo estará encantado de ayudarte con la reserva y responder
          cualquier duda lo más pronto posible.
        </Question>
        <Question question="¿Puedo personalizar un paquete turístico?">
          Sí, ofrecemos la opción de personalizar paquetes para grupos, familias
          o viajeros que deseen adaptar las actividades a sus intereses.
          Contáctanos para explorar las opciones disponibles.
        </Question>
      </FAQs>
    </div>
  );
};

export default Paquetes;

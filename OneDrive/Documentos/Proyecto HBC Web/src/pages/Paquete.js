// src/pages/Tour.js
import React from "react";
import { useParams } from "react-router-dom";
import ImageBackground from "../components/ImageBackground";
import Incluye from "../components/Incluye";
import Itinerario from "../components/Itinerario";
import PaqueteSlider from "../components/PaqueteSlider";
import Par from "../components/Par";
import PhotoSliderPaquetes from "../components/PhotoSliderPaquetes";
import TitleSubtitle from "../components/TitleSubtitle";
import VerticalSeparator from "../components/VerticalSeparator";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { paquetes } from "../data/paquetesData";
import "../styles/Tour.css";

const Paquete = () => {
  const { nombre } = useParams();
  const paquete = paquetes.find(
    (p) => encodeURIComponent(p.nombre) === encodeURIComponent(nombre)
  );

  const scrollLimit = 800;

  return (
    <div className="tour-page">
      {/* {console.log(paquete.nombre)} */}
      <ImageBackground url={paquete.imagenes[0]} />
      <TitleSubtitle
        title={paquete.nombre}
        backgroundTitle={paquete.backgroudTitle}
        position="izquierda"
        subtitle={paquete.subtitulo}
      />
      <VerticalSeparator altura="1" />
      <Par>{paquete.descripcion}</Par>
      {paquete.nombre !== "Arma tu Paquete" ? (
        <>
          <TitleSubtitle title="Fotogalería" position="izquierda" />
          <PhotoSliderPaquetes images={paquete.imagenes} />
          <TitleSubtitle title="Incluye" position="izquierda" />
          <Incluye incluye={paquete.incluye} />
          <div className="bg-inner-shadow">
            <TitleSubtitle title="Actividades" position="izquierda" />
            <Itinerario itinerario={paquete.itinerario} />
          </div>
          <WhatsAppIcon
            mensaje={'Hola, quiero saber más sobre el paquete ' + paquete.nombre}
            scrollLimit={scrollLimit}
            activityClass=".itinerario-container"
          />
        </>
      ) : (
        <>
          <VerticalSeparator altura="5" />
          <div className="bg-inner-shadow">
            <TitleSubtitle
              title="Te explicamos cómo funciona"
              position="izquierda"
            />
            <Itinerario itinerario={paquete.itinerario} />
          </div>
          <TitleSubtitle title="Instrucciones" position="izquierda" />
          <Incluye incluye={paquete.incluye} />
          <WhatsAppIcon
            mensaje={'Hola, quiero saber más sobre el paquete ' + paquete.nombre}
            scrollLimit={scrollLimit}
            activityClass=".itinerary-container"
          />
        </>
      )}
      {/* Slider de otros paquetes */}
      <PaqueteSlider title="Conoce más Paquetes" idPaqueteExcluido={paquete.id}/>
    </div>
  );
};

export default Paquete;

// src/pages/Tour.js

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Activities from "../components/Activities";
import ImageBackground from "../components/ImageBackground";
import Itinerary from "../components/Incluye";
import Itinerario from "../components/Itinerario";
import Par from "../components/Par";
import PhotoSlider from "../components/PhotoSlider";
import TitleSubtitle from "../components/TitleSubtitle";
import TourSlider from "../components/TourSlider";
import VerticalSeparator from "../components/VerticalSeparator";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { tours } from "../data/tourData";
import useFadeIn from "../hooks/useFadeIn";

const scrollLimit = 800; // Ajusta esta altura según el punto deseado

const Tour = () => {
  const { link } = useParams();
  const tour = tours.find((t) => t.link === link);

  useEffect(() => {
    window.scrollTo(0, 0); // Esto asegura que la página se despliegue desde el principio
  }, [link]);

  if (!tour) {
    return <div>Tour no encontrado</div>;
  }

  useFadeIn();

  return (
    <div className="tour-page">
      <ImageBackground url={tour.clienteFotos[0]} />

      <TitleSubtitle
        backgroundTitle={tour.backgroundTitle}
        title={tour.title}
        subtitle={tour.subtitle}
      />
      <Par position="izquierda">{tour.description}</Par>
      <WhatsAppIcon
        mensaje={`Hola, quisiera saber más sobre su tour a ${tour.backgroundTitle}`}
        scrollLimit={scrollLimit}
        activityClass=".itinerario-super-container"
      />
      <TitleSubtitle title="Fotogalería" position="izquierda" />
      <PhotoSlider images={tour.clienteFotos} />
      <VerticalSeparator altura="3" />
      <div className="bg-inner-shadow">
        <TitleSubtitle title="Itinerario" position="izquierda" />
        <Itinerario itinerario={tour.itinerario} />
      </div>
      <TourSlider title="Conoce más Tours" idTourExcluido={tour.id} />
    </div>
  );
};

export default Tour;

import React, { useEffect, useState } from "react";
import desktopImage from "../images/cotiza.png";
import mobileImage from "../images/cotiza-mobile.png";
import "../styles/WhatsAppIcon.css";

const WhatsAppIcon = ({ mensaje, activityClass }) => {
  const [isMobile, setIsMobile] = useState(false); // Detecta si es móvil
  const [fixedPosition, setFixedPosition] = useState(true); // Controla la posición fija
  const [topPosition, setTopPosition] = useState(100); // Calcula la posición dinámica

  // Detecta si es móvil o escritorio
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define límite para móviles
    };

    handleResize(); // Verifica el tamaño inicial
    window.addEventListener("resize", handleResize); // Escucha cambios de tamaño
    return () => window.removeEventListener("resize", handleResize); // Limpia el evento
  }, []);

  // Controla el scroll para cambiar la posición del botón
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const activitySection = document.querySelector(activityClass);

      if (activitySection) {
        const activityTop = activitySection.offsetTop;
        const activityHeight = activitySection.offsetHeight;
        const activityBottom = activityTop + activityHeight;

        if (scrollTop + window.innerHeight >= activityBottom +  ((window.innerWidth > 768) ? 100 : 4)) {
          const buttonHeight = 100; // Altura estimada del botón
          setTopPosition(activityBottom - buttonHeight); // Calcula la posición exacta
          setFixedPosition(false);
        } else if (scrollTop >= activityTop) {
          setFixedPosition(true);
        } else {
          setFixedPosition(true);
          setTopPosition(100); // Posición inicial
        }
      } else {
        // Si no hay sección definida, mantener el botón fijo
        setFixedPosition(true);
        setTopPosition(100);
      }
    };

    window.addEventListener("scroll", handleScroll); // Escucha el evento de scroll
    return () => window.removeEventListener("scroll", handleScroll); // Limpia el evento
  }, [activityClass]);

  const encodedMessage = encodeURIComponent(mensaje);

  return (
    <a
      href={`https://wa.me/+51941950860?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${fixedPosition ? "" : "sticky"}`}
      style={fixedPosition ? {} : { position: "absolute", top: `${topPosition}px` }}
    >
      <img
        src={isMobile ? mobileImage : desktopImage} // Cambia la imagen según el tamaño
        alt="Cotiza por WhatsApp"
        className="whatsapp-image"
      />
    </a>
  );
};

export default WhatsAppIcon;

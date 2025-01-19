import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { paquetes } from "../data/paquetesData";
import "../styles/ImageSlider.css";

const ImageSlider = () => {
  // Filtrar paquetes destacados y limitar a los primeros cuatro
  const paquetesDestacados = paquetes
    .filter((paquete) => paquete.destacado)
    .slice(0, 3);

  // Estado para manejar el índice de la diapositiva activa
  const [activeIndex, setActiveIndex] = useState(0);

  // Cambiar de diapositiva automáticamente cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % paquetesDestacados.length);
    }, 3000); // 3000 ms = 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [paquetesDestacados.length]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${activeIndex * 33.3333}%)` }}
      >
        {paquetesDestacados.map((paquete, index) => (
          <div
            key={paquete.id}
            className={`slider-item ${index === activeIndex ? "active" : ""}`} // Agregar clase 'active' para la diapositiva actual
            style={{ backgroundImage: `url(${paquete.imagenes[0]})` }}
          >
            <Link
              to={`/paquete/${encodeURIComponent(paquete.nombre)}`}
              className="no-style-link"
            >
              <div className="slider-link-wraper">
                {/* Contenido principal del paquete */}
                <div className="slider-content-top">
                  <h3>PAQUETE</h3>
                  <h2>{paquete.nombre}</h2>
                </div>
                {/* Contenido que aparece al hacer hover */}
                <div className="slider-content-bottom">
                  <p className="slider-description">
                    {truncateText(paquete.descripcion || "", 150)}
                  </p>
                  <div className="duration-price-container">
                    <div className="duration-item">
                      <FontAwesomeIcon icon={faSun} className="duration-icon-sun" />
                      <span className="value-dias">
                        {paquete.duracion.dias} Día{paquete.duracion.dias === 1 ? "" : "s"}
                      </span>
                    </div>
                    <div className="duration-item">
                      <FontAwesomeIcon icon={faMoon} className="duration-icon-moon" />
                      <span className="value-noches">
                        {paquete.duracion.noches} Noche{paquete.duracion.noches === 1 ? "" : "s"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

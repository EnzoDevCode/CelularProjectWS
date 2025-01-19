import React from "react";
import { Link } from "react-router-dom";
import "../styles/SliderCard.css";

const SliderCard = ({ data }) => {
  return (
    <Link
      to={`/paquete/${encodeURIComponent(data.nombre)}`}
      className="slider-card"
    >
      <div
        className="slider-card-image"
        style={{ backgroundImage: `url(${data.imagenes[0]})` }}
      >
        <h3 className="slider-card-title">{data.nombre}</h3>
      </div>
      <div className="slider-card-content">
        <p className="slider-card-description">{data.descripcionm}</p>
        <div className="slider-card-footer">
          <div className="slider-card-footer-gradient"></div>
          <div className="slider-card-footer-content">
            {/* <div className="slider-card-divider"></div> */}
            <span className="slider-card-button">CONOCE MÁS</span>
            {/* <div className="slider-card-divider"></div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SliderCard;

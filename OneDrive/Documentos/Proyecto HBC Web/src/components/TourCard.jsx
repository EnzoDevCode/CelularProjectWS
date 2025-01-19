// src/components/TourCard.js

import React from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom para los enlaces dinámicos
import "../styles/TourCard.css";
import Par from "./Par";

const TourrCard = ({ link, title, description, imagenPrincipal }) => {
  return (
    <div className="tour-card">
      <img src={imagenPrincipal} alt={title} className="tour-card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/tours/${link}`}>
        <button className="ver-mas-button">Ver más</button>
      </Link>
    </div>
  );
};

const TourCard = ({ tour }) => {
  return (
    <Link
      to={`/tours/${tour.link}`}
      className="slider-card"
    >
      <div
        className="slider-card-image"
        style={{ backgroundImage: `url(${tour.imagenPrincipal})` }}
      >
        <h3 className="slider-card-title">{tour.title}</h3>
      </div>
      <div className="slider-card-content">
        <p className="slider-card-description">{tour.descriptionm}</p>
        <div className="slider-card-footer">
          <div className="slider-card-divider"></div>
          <span className="slider-card-button">CONOCE MÁS</span>
        </div>
      </div>
    </Link>
  );
};
export default TourCard;

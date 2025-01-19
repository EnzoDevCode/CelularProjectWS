// src/components/TourCard.js

import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom para los enlaces dinámicos
import '../styles/ContenedorTour.css';
import Par from './Par';


const ContenedorTour = ({ link, title, description, imagenPrincipal, tipo }) => {
  return (
    <div className="tour">
      {/* Usamos el atributo 'link' en lugar de 'id' */}
      <Link to={`/tours/${link}`}>
      <div className="tour-card">
        <div
          className="tour-imagen"
          style={{ 
            backgroundImage: `url(${imagenPrincipal})`,}}
        >
          <div className="tour-overlay">
            <h3 className="tour-texto-categoria">{tipo}</h3>
            <h2 className="tour-titulo">{title}</h2>
            <p className="tour-duracion">{description} </p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};
export default ContenedorTour;

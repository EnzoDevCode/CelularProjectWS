import React from "react";
import { FaCheck } from "react-icons/fa"; // Usaremos un ícono de reloj para cada punto del itinerario
import "../styles/Itinerary.css"; // Asegúrate de tener los estilos aplicados

const Incluye = ({ incluye }) => {
  return (
    <div className="itinerary-container">
      <ul className="itinerary-list">
        {incluye.map((item, index) => (
          <li key={index} className="itinerary-item">
            <FaCheck className="icon" /> {item}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Incluye;

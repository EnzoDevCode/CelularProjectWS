import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ContenedorPaquete.css";

const ContenedorPaquete = ({ paquete }) => {
  const { dias, noches } = paquete.duracion; // Acceder a los días y noches desde el nuevo atributo

  return (
    <Link
      to={`/paquete/${encodeURIComponent(paquete.nombre)}`}
      className="paquete-link"
    >
      <div className="paquete-card">
        <div
          className="paquete-imagen"
          style={{ backgroundImage: `url(${paquete.imagenes[0]})` }}
        >
          <div className="paquete-overlay">
            {/* <h3 className="paquete-texto-categoria">PAQUETE</h3> */}
            <h2 className="paquete-titulo">{paquete.nombre}</h2>
            <div className="paquete-duracion">
              <span className="duracion-item">
                <FontAwesomeIcon icon={faSun} className="duracion-item-logo-sol"/> {dias} Día{dias == 1 ? "" : "s"}
              </span>
              <span className="duracion-item">
                <FontAwesomeIcon icon={faMoon} className="duracion-item-logo-luna" /> {noches} Noche{noches == 1 ? "" : "s"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContenedorPaquete;

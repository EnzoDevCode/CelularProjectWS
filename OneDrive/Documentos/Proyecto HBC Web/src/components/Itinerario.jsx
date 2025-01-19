import React from "react";
import "../styles/Itinerario.css";

const Itinerario = ({ itinerario }) => {
  return (
    <div className="itinerario-super-container">
      <div className="itinerario-container">
        {itinerario.cronograma.map((cronograma, index) => (
          <div key={index} className="cronograma">
            <h3 className="cronograma-titulo">{cronograma.titulo}</h3>
            <p className="cronograma-hora">{cronograma.hora}</p>
            <ul className="cronograma-lista">
              {cronograma.actividades.map((actividad, actividadIndex) => (
                <li key={actividadIndex} className="actividad-item">
                  {actividad}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerario;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Boton.css";

const Boton = ({ to, texto, type = "primary", position = "centro" }) => {
  return (
    <div className={`boton-${position} fade-in`}>
      <Link to={to} className={`boton-link-${type}`}>
        <span className={`boton-text-${type}`}>{texto}</span>
      </Link>
    </div>
  );
};

export default Boton;

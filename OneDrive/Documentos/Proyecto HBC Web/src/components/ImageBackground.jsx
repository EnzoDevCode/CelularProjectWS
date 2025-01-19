// src/components/ImageBackground.js

import React from "react";
import { useHeaderContext } from "../context/HeaderHoverContext";
import '../styles/ImageBackground.css';

const ImageBackground = ({ url, title, subtitle }) => {
  const { isHeaderHovered } = useHeaderContext();

  return (
    <div
      className="image-background-wrapper"
      style={{
        position: "relative",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "480px", // Ajusta según el diseño deseado
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Superposición de Texto */}
      <div className="image-background-overlay"></div>
      <div className="image-background-text">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default ImageBackground;

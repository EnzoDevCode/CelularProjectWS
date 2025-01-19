import React, { useEffect, useRef } from "react";
import "../styles/TitleSubtitle.css";

const TitleSubtitle = ({ backgroundTitle, title, subtitle, position }) => {
  const backgroundRef = useRef(null); // Referencia para el backgroundTitle

  let backgroundTitleLength = backgroundTitle ? backgroundTitle.length : 13;
  // console.log("Longitud del string: " + backgroundTitleLength);

  useEffect(() => {
    const handleScroll = () => {
      const background = backgroundRef.current;
      if (background) {
        const rect = background.getBoundingClientRect(); // Obtener posición del elemento en relación con la pantalla
        const windowHeight = window.innerHeight;

        // Calcula la nueva posición horizontal en función del desplazamiento vertical

        let moveX =
          Math.abs(rect.top / (1.5 * windowHeight) - 1) *
            (backgroundTitleLength > 15
              ? 100
              : backgroundTitleLength > 10
              ? 150
              : 220) -
          150;
        // {console.log("xd: " + backgroundTitleLength > 15 ? 120 : backgroundTitleLength > 10 ? 180 : 240)}
        // {console.log("xd: " + String(backgroundTitle).length)}
        // {console.log("rect.top = " + rect.top)}
        // {console.log("windowHeight = " + windowHeight)}
        // {console.log("moveX = " + moveX)}
        background.style.transform = `translateX(${moveX}%) translateY(0%)`; // Solo mover en el eje X
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="title-subtitle-super-container">
      <div className={`title-subtitle-container ${position}`}>
        <div className="background-title" ref={backgroundRef}>
          <span>{backgroundTitle}</span>
        </div>
        <div className="title-subtitle-wrapper">
          <h2 className="main-title fade-in">{title}</h2>
          <h3 className="main-subtitle fade-in">{subtitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default TitleSubtitle;

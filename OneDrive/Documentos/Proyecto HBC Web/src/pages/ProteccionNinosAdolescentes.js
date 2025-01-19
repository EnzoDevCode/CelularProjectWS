import React from "react";
import ImageBackground from "../components/ImageBackground";
import VerticalSeparator from "../components/VerticalSeparator";
import cityImg from "../images/images-paquetes/encanto-amazonico/20160710_131742.jpg";
import aficheProtecMenores from "../images/AficheProtecMenores.jpg";

const PosterPage = () => {
  const pdfUrl = "https://example.com/your-pdf-file.pdf";

  return (
    <div>
      <ImageBackground url={cityImg} />
      <VerticalSeparator altura="5" />
      <div className="poster-container" style={{display: "flex", flexDirection:"column", justifyContent: "center" }}>
        <h1
        style={{ padding: "10px", alignSelf: "center" }}
        >Protección de Menores</h1>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          <img
            src= {aficheProtecMenores}
            alt="Afiche de Protección de Menores"
            className="poster-image"
            style={{ width: "100%", height: "auto", cursor: "pointer", marginBottom: "5rem"}}
          />
        </a>
      </div>
    </div>
  );
};

export default PosterPage;

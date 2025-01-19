import React from 'react';
import '../styles/CompanyDescription.css';

const CompanyDescription = () => {
  return (
    <div className="company-description-container">
      <div className="background-title fade-in">
        <span>Explora</span>
      </div>
      <h2 className="company-title fade-in">FADA Tours</h2>
      <p className="company-description fade-in">
        FADA Tours, especializada en el sector turístico en San Martín, Perú, 
        ofrecemos las mejores rutas de la región. Nos dedicamos a brindar 
        experiencias inolvidables con profesionalismo y dedicación. Conoce nuestras rutas a través 
        de la sierra, selva y mucho más.
        <br /><br /> 
        <a href="/nosotros" className="about-link">
          <button className="about-button fade-in">Nosotros</button>
        </a>
      </p>
    </div>
  );
};

export default CompanyDescription;

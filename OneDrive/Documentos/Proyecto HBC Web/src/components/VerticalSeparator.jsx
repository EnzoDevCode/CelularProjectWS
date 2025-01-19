import React from 'react';

const VerticalSeparator = ({ altura }) => {
  const estiloSeparador = {
    height: `${altura}vh`, // Define la altura en vh
    width: '100%',         // Ocupa todo el ancho
  };

  return <div style={estiloSeparador}></div>;
};

export default VerticalSeparator;

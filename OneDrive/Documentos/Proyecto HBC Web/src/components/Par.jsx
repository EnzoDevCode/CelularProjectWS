import React from 'react';
import '../styles/Par.css'; // Asegúrate de tener este archivo para los estilos

const Par = ({ children, position = 'center', maxLength, truncate = false }) => {
  // Función para truncar texto si truncate está activo y maxLength está definido
  const truncateText = (text, maxLength) => {
    if (!truncate || !maxLength || text.length <= maxLength) {
      return text;
    }

    // Corta el texto, asegura que no termine en medio de una palabra y añade "..."
    const truncated = text.slice(0, maxLength).trimEnd();
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    if (lastSpaceIndex > 0) {
      return truncated.slice(0, lastSpaceIndex) + '...';
    } else {
      return truncated.slice(0, maxLength - 3) + '...';
    }
  };

  // Asegurarse de que children sea texto, convirtiéndolo si es necesario
  const content = typeof children === 'string' ? children : String(children);

  return (
    <p className={`par-text fade-in ${position}`}>
      {truncateText(content, maxLength)}
    </p>
  );
};

export default Par;

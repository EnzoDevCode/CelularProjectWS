// src/hooks/useScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Restablece el scroll al inicio de la página
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta
};

export default useScrollToTop;

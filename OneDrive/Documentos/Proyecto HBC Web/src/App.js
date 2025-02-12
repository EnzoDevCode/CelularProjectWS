// React y Router Importaciones
import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

// Swiper CSS imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper bundle registration
import { register } from "swiper/element/bundle";

// CSS imports
import "./App.css";

// Components
import Boton from "./components/Boton";
import CompanyDescription from "./components/CompanyDescription";
import Footer from "./components/Footer";
import ImageBackground from "./components/ImageBackground";
import ImageSlider from "./components/ImageSlider";
import Par from "./components/Par";
import SliderTop from "./components/SliderTop";
import TitleSubtitle from "./components/TitleSubtitle";
import TopHeader from "./components/TopHeader";
import TourSlider from "./components/TourSlider";
import ContactForm from "./components/ContactForm";

// Pages
import Contactanos from "./pages/Contactanos";
import LibroReclamaciones from "./pages/LibroReclamaciones";
import Nosotros from "./pages/Nosotros";
import Paquete from "./pages/Paquete";
import Paquetes from "./pages/Paquetes";
import Politicas from "./pages/Politicas";
import ProteccionNinosAdolescentes from "./pages/ProteccionNinosAdolescentes";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import Tour from "./pages/Tour";
import Destinos from "./pages/Destinos";
import PaquetesInternacionales from "./pages/PaquetesInternacionales"
import PaquetesNacionales from "./pages/PaquetesNacionales"
import Tours from "./pages/Tours";

// Images
import machupicchu from "./images/images-header/machupicchu-1.jpg";
import europa from "./images/images-header/europa-1.jpg";
import tajMahal from "./images/images-header/tajmahal-1.jpg";
import africa from "./images/images-header/africa-1.jpg";
import norteamerica from "./images/images-header/norteamerica-1.jpg";
import paquetesEspeciales from "./images/images-header/paquetesespeciales-1.jpg";

// Custom hooks
import VerticalSeparator from "./components/VerticalSeparator";
import useFadeIn from "./hooks/useFadeIn";
import useScrollToTop from "./hooks/useScrollToTop";

import emailjs from "emailjs-com";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importamos el ícono de ubicación

import { tours } from './data/tourData'; // Importa los datos de los tours

emailjs.init("3Y643CQ4vkLO2T_p0pDtX");

register();

const sliderImages = [
  { url: machupicchu, span1: <><FaMapMarkerAlt /> Sudamérica</>, title: "Machu Picchu", position: "top-right" },
  { url: europa, span1: <><FaMapMarkerAlt /> Europa</>, title: "Europa", position: "top-right" },
  { url: tajMahal, span1: <><FaMapMarkerAlt /> Asia</>, title: "Asia", position: "top-right" },
  { url: africa, span1: <><FaMapMarkerAlt /> África</>, title: "África", position: "top-right" },
  { url: norteamerica, span1: <><FaMapMarkerAlt /> Norteamérica</>, title: "Norteamérica", position: "top-right" },
  { url: paquetesEspeciales, span1: <><FaMapMarkerAlt /> Paquetes Especiales</>, title: "Paquetes Especiales", position: "top-right" }
];




function App() {
  useScrollToTop();
  useFadeIn();
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const [pageKey, setPageKey] = useState(location.pathname);

  useEffect(() => {
    if (pageKey !== location.pathname) {
      // console.log("Actualizando pageKey de:", pageKey, "a:", location.pathname);
      setPageKey(location.pathname);
    }
  }, [location.pathname]);

  return (
    <div key={pageKey} className={`App ${isHovered ? "darkened" : ""}`}>
      <div className="todoheader">
        <TopHeader />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              
              <SliderTop sliderImages={sliderImages} />
              <div className="bg-inner-shadow">
              <TourSlider 
  title="Destinos Exclusivos"
  data={tours} // Pasamos el nuevo paquete de datos
  showButton={false} // No mostramos el botón en esta sección
/>
              </div>

              <div className="bg-inner-shadow">
              <div className="bg-inner-shadow">
  <TourSlider 
    title="Otros Destinos"
    data={tours} // Asegúrate de que el prop data esté definido
    showButton={true} // Puedes ajustar este valor según lo necesites
  />
  
  <ContactForm/>
</div>
              </div>
            </div>
          }
        />

        {/* Ruta de la página de Tours */}
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/paquetes-internacionales" element={<PaquetesInternacionales />} />
        <Route path="/paquetes-nacionales" element={<PaquetesNacionales />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/paquete/:nombre" element={<Paquete />} />
        <Route path="/contacto" element={<Contactanos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/terminos" element={<TerminosCondiciones />} />
        <Route path="/proteccionMenores" element={<ProteccionNinosAdolescentes />} />
        <Route
          path="/tours/:link"
          element={<Tour key={window.location.pathname} />}
        />
        <Route path="/libroreclamaciones" element={<LibroReclamaciones />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

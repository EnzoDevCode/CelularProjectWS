import React from "react";
import ImageBackground from "../components/ImageBackground";
import Par from "../components/Par";
import TitleSubtitle from "../components/TitleSubtitle";
import VerticalSeparator from "../components/VerticalSeparator";
import imagenFondo from "../images/espana1.jpg";
import yapeLogo from "../images/images-logo/yape-logo.png";
import plinLogo from "../images/images-logo/logo-plin.png";
import "../styles/Contactanos.css";
import ContactForm from "../components/ContactForm";

const Contactanos = () => {
  return (
    <div>
      <ImageBackground url={imagenFondo} />
      <VerticalSeparator altura="5" />
      <TitleSubtitle title="Contáctanos" position="centro" />
      <VerticalSeparator altura="5" />
      
      <div className="contact-section">
      {/* Redes Sociales */}
      <h2>Nuestras Redes Sociales</h2>
      <div className="social-media-container">
        <a href="https://www.facebook.com/hbctraveI" target="_blank" rel="noopener noreferrer" className="social-media-item facebook">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://www.instagram.com/hbc.travel.peru/" target="_blank" rel="noopener noreferrer" className="social-media-item instagram">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.tiktok.com/@hbc.travel.go?lang=es" target="_blank" rel="noopener noreferrer" className="social-media-item tiktok">
          <i className="fab fa-tiktok"></i> TikTok
        </a>
        <a href="https://wa.me/51943385957" target="_blank" rel="noopener noreferrer" className="social-media-item whatsapp">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>

      {/* Medios de Pago */}
      <div className="payment-section">
        <h3>Medios de Pago</h3>
        <div className="payment-icons">
          <img src={yapeLogo} alt="Yape" />
          <img src={plinLogo} alt="Plin" />
        </div>
      </div>
    </div>

      <VerticalSeparator altura="9" />
      <ContactForm />
    </div>
  );
};

export default Contactanos;

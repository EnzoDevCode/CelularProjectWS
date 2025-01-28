import React from "react";
import ImageBackground from "../components/ImageBackground";
import Par from "../components/Par";
import TitleSubtitle from "../components/TitleSubtitle";
import VerticalSeparator from "../components/VerticalSeparator";
import imagenFondo from "../images/espana1.jpg";
import "../styles/Contactanos.css";

const Contactanos = () => {
  return (
    <div>
      <ImageBackground url={imagenFondo} />
      <VerticalSeparator altura="5" />
      <TitleSubtitle title="Contáctanos" position="centro" />
      <VerticalSeparator altura="5" />
      
      <div className="contactanos-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-header">
              <i className="fas fa-envelope"></i>
              <h3>Correo Electrónico</h3>
            </div>
            <p>
              <a href="mailto:contacto@hbctravelperu.com" target="_blank" rel="noopener noreferrer">
                contacto@hbctravelperu.com
              </a>
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-header">
              <i className="fab fa-whatsapp"></i>
              <h3>WhatsApp</h3>
            </div>
            <p>
              <a href="https://wa.me/51943385957" target="_blank" rel="noopener noreferrer">
                +51 943 385 957
              </a>
            </p>
          </div>
          <div className="contact-item">
            <div className="contact-header">
              <i className="fab fa-facebook"></i>
              <h3>Facebook</h3>
            </div>
            <p>
              <a href="https://www.facebook.com/hbctraveI" target="_blank" rel="noopener noreferrer">
                HBC Travel en Facebook
              </a>
            </p>
          </div>

          {/* 📸 Instagram */}
          <div className="contact-item">
            <div className="contact-header">
              <i className="fab fa-instagram"></i>
              <h3>Instagram</h3>
            </div>
            <p>
              <a href="https://www.instagram.com/hbc.travel.peru/" target="_blank" rel="noopener noreferrer">
                @hbc.travel.peru
              </a>
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-header">
              <i className="fab fa-tiktok"></i>
              <h3>TikTok</h3>
            </div>
            <p>
              <a href="https://www.tiktok.com/@hbc.travel.go?lang=es" target="_blank" rel="noopener noreferrer">
                HBC Travel en TikTok
              </a>
            </p>
          </div>
        </div>

        <VerticalSeparator altura="2" />

        <div className="additional-info">
          <div className="info-item">
            <div className="contact-header">
              <i className="fas fa-credit-card"></i>
              <h3>Medios de Pago</h3>
            </div>
            <p>Puedes pagar con estos métodos tras cotizar por WhatsApp:</p>
            <ul className="payment-icons-contact">
              <li>
                Efectivo:
                <i className="fas fa-money-bill-wave"></i>
              </li>
              <li>
                Transferencia bancaria:
                <i className="fas fa-university"></i>
              </li>
              <li>
                Tarjetas de crédito:
                <i className="fas fa-credit-card"></i>
                <i className="fab fa-cc-visa card-icon"></i>
                <i className="fab fa-cc-mastercard card-icon"></i>
                <i className="fab fa-cc-amex card-icon"></i>
              </li>
              <li>
                Aplicaciones de pago:
                <i className="fas fa-mobile-alt"></i>
                Yape, Plin
              </li>
            </ul>
          </div>
        </div>
      </div>

      <VerticalSeparator altura="9" />
    </div>
  );
};

export default Contactanos;

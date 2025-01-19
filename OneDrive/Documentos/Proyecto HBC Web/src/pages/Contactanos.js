import React from "react";
import ImageBackground from "../components/ImageBackground";
import Par from "../components/Par";
import TitleSubtitle from "../components/TitleSubtitle";
import VerticalSeparator from "../components/VerticalSeparator";
import imagenFondo from "../images/aventura-selva.jpg";
import "../styles/Contactanos.css";

const Contactanos = () => {
  return (
    <div>
      <ImageBackground url={imagenFondo} />
      <VerticalSeparator altura="5" />
      <TitleSubtitle
        title="Contáctanos"
        position="centro"
      />
      <Par position="centro">
        En FADA Tours ofrecemos experiencias inolvidables en la Amazonía,
        brindando entretenimiento y satisfacción en cada aventura. Contáctanos a
        través de nuestros canales de atención para planificar tu próximo viaje
        a la selva peruana.
      </Par>
      <VerticalSeparator altura="5" />
      <div className="contactanos-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-header">
              <i className="fas fa-envelope"></i>
              <h3>Correo Electrónico</h3>
            </div>
            <p>
              <a
                href="mailto:fadatours.info@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                fadatours.info@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-item">
            <div className="contact-header">
              <i className="fab fa-whatsapp"></i>
              <h3>WhatsApp</h3>
            </div>
            <p>
              <a
                href="https://wa.me/51941950860"
                target="_blank"
                rel="noopener noreferrer"
              >
                +51 941 950 860
              </a>
            </p>
          </div>
          <div className="contact-item">
            <div className="contact-header">
              <i className="fab fa-facebook"></i>
              <h3>Facebook</h3>
            </div>

            <p>
              <a
                href="https://www.facebook.com/profile.php?id=61567164249377"
                target="_blank"
                rel="noopener noreferrer"
              >
                FADA Tours en Facebook
              </a>
            </p>
          </div>
          <div className="contact-item">
            <div className="contact-header">
              <i className="fab fa-instagram"></i>
              <h3>Instagram</h3>
            </div>
            <p>
              <a
                href="https://www.instagram.com/fadatours/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FADA Tours en Instagram
              </a>
            </p>
          </div>
        </div>

        <VerticalSeparator altura="2" />

        <div className="additional-info">
          <div className="info-item">
            <div className="contact-header">
              <i className="fas fa-headset"></i>
              <h3>Atención al Cliente</h3>
            </div>

            <p>
              Nuestro equipo está siempre disponible para ayudarte a planificar
              tu experiencia en la Amazonía. Contáctanos por nuestras redes sociales y
              te responderemos a la brevedad.
            </p>
          </div>
          <div className="info-item">
            <div className="contact-header">
              <i className="fas fa-credit-card"></i>
              <h3>Medios de Pago</h3>
            </div>

            <p>Puedes pagar con estos medios de pago tras cotizar mediante whatsapp</p>
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
          <div className="info-item">
            <div className="contact-header">
              <i className="fas fa-lock"></i>
              <h3>Datos Seguros</h3>
            </div>

            <p>
              La seguridad de tus datos es nuestra prioridad. Navega con
              tranquilidad, tu información está protegida y segura.
            </p>
          </div>
        </div>
      </div>
      <VerticalSeparator altura="9" />
    </div>
  );
};

export default Contactanos;

import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* ====== Parte Superior ====== */}
      <div className="footer-top">
        {/* Columna Izquierda */}
        <div className="footer-left">
          <div className="footer-contact">
            <i className="fas fa-envelope"></i>
            contacto@hbctravel.com
          </div>
          <div className="footer-contact">
            <i className="fas fa-phone"></i>
            +51 - 943 385 957
          </div>
          <div className="footer-middle">
            <ul className="redesfoo">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-tiktok"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="footer-logo-section">
          <img
            src={require("../images/images-logo/imagotipoBlanco.png")}
            alt="HBC Travel"
          />
        </div>
      </div>

      {/* ====== Parte Inferior ====== */}
      <div className="footer-bottom">
        <div className="creditos">
          <ul>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Políticas</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Medios de Pago</a></li>
          </ul>
          <div className="footer-divider"></div>
          <div className="footer-credits">
          <p>© Todos los Derechos Reservados | 2024</p>
          <p className="credito">
            Diseñado por <a href="#">Multiback</a>
          </p>            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

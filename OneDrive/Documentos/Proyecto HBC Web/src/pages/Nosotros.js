import React from "react";
import ImageBackground from "../components/ImageBackground";
import cityImg from "../images/images-tour/venecia1.png";
import "../styles/Nosotros.css";

import Par from "../components/Par";
import ContactForm from "../components/ContactForm";
import TitleSubtitle from "../components/TitleSubtitle";
import VerticalSeparator from "../components/VerticalSeparator";
import useFadeIn from "../hooks/useFadeIn";
import iconoColaboracion from "../images/colaboracion.png";
import iconoPuntualidad from "../images/puntualidad.png";
import iconoResponsabilidad from "../images/seguridad-activada.png";

const Nosotros = () => {
  useFadeIn();

  return (
    <div>
      <ImageBackground url={cityImg} />
      <TitleSubtitle
        title="HBC Travel"
        subtitle=" "
        position="centro"
      />
      <div className="">
        <VerticalSeparator altura="5" />
        <div className="bg-shadow">
          <TitleSubtitle title="Nuestra Misión" position="centro" />
          <Par position="centro">
            En HBC Travel, nos comprometemos a ser el puente que conecta a nuestros clientes con las 
            experiencias de viaje más enriquecedoras y memorables en Perú y en el mundo. Buscamos 
            superar las expectativas, ofreciendo servicios personalizados, itinerarios bien planificados
             y atención al cliente excepcional. Nuestra misión es inspirar la exploración, fomentar el 
             entendimiento cultural y crear momentos inolvidables para cada viajero que confía en 
             nosotros para descubrir la belleza y diversidad de nuestro hermoso país.
          </Par>
          <VerticalSeparator altura="5" />
        </div>

        <TitleSubtitle title="Nuestra Visión" position="centro" />
        <Par position="centro">
        En HBC Travel, nos comprometemos a ser el puente que conecta a nuestros clientes con las 
        experiencias de viaje más enriquecedoras y memorables en Perú y en el mundo. Buscamos superar 
        las expectativas, ofreciendo servicios personalizados, itinerarios bien planificados y atención 
        al cliente excepcional. Nuestra misión es inspirar la exploración, fomentar el entendimiento 
        cultural y crear momentos inolvidables para cada viajero que confía en nosotros para descubrir 
        la belleza y diversidad de nuestro hermoso país.
        </Par>
        <VerticalSeparator altura="5" />

        <div className="bg-shadow">
          <TitleSubtitle
            title="¿Por qué deberías escogernos?"
            position="centro"
          />
          <div className="valores-section">
            <div className="valores-grid">
              <div className="valor-item">
                <img src={iconoResponsabilidad} alt="Responsabilidad" />
                <h3>Responsabilidad</h3>
                <p>
                  Nos caracterizamos por cumplir lo que prometemos, desde itinerarios cuidadosamente 
                  planificados hasta un servicio que refleja nuestra dedicación y compromiso. La 
                  puntualidad y atención al detalle son parte esencial de nuestra filosofía de trabajo.
                </p>
              </div>
              <div className="valor-item">
                <img src={iconoPuntualidad} alt="Puntualidad" />
                <h3>Seguridad</h3>
                <p>
                Estamos certificados por el Ministerio de Comercio Exterior y Turismo (MINCETUR), 
                lo que asegura que cumplimos con los más altos estándares de calidad y seguridad para 
                nuestros clientes. Tu bienestar es nuestra prioridad en cada etapa del viaje.
                </p>
              </div>
              <div className="valor-item">
                <img src={iconoColaboracion} alt="Colaboración" />
                <h3>Accesibilidad</h3>
                <p>
                Ofrecemos precios competitivos y opciones adaptadas a diferentes presupuestos, 
                asegurándonos de que todas las personas puedan disfrutar de experiencias de viaje 
                enriquecedoras sin comprometer la calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <VerticalSeparator altura="5" />
      </div>
      {/* ====== Sección de Contacto ====== */}
      <section className="contacto-section">
          <ContactForm />
        </section>
    </div>
  );
};

export default Nosotros;

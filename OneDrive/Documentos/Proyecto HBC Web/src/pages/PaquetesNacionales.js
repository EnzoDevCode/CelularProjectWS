import React from "react";
import ImageBackground from "../components/ImageBackground";
import TitleSubtitle from "../components/TitleSubtitle";
import TourSlider from "../components/TourSlider";
import ContactForm from "../components/ContactForm";
import FAQs from "../components/FAQs";
import Question from "../components/Question";
import "../styles/Destinos.css";
import { toursEstadosUnidos } from "../data/toursEstadosUnidos";
import { toursEuropa } from "../data/toursEuropa";
import { toursAsia } from "../data/toursAsia";
import { toursLatinoamerica } from "../data/toursLatinoamerica";
import imagenHeader from "../images/images-tour/principal.jpg";

const Destinos = () => {
  return (
    <div className="destinos-page">
      {/* ====== Encabezado con Imagen de Fondo ====== */}
      <ImageBackground url={imagenHeader} title="Descubre tu próximo destino con nosotros" />

      <TitleSubtitle
        backgroundTitle={"Explora"}
        title={"Paquetes Nacionales"}
        subtitle={"Visita el Perú y sus maravillas"}
        position="centro"
      />

      {/* ====== Secciones de Destinos por Región ====== */}
      <main className="destinos-main">
        {/* 🗽 Destinos en Estados Unidos */}
        <section className="destinos-section">
          <TourSlider
            title="Destinos en Estados Unidos"
            data={toursEstadosUnidos}
            showButton={false}
          />
        </section>

        {/* 🏰 Destinos en Europa */}
        <section className="destinos-section">
          <TourSlider
            title="Destinos en Europa"
            data={toursEuropa}
            showButton={false}
          />
        </section>

        {/* 🏯 Destinos en Asia */}
        <section className="destinos-section">
          <TourSlider
            title="Destinos en Asia"
            data={toursAsia}
            showButton={false}
          />
        </section>

        {/* 🏝️ Destinos en Latinoamérica */}
        <section className="destinos-section">
          <TourSlider
            title="Destinos en Latinoamérica"
            data={toursLatinoamerica}
            showButton={false}
          />
        </section>

        {/* ====== Sección de Contacto ====== */}
        <section className="contacto-section">
          <ContactForm />
        </section>

        {/* ====== Preguntas Frecuentes ====== */}
        <section className="faqs-section">
          <TitleSubtitle title="Preguntas Frecuentes" subtitle="Resuelve tus Dudas" />
          <FAQs>
            <Question question="¿Qué tipo de experiencias ofrecen los Tours?">
              Ofrecemos tours culturales y naturales que incluyen caminatas por la selva y exploración de paisajes únicos como miradores y ríos.
            </Question>
            <Question question="¿Los Tours son aptos para todas las edades?">
              Sí, nuestros tours están diseñados para ser disfrutados por personas de todas las edades.
            </Question>
            <Question question="¿Cómo puedo reservar un Tour?">
              Para reservar un tour, contáctanos directamente por WhatsApp.
            </Question>
          </FAQs>
        </section>
      </main>
    </div>
  );
};

export default Destinos;

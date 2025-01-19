import React from "react";
import ImageBackground from "../components/ImageBackground";
import cityImg from "../images/images-tour/carpishuyacu.jpg"; // Importar la imagen directamente
import "../styles/Nosotros.css";

import Par from "../components/Par";
import TitleSubtitle from "../components/TitleSubtitle";
import VerticalSeparator from "../components/VerticalSeparator";
import useFadeIn from "../hooks/useFadeIn";
import iconoLiderazgo from "../images/asistencia.png";
import iconoColaboracion from "../images/colaboracion.png";
import iconoPuntualidad from "../images/puntualidad.png";
import iconoResponsabilidad from "../images/seguridad-activada.png";

const Nosotros = () => {
  useFadeIn();

  return (
    <div>
      <ImageBackground url={cityImg} />
      <TitleSubtitle
        title="FADA Tours"
        subtitle=" "
        position="centro"
      />
      <div className="">
        <Par position="centro">
          En FADA Tours, estamos comprometidos con ofrecer experiencias
          inolvidables a través de rutas turísticas únicas en la hermosa región
          de San Martín, Perú. Con una pasión profunda por la naturaleza, la
          cultura y la aventura, hemos creado una amplia gama de paquetes
          turísticos diseñados para conectar a nuestros clientes con la
          biodiversidad y el encanto local.
        </Par>
        <VerticalSeparator altura="5" />
        <div className="bg-shadow">
          <TitleSubtitle title="Nuestra Misión" position="centro" />
          <Par position="centro">
            Brindar experiencias turísticas inolvidables en la región de San
            Martín, con un enfoque en la calidad del servicio, la confianza y el
            respeto por nuestros clientes y el entorno. Nos esforzamos por
            ofrecer aventuras seguras, puntuales y auténticas, promoviendo la
            riqueza cultural y natural. de Tarapoto y sus alrededores, para que
            cada visitante disfrute plenamente de la belleza de nuestra región.
          </Par>
          <VerticalSeparator altura="5" />
        </div>

        <TitleSubtitle title="Nuestra Visión" position="centro" />
        <Par position="centro">
          Ser el operador turístico líder en la región de San Martín, reconocido
          por ofrecer las mejores experiencias de ecoturismo y aventura en
          Tarapoto y sus alrededores. Aspiramos a expandir nuestra presencia a
          nivel nacional, siendo sinónimo de confianza, puntualidad y respeto,
          mientras promovemos un turismo sostenible que beneficia a las
          comunidades locales y preserva el entorno natural.
        </Par>
        <VerticalSeparator altura="5" />
        {/* <div className="bg-shadow">
          <TitleSubtitle title="¿Por qué elegir FADA Tours?" />
          <VerticalSeparator altura="3" />
        </div> */}
        {/* <TitleSubtitle
          subtitle="Compromiso con el cliente"
          position="izquierda"
        />
        <Par position="izquierda">
          En FADA Tours, nuestros clientes son nuestra prioridad. Nos esforzamos
          por brindar una atención personalizada y garantizar que cada
          experiencia de viaje supere sus expectativas, cuidando cada detalle.
        </Par>
        <VerticalSeparator altura="3" />
        <div className="bg-inner-shadow">
          <TitleSubtitle subtitle="Transparencia y Ética" />
          <Par>
            Actuamos con honestidad y claridad en todas nuestras operaciones,
            desde la planificación del viaje hasta la finalización del servicio.
            Mantenemos relaciones basadas en la confianza y la integridad con
            nuestros clientes, empleados y socios.
          </Par>
          <VerticalSeparator altura="3" />
        </div>
        <TitleSubtitle subtitle="Calidad en el Servicio" />
        <Par>
          ofrecemos servicios turísticos de alta calidad, seleccionando
          cuidadosamente a nuestros proveedores y destinos para asegurar una
          experiencia memorable y placentera. Nos esforzamos constantemente por
          mejorar y superar los estándares del sector.
        </Par>
        <VerticalSeparator altura="3" />
        <div className="bg-inner-shadow">
          <TitleSubtitle subtitle="Sostenibilidad" />
          <Par>
            Nos comprometemos con el turismo responsable y sostenible,
            respetando el medio ambiente y las culturas locales en cada destino.
            Promovemos prácticas que minimicen nuestro impacto ambiental y
            contribuyan al desarrollo positivo de las comunidades que visitamos.
          </Par>
          <VerticalSeparator altura="3" />
        </div>
        <TitleSubtitle subtitle="Nuestra Historia" />
        <Par>
          Fundada con el objetivo de mostrar lo mejor de San Martín, FADA Tours
          ha crecido rápidamente, convirtiéndose en un referente de calidad y
          servicio en la región. Desde nuestros inicios, hemos trabajado con
          entusiasmo para ofrecer rutas innovadoras y atractivas, conectando a
          viajeros de todo el mundo con la belleza escondida de la Amazonía
          peruana.
        </Par>
        <VerticalSeparator altura="3" />
        <div className="bg-inner-shadow">
          <TitleSubtitle subtitle="Nuestro Compromiso" />
          <Par>
            En FADA Tours, estamos comprometidos con brindar un servicio de
            excelencia y asegurarnos de que cada cliente disfrute de una
            experiencia única, auténtica y transformadora. Te invitamos a
            explorar nuestras rutas, descubrir la magia de San Martín y confiar
            en nosotros para ser tu compañero de viaje en tu próxima aventura.
          </Par>
          <VerticalSeparator altura="3" />
        </div> */}
        {/* <VerticalSeparator altura="5" /> */}
        <div className="bg-shadow">
          <TitleSubtitle
            title="¿Por qué elegir FADA tours?"
            position="izquierda"
          />
          <div className="valores-section">
            <div className="valores-grid">
              <div className="valor-item">
                <img src={iconoResponsabilidad} alt="Responsabilidad" />
                <h3>Compromiso con el Cliente</h3>
                <p>
                  En FADA Tours, nuestros clientes son nuestra prioridad. Nos
                  esforzamos por brindar una atención personalizada y garantizar
                  que cada experiencia de viaje supere sus expectativas,
                  cuidando cada detalle.
                </p>
              </div>
              <div className="valor-item">
                <img src={iconoPuntualidad} alt="Puntualidad" />
                <h3>Transparencia y Ética</h3>
                <p>
                  Actuamos con honestidad y claridad en todas nuestras
                  operaciones, desde la planificación del viaje hasta la
                  finalización del servicio. Mantenemos relaciones basadas en la
                  confianza y la integridad con nuestros clientes, empleados y
                  socios.
                </p>
              </div>
              <div className="valor-item">
                <img src={iconoLiderazgo} alt="Liderazgo" />
                <h3>Calidad en el Servicio</h3>
                <p>
                  ofrecemos servicios turísticos de alta calidad, seleccionando
                  cuidadosamente a nuestros proveedores y destinos para asegurar
                  una experiencia memorable y placentera. Nos esforzamos
                  constantemente por mejorar y superar los estándares del
                  sector.
                </p>
              </div>
              <div className="valor-item">
                <img src={iconoColaboracion} alt="Colaboración" />
                <h3>Sostenibilidad</h3>
                <p>
                    Nos comprometemos con el turismo responsable y sostenible,
                  respetando el medio ambiente y las culturas locales en cada
                  destino. Promovemos prácticas que minimicen nuestro impacto
                  ambiental y contribuyan al desarrollo positivo de las
                  comunidades que visitamos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <VerticalSeparator altura="5" />
      </div>
    </div>
  );
};

export default Nosotros;

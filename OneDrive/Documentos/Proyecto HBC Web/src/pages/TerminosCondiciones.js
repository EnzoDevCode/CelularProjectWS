import React from "react";
import ImageBackground from "../components/ImageBackground";
import imgHeader from "../images/images-header/IMG_5427.jpg"; // Importar la imagen directamente
import "../styles/TerminosCondiciones.css";

import Par from "../components/Par";
import TitleSubtitle from "../components/TitleSubtitle";
import VerticalSeparator from "../components/VerticalSeparator";
import useFadeIn from "../hooks/useFadeIn";
import iconoLiderazgo from "../images/asistencia.png";
import iconoColaboracion from "../images/colaboracion.png";
import iconoPuntualidad from "../images/puntualidad.png";
import iconoResponsabilidad from "../images/seguridad-activada.png";

const TerminosCondiciones = () => {
  useFadeIn();

  return (
    <div>
      <ImageBackground url={imgHeader} />
      <VerticalSeparator altura="5" />
      <TitleSubtitle
        title="FADA Tours"
        subtitle="Términos y Condiciones"
        backgroundTitle="términos"
        position="centro"
      />
      <div className="">
        <Par position="centro">
          Estos Términos y Condiciones regulan el uso del canal digital de FADA
          Tours, así como la prestación de servicios turísticos. Al acceder y
          utilizar nuestros servicios, usted acepta estos Términos y
          Condiciones. Si no está de acuerdo con alguna parte, le solicitamos
          que no use nuestro canal digital.
        </Par>
        <VerticalSeparator altura="5" />
        <div className="bg-shadow">
          <TitleSubtitle
            title="Contacto"
            subtitle="Información de contacto"
            position="centro"
            backgroundTitle="contacto"
          />
          <div className="container-politics">
            <div className="parrafo fade-in">
              <h2 className="title fade-in">Derechos de los Usuarios</h2>
              <ul className="subtitulos">
                FADA Tours, ubicado en Psj. Las Tunas, Km 263, La Banda de
                Shilcayo, Tarapoto, San Martín, Perú, está registrado bajo el
                RUC N° 10334313811. Puede contactarnos a través de:
                <li>
                  <a className="linkRedes" href="#">
                    • Correo Electrónico: fadatours.info@gmail.com
                  </a>
                </li>
                <li>
                  <a className="linkRedes" href="#">
                    • WhatsApp: +51941950860
                  </a>
                </li>
                <li>
                  <a className="linkRedes" href="#">
                    • Facebook: FADA Tours en Facebook
                  </a>
                </li>
                <li>
                  <a className="linkRedes" href="#">
                    • Instagram: FADA Tours en Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle title="Objetivo" position="centro" />
          <div className="container-politics">
            <p className="parrafo fade-in">
              Estos Términos y Condiciones tienen como finalidad establecer las
              pautas de uso del canal digital de FADA Tours y regular la
              relación entre la agencia y los consumidores en la oferta,
              promoción y comercialización de servicios turísticos.
            </p>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle title="Servicios Ofrecidos" position="centro" />
          <div className="container-politics">
            <p className="parrafo fade-in">
              FADA Tours ofrece servicios de agencia de viajes, incluyendo la
              organización y promoción de tours, actividades recreativas y otros
              servicios relacionados con el turismo, conforme a la actividad
              económica 7911.
            </p>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle title="Registro y Normativas" position="centro" />
          <div className="container-politics">
            <p className="parrafo fade-in">
              FADA Tours está en proceso de inscripción en el Directorio
              Nacional de Prestadores de Servicios Turísticos Calificados del
              MINCETUR. Los usuarios serán informados de cualquier actualización
              en este sentido.
            </p>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle
            title="Protección de Datos Personales"
            position="centro"
          />
          <div className="container-politics">
            <p className="parrafo fade-in">
              FADA Tours se compromete a proteger la información personal de sus
              usuarios de acuerdo con la legislación vigente en materia de
              protección de datos. La información recabada será utilizada
              exclusivamente para fines relacionados con la prestación de
              nuestros servicios.
            </p>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle
            title="Canal Digital"
            subtitle="Términos de Uso del Canal Digital"
            position="centro"
            backgroundTitle="Térmidos de uso"
          />
          <div className="container-politics">
            <div className="parrafo fade-in">
              <h2 className="title fade-in">Terminos de Uso</h2>
              <ul className="subtitulos">
                Al utilizar nuestro canal digital, usted acepta las siguientes
                condiciones:
                <li>
                  • La información proporcionada en nuestra plataforma es clara,
                  sencilla y transparente, y es fácilmente accesible desde la
                  página de inicio.
                </li>
                <li>
                  • Se implementan medidas de seguridad para proteger la
                  información y los pagos en línea, así como para resguardar los
                  datos personales de los usuarios.
                </li>
              </ul>
            </div>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle
            title="Políticas de Cobro, Cancelación y Reembolso"
            position="centro"
          />
          <div className="container-politics">
            <div className="parrafo fade-in">
              <h2 className="title fade-in">Cobro, Cancelación y Reembolso</h2>
              <ul className="subtitulos">
                <li>
                  • Política de Cobro: Los pagos se procesarán a través de
                  plataformas seguras. Los usuarios recibirán confirmación de
                  sus transacciones.
                </li>
                <li>
                  • Política de Cancelación: Las cancelaciones deberán
                  realizarse con al menos 48 horas de antelación para evitar
                  cargos adicionales.
                </li>
                <li>
                  • Política de Reembolso: Los reembolsos se procesarán conforme
                  a la normativa vigente y según las condiciones específicas de
                  cada servicio.
                </li>
              </ul>
            </div>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle
            title="Política de Pérdida de Objetos"
            position="centro"
          />
          <div className="container-politics">
            <p className="parrafo fade-in">
              FADA Tours no se responsabiliza por la pérdida, robo o daño de
              objetos personales durante los tours. Es responsabilidad del
              usuario asegurarse de llevar sus pertenencias consigo y velar por
              su cuidado.
            </p>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle
            title="Cumplimiento de Normativas de ESNNA"
            position="centro"
          />
          <div className="container-politics">
            <p className="parrafo fade-in">
              FADA Tours se adhiere a las normativas que sancionan penalmente
              las conductas vinculadas a la explotación sexual de menores, así
              como otras disposiciones legales relacionadas. Disponemos de un
              afiche informativo en nuestro canal digital que detalla estas
              sanciones, cumpliendo con lo estipulado por el MINCETUR.
            </p>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle
            title="Aceptación de los Términos y Condiciones"
            position="centro"
          />
          <div className="container-politics">
            <p className="parrafo fade-in">
              El uso de nuestro canal digital implica la aceptación de estos
              Términos y Condiciones. Nos reservamos el derecho de modificar
              estos términos en cualquier momento, y cualquier cambio será
              notificado a los usuarios a través de nuestro sitio web.
            </p>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle title="Legislación Aplicable" position="centro" />
          <div className="container-politics">
            <p className="parrafo fade-in">
              Estos Términos y Condiciones se rigen por la legislación peruana y
              cualquier controversia que surja de la interpretación o ejecución
              de los mismos será resuelta en los tribunales competentes de Perú.
            </p>
            <p className="parrafo fade-in">
              Contacto: Para cualquier consulta relacionada con estos Términos y
              Condiciones, contáctenos a través de los medios mencionados
              anteriormente.
            </p>
          </div>
          <VerticalSeparator altura="5" />
        </div>
        <div className="bg-shadow">
          <TitleSubtitle
            title="Nuestro Valores"
            backgroundTitle="valores"
            position="izquierda"
          />
          <VerticalSeparator altura="2" />
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

export default TerminosCondiciones;

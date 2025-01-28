import React from "react";
import ImageBackground from "../components/ImageBackground";
import TitleSubtitle from "../components/TitleSubtitle";
import VerticalSeparator from "../components/VerticalSeparator";
import "../styles/Politicas.css";
import cityImg from "../images/images-header/Carpisuyacu.jpg"; // Imagen de fondo

const Politicas = () => {
  return (
    <div>
      <ImageBackground url={cityImg} />
      <VerticalSeparator altura="5" />
      <TitleSubtitle
        title="Políticas de HBC Travel"
        subtitle="Políticas de Reservas y Pagos"
        backgroundTitle="Políticas"
        position="centro"
      />
      <div className="container-top"></div>

      <div className="container-politics">
        {/* Reservas */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Políticas de Reserva</h2>
          <p className="parrafo fade-in">
            HBC Destinos Místicos S.R.L. (HBC Travel) tiene como objetivo ofrecerte la mejor experiencia en tus viajes dentro y fuera de Perú.
            Al reservar con nosotros, aceptas nuestras condiciones y políticas de cancelación.
          </p>
          <p className="parrafo fade-in">
            - Las cotizaciones son válidas únicamente al confirmar la reserva.
          </p>
          <p className="parrafo fade-in">
            - No cubrimos comidas no especificadas, gastos personales ni seguro de viaje.
          </p>
        </div>

        {/* Contrato */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Contrato</h2>
          <p className="parrafo fade-in">
            Al realizar una reserva mediante llamada, web o correo electrónico, aceptas los términos y condiciones de HBC Travel.
            Estos términos constituyen un acuerdo vinculante entre HBC Travel y el cliente.
          </p>
        </div>

        {/* Vuelos y demoras */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Vuelos y Demoras</h2>
          <p className="parrafo fade-in">
            - HBC Travel no se hace responsable por retrasos en vuelos o cambios de horario por parte de aerolíneas.
          </p>
          <p className="parrafo fade-in">
            - Es responsabilidad del cliente contar con la documentación válida y vigente para viajes nacionales o internacionales.
          </p>
        </div>

        {/* Pagos */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Pagos</h2>
          <p className="parrafo fade-in">
            - Se aceptan pagos en efectivo, transferencias bancarias, tarjetas de crédito/débito y apps como Yape o Plin.
          </p>
          <p className="parrafo fade-in">
            - Los pagos deben realizarse en los plazos acordados para garantizar la reserva.
          </p>
        </div>

        {/* Cancelaciones */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Política de Cancelaciones</h2>
          <p className="parrafo fade-in">
            - Cancelaciones con más de 48 horas de anticipación: reembolso del 80%.
          </p>
          <p className="parrafo fade-in">
            - Cancelaciones con menos de 48 horas de anticipación: no hay reembolso.
          </p>
        </div>

        {/* Uso de Datos */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Uso de Datos</h2>
          <p className="parrafo fade-in">
            - Compartimos información con aerolíneas, hoteles y otros proveedores de servicios solo cuando es necesario.
          </p>
          <p className="parrafo fade-in">
            - No vendemos ni alquilamos datos personales a terceros.
          </p>
        </div>

        {/* Privacidad y almacenamiento de datos */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Política de Privacidad y Datos</h2>
          <p className="parrafo fade-in">
            - Conservamos la información personal solo el tiempo necesario para brindar el servicio.
          </p>
          <p className="parrafo fade-in">
            - Los clientes pueden solicitar la eliminación de sus datos en cualquier momento.
          </p>
        </div>

        {/* Uso de imagen y testimonio */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Autorización de Uso de Imagen y Testimonio</h2>
          <p className="parrafo fade-in">
            - HBC Travel solicitará autorización explícita antes de usar imágenes o testimonios en campañas publicitarias.
          </p>
        </div>

        {/* Menores de Edad */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Menores de Edad</h2>
          <p className="parrafo fade-in">
            - Toda reserva de menores de edad debe ser gestionada por un padre o tutor legal.
          </p>
        </div>

        {/* Política de Responsabilidad Social */}
        <div className="parrafo fade-in">
          <h2 className="title fade-in">Política de Responsabilidad Social</h2>
          <p className="parrafo fade-in">
            - HBC Travel rechaza cualquier forma de explotación infantil y promueve el turismo sostenible.
          </p>
        </div>
      </div>

      <VerticalSeparator altura="10" />
    </div>
  );
};

export default Politicas;

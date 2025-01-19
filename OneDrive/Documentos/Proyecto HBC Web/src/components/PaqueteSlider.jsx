import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { paquetes } from "../data/paquetesData";
import "../styles/TourSlider.css";
import SliderCard from "./SliderCard";
import TitleSubtitle from "./TitleSubtitle";

const PaqueteSlider = ({ title, idPaqueteExcluido }) => {
  return (
    <section className="tour-slider-section">
      <TitleSubtitle title={title} position="centro" />
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3000, // Tiempo entre cada deslizamiento
          disableOnInteraction: false, // Continúa después de la interacción
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          1024: {
            slidesPerView: 3, // Mantener 3 elementos a partir de 1024px
            spaceBetween: 20, // Espacio entre elementos
          },
          810: {
            slidesPerView: 2, // Cambiar a 2 elementos a partir de 810px
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1, // Cambiar a 1 elemento para pantallas pequeñas
            spaceBetween: 10,
          },
        }}
        className="tour-slider"
      >
        {paquetes.filter((paquete) => paquete.id !== idPaqueteExcluido).map((paquete) => (
          <SwiperSlide key={paquete.id}>
            <SliderCard key={paquete.id} data={paquete} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PaqueteSlider;

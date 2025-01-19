import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/TourSlider.css';
import TitleSubtitle from './TitleSubtitle';
import Boton from './Boton';
import TourSliderCard from './TourSliderCard';

const TourSlider = ({ title, data = [], idTourExcluido, showButton = true }) => {
  // Validar si data es un array
  const toursData = Array.isArray(data) ? data : [];

  return (
    <section className="tour-slider-section">
      <TitleSubtitle title={title} position="centro" />
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          810: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className="tour-slider"
      >
        {toursData
          .filter((paquete) => paquete.id !== idTourExcluido)
          .map((tour) => (
            <SwiperSlide key={tour.id}>
              <TourSliderCard key={tour.id} data={tour} />
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Renderizar el botón solo si showButton es true */}
      {showButton && (
        <Boton
          to="/nosotros"
          texto="Conoce más Destinos"
          type="secondary-invertido"
          position="centro"
        />
      )}
    </section>
  );
};

export default TourSlider;

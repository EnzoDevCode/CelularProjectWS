import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/PhotoSlider.css";

const PhotoSliderPaquetes = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Cierrando el modal al presionar la tecla "Escape"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Configurando las flechas del slider para que no cierren el modal
  useEffect(() => {
    if (isModalOpen) {
      const prevButton = document.querySelector(
        ".fullscreen-slider .swiper-button-prev"
      );
      const nextButton = document.querySelector(
        ".fullscreen-slider .swiper-button-next"
      );

      const stopPropagation = (e) => e.stopPropagation();

      if (prevButton) prevButton.addEventListener("click", stopPropagation);
      if (nextButton) nextButton.addEventListener("click", stopPropagation);

      return () => {
        if (prevButton) prevButton.removeEventListener("click", stopPropagation);
        if (nextButton) nextButton.removeEventListener("click", stopPropagation);
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="image-slider"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Imagen del paquete ${index + 1}`}
              className="slider-image"
              onClick={() => openModal(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              loop={true}
              pagination={{ clickable: true }}
              navigation
              initialSlide={activeIndex}
              className="fullscreen-slider"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="fullscreen-image-wrapper"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={image}
                      alt={`Imagen en grande ${index + 1}`}
                      className="fullscreen-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoSliderPaquetes;

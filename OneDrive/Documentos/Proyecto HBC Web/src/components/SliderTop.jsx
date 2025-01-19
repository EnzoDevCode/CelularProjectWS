import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHeaderContext } from "../context/HeaderHoverContext";
import "../styles/Header.css";
import "../styles/SliderTop.css";

const SliderTop = ({ sliderImages }) => {
  const { isHeaderHovered } = useHeaderContext();
  const [animate, setAnimate] = useState(false);

  const handleSlideChange = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 50);
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="slider-top">
      <Swiper
        className="swiper-nav"
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
      >
        {sliderImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="swiper-slide-content"
              style={{
                transition: "opacity 0.9s ease, filter 0.3s ease",
                backgroundImage: `linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, ${isHeaderHovered ? 0.1 : 0}) 100%,
                  rgba(0, 0, 0, ${isHeaderHovered ? 0.3 : 0}) 30%,
                  rgba(0, 0, 0, 0) 0%,                             
                  rgba(0, 0, 0, 0) 0%                             
                ), url(${slide.url})`,
                filter: isHeaderHovered
                  ? "brightness(75%)"
                  : "brightness(100%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div className="text-overlay-container">
                <div className={`text-overlay ${slide.position}`}>
                  <h1 className="slide-subtitle">{slide.span1}</h1>
                  <h1 className="slide-title">{slide.title}</h1>
                  <button className="slider-button">
  Conócelo
  <i className="fas fa-chevron-right"></i>
</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderTop;

import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { paquetes } from "../data/paquetesData";
import { tours } from "../data/tourData";
import logo from "../images/images-logo/imagotipoBlanco.png";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToursMenuVisible, setIsToursMenuVisible] = useState(false);
  const [isPaquetesMenuVisible, setIsPaquetesMenuVisible] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [activeTourId, setActiveTourId] = useState(null);
  const [activePaqueteId, setActivePaqueteId] = useState(null);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const toursSwiperRef = useRef(null);
  const paquetesSwiperRef = useRef(null);

  const handleMouseEnterTours = (tourId) => {
    if (toursSwiperRef.current && toursSwiperRef.current.autoplay) {
      toursSwiperRef.current.autoplay.stop();
    }
    setActiveTourId(tourId);
  };

  const handleMouseLeaveTours = () => {
    if (toursSwiperRef.current && toursSwiperRef.current.autoplay) {
      toursSwiperRef.current.autoplay.start();
    }
    setActiveTourId(null);
  };

  const handleMouseEnterPaquetes = (paqueteId) => {
    if (paquetesSwiperRef.current && paquetesSwiperRef.current.autoplay) {
      paquetesSwiperRef.current.autoplay.stop();
    }
    setActivePaqueteId(paqueteId);
  };

  const handleMouseLeavePaquetes = () => {
    if (paquetesSwiperRef.current && paquetesSwiperRef.current.autoplay) {
      paquetesSwiperRef.current.autoplay.start();
    }
    setActivePaqueteId(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showToursMenu = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setIsToursMenuVisible(true);
  };

  const hideToursMenu = () => {
    const timeout = setTimeout(() => {
      setIsToursMenuVisible(false);
    }, 100);
    setHideTimeout(timeout);
  };

  const showPaquetesMenu = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setIsPaquetesMenuVisible(true);
  };

  const hidePaquetesMenu = () => {
    const timeout = setTimeout(() => {
      setIsPaquetesMenuVisible(false);
    }, 100);
    setHideTimeout(timeout);
  };

  const [progressTours, setProgressTours] = useState(0);
  const [progressPaquetes, setProgressPaquetes] = useState(0);
  const handleSlideChangeTours = (swiper) => {
    const currentIndex = swiper.realIndex;
    const totalSlides = tours.length;
    const newProgress = ((currentIndex + 1) / totalSlides) * 100;
    setProgressTours(newProgress);
  };

  const handleSlideChangePaquetes = (swiper) => {
    const currentIndex = swiper.realIndex;
    const totalSlides = paquetes.length;
    const newProgress = ((currentIndex + 1) / totalSlides) * 100;
    setProgressPaquetes(newProgress);
  };

  
  return (
    <div className="header">
      <div className="container">
        <div className="headerlogo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="menuheader-container">
          
        </div>
        <ul className="menuprincipal menuheader">
          <li id="active">
            <Link to="/">Inicio</Link>
          </li>
          <li className="nosotrosmenu">
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li
            className="toursmenu"
            onMouseEnter={showToursMenu}
            onMouseLeave={hideToursMenu}
          >
            <Link to="/destinos">
              Destinos
              <i className="fa fa-chevron-down">
                <span className="menudesplegable"></span>
              </i>
            </Link>
            <ul
              className={`submenu menutourul submenutours ${
                isToursMenuVisible ? "visible" : ""
              }`}
              onMouseEnter={showToursMenu}
              onMouseLeave={hideToursMenu}
            >
              <div className={`submenucontainer ${activeTourId ? "hovered-tours" : ""}`}>
                {
                  <Swiper
                    onSwiper={(swiper) => (toursSwiperRef.current = swiper)}
                    modules={[Navigation, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    navigation={true}
                    onSlideChange={handleSlideChangeTours}
                    className={activeTourId ? "has-active-card-tours" : ""}
                  >
                    {tours.map((tour) => (
                      <SwiperSlide key={tour.id}>
                        <Link to={`/tours/${tour.link}`}>
                          <div
                            className={`card ${activeTourId === tour.id ? "active" : ""}`}
                            onMouseEnter={() => handleMouseEnterTours(tour.id)}
                            onMouseLeave={handleMouseLeaveTours}
                          >
                            <img src={tour.imagenPrincipal} alt={tour.nombre} />
                            <div className="card-content">
                              <h4>{tour.title}</h4>
                              <p>{truncateText(tour.description, 100, "...")}</p>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                }
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${progressTours}%` }}
                  ></div>
                </div>
              </div>
            </ul>
          </li>

          <li
            className="paquetesmenu"
            onMouseEnter={showPaquetesMenu}
            onMouseLeave={hidePaquetesMenu}
          >
            <Link to="/paquetes">
              Paquetes<br/>Internacionales
              <i className="fa fa-chevron-down"></i>
            </Link>
            <ul
              className={`submenu menupaquetesul submenupaquetes ${
                isPaquetesMenuVisible ? "visible" : ""
              }`}
              onMouseEnter={showPaquetesMenu}
              onMouseLeave={hidePaquetesMenu}
            >
              <div className={`submenucontainer ${activePaqueteId ? "hovered-paquetes" : ""}`}>
                <Swiper
                  onSwiper={(swiper) => (paquetesSwiperRef.current = swiper)}
                  modules={[Navigation, Autoplay]}
                  slidesPerView={3}
                  spaceBetween={30}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop={true}
                  navigation={true}
                  onSlideChange={handleSlideChangePaquetes}
                  className={activePaqueteId ? "has-active-card-paquetes" : ""}
                >
                  {paquetes.map((paquete) => (
                    <SwiperSlide key={paquete.nombre}>
                      <div
                        className={`card ${activePaqueteId === paquete.id ? "active" : ""}`}
                        onMouseEnter={() => handleMouseEnterPaquetes(paquete.id)}
                        onMouseLeave={handleMouseLeavePaquetes}
                      >
                        <Link
                          to={`/paquete/${encodeURIComponent(paquete.nombre)}`}
                        >
                          <div className="fotosubmenu">
                            <img
                              src={paquete.imagenes[0]}
                              alt={paquete.nombre}
                            />
                          </div>
                          <div className="card-content">
                            <h4>{paquete.nombre}</h4>
                            <p>{truncateText(paquete.descripcion, 60, "...")}</p>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${progressPaquetes}%` }}
                  ></div>
                </div>
              </div>
            </ul>
          </li>
          <li
            className="paquetesmenu"
            onMouseEnter={showPaquetesMenu}
            onMouseLeave={hidePaquetesMenu}
          >
            <Link to="/paquetes">
              Paquetes<br/>Nacionales
              <i className="fa fa-chevron-down"></i>
            </Link>
            <ul
              className={`submenu menupaquetesul submenupaquetes ${
                isPaquetesMenuVisible ? "visible" : ""
              }`}
              onMouseEnter={showPaquetesMenu}
              onMouseLeave={hidePaquetesMenu}
            >
              <div className={`submenucontainer ${activePaqueteId ? "hovered-paquetes" : ""}`}>
                <Swiper
                  onSwiper={(swiper) => (paquetesSwiperRef.current = swiper)}
                  modules={[Navigation, Autoplay]}
                  slidesPerView={3}
                  spaceBetween={30}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop={true}
                  navigation={true}
                  onSlideChange={handleSlideChangePaquetes}
                  className={activePaqueteId ? "has-active-card-paquetes" : ""}
                >
                  {paquetes.map((paquete) => (
                    <SwiperSlide key={paquete.nombre}>
                      <div
                        className={`card ${activePaqueteId === paquete.id ? "active" : ""}`}
                        onMouseEnter={() => handleMouseEnterPaquetes(paquete.id)}
                        onMouseLeave={handleMouseLeavePaquetes}
                      >
                        <Link
                          to={`/paquete/${encodeURIComponent(paquete.nombre)}`}
                        >
                          <div className="fotosubmenu">
                            <img
                              src={paquete.imagenes[0]}
                              alt={paquete.nombre}
                            />
                          </div>
                          <div className="card-content">
                            <h4>{paquete.nombre}</h4>
                            <p>{truncateText(paquete.descripcion, 60, "...")}</p>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${progressPaquetes}%` }}
                  ></div>
                </div>
              </div>
            </ul>
          </li>
          <li className="contactomenu">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="hamburger-icon" onClick={toggleMenu}>
              <span
                className={`line ${isMenuOpen ? "line1-open" : "line1"}`}
              ></span>
              <span
                className={`line ${isMenuOpen ? "line2-open" : "line2"}`}
              ></span>
              <span
                className={`line ${isMenuOpen ? "line3-open" : "line3"}`}
              ></span>
            </div>
            <ul className={`menu-items ${isMenuOpen ? "menu-open" : ""}`}>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/tours" onClick={toggleMenu}>
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/paquetes" onClick={toggleMenu}>
                  Paquetes
                </Link>
              </li>
              <li>
                <Link to="/nosotros" onClick={toggleMenu}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" onClick={toggleMenu}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

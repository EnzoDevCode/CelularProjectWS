// src/components/TopHeader.js
import React, { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { useHeaderContext } from "../context/HeaderHoverContext";
import "../styles/TopHeader.css";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";

register();

const TopHeader = () => {
  const { setIsHeaderHovered } = useHeaderContext();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsScrolled(currentScrollPos > 0);

      if (currentScrollPos > lastScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollPos]);

  return (
    <div
      className={`topheader ${isVisible ? "visible" : "hidden"} ${
        isScrolled ? "visible-scrolled" : "at-top"
      }`}
    >
      <div className="topheader-background"></div>
      <div className="topheadercontent">
        <ul className="contact">
          <li className="hide-on-mobile">
            <a href="https://www.facebook.com/hbctraveI" C>
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="hide-on-mobile">
          <a
  href="https://www.instagram.com/hbc.travel.peru/"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-instagram"></i>
</a>
          </li>
          <li>
    <a href="https://www.tiktok.com/@hbc.travel.go?lang=es" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTiktok} />
    </a>
  </li>
  <li>
  <a
    href="https://wa.me/51943385957"
    target="_blank"
    rel="noopener noreferrer"
  >
    Contáctanos
    <i className="fab fa-whatsapp whatsapp-icon"></i> 
  </a>
</li>
          
        </ul>
      </div>
      <div
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <Header />
      </div>
    </div>
  );
};

export default TopHeader;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/SliderCard.css";

const TourSliderCard = ({ data }) => {
  return (
    <Link
      to={`/tours/${data.link}`}
      className="slider-card"
    >
      <div
        className="slider-card-image"
        style={{ backgroundImage: `url(${data.imagenPrincipal})` }}
      >
        <div className="slider-card-location">
          <i className="fas fa-map-marker-alt slider-card-location-icon"></i>
          {data.location}
        </div>
        <h3 className="slider-card-title">{data.title}</h3>
      </div>
      <div className="slider-card-content">
        <p className="slider-card-description">{data.descriptionm}</p>
        <div className="slider-card-footer">
          <div className="slider-card-footer-gradient"></div>
          <div className="slider-card-footer-content">
            {/* <div className="slider-card-divider"></div> */}
            <span className="slider-card-button">CONOCE MÁS</span>
            {/* <div className="slider-card-divider"></div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourSliderCard;

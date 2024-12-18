// Card.js
import React, { useState } from "react";
import "./css/Card.css";

const Card = ({ image, title, description, link }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div
    className={`card ${isContentVisible ? "card--active" : ""}`}

      onClick={toggleContent}
    >
      <img src={image} alt={title} className="card__image" />
      <div
        className={`card__content ${
          isContentVisible ? "card__content--visible" : ""
        }`}
      >
        <span className="card__description">{description}</span>
        <h2 className="card__title">{title}</h2>
        <a href={link} className="card__button" onClick={(e) => e.stopPropagation()}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
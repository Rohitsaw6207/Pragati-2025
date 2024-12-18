// Innovation.js
import React from "react";
import Card from "./Card";
import "./css/Event.css";

const Innovation = () => {
  return (
    <div className="innovation-container">
      <h1 className="innovation-title">COMPITITION :: QUIZ AND MATH APTITUDE</h1>
      <div className="card__grid">
        <Card
          image="https://via.placeholder.com/320x200"
          title="ENIGMA"
          description="TEAM:: (2-3), QUIZ AND MATH APTITUDE"
          link="/path1"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="QUIZOMANIA"
          description="TEAM:: (1-3), QUIZ AND MATH APTITUDE"
          link="/path2"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="MATH MANIA"
          description="TEAM:: (2), QUIZ AND MATH APTITUDE"
          link="/path3"  // unique link for this card
        />
      </div>
    </div>
  );
};

export default Innovation;
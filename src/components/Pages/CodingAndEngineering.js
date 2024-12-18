  // Innovation.js
import React from "react";
import Card from "./Card";
import "./css/Event.css";

const Innovation = () => {
  return (
    <div className="innovation-container">
      <h1 className="innovation-title">COMPITITION :: CODING AND ENGINEERING</h1>
      <div className="card__grid">
        <Card
          image="https://via.placeholder.com/320x200"
          title="CODEFIESTA"
          description="TEAM:: (2), CODING AND ENGINEERING"
          link="/path1"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="CATIA - DESIGN COMPETESTEST"
          description="TEAM:: (2), CODING AND ENGINEERING"
          link="/path2"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="CIRCUIT DESIGN COMPETITION"
          description="TEAM:: (1-3) ,CODING AND ENGINEERING"
          link="/path3"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="ML MANIA"
          description="TEAM:: (2) ,CODING AND ENGINEERING"
          link="/path4"  // unique link for this card
        />
      </div>
    </div>
  );
};

export default Innovation;
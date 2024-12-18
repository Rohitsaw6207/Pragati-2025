// Innovation.js
import React from "react";
import Card from "./Card";
import "./css/Event.css";

const Innovation = () => {
  return (
    <div className="innovation-container">
      <h1 className="innovation-title">COMPITITION :: GAMING</h1>
      <div className="card__grid">
        <Card
          image="https://via.placeholder.com/320x200"
          title="NFS-MOST WANTED"
          description="SOLO PATICIPATION, GAMING"
          link="/path1"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="FIFA"
          description="SOLO PATICIPATION, GAMING"
          link="/path2"  // unique link for this card
        />
      </div>
    </div>
  );
};

export default Innovation;
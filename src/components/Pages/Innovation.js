// Innovation.js
import React from "react";
import Card from "./Card";
import "./css/Event.css";

const Innovation = () => {
  return (
    <div className="innovation-container">
      <h1 className="innovation-title">COMPITITION :: INNOVATION</h1>
      <div className="card__grid">
        <Card
          image="https://via.placeholder.com/320x200"
          title="INNOVATIVE IDEA CONTEST"
          description="TEAM:: (4-6), INNOVATION"
          link="/path1"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="INNOVATIVE MODEL COMPETITION"
          description="TEAM:: (1-4), INNOVATION"
          link="/path2"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="TECHNICAL POSTER PRESENTATION"
          description="TEAM:: (1-3), INNOVATION"
          link="/path3"  // unique link for this card
        />
      </div>
    </div>
  );
};

export default Innovation;
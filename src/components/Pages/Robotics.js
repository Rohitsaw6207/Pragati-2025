// Innovation.js
import React from "react";
import Card from "./Card";
import "./css/Event.css";

const Innovation = () => {
  return (
    <div className="innovation-container">
      <h1 className="innovation-title">COMPITITION :: ROBOTICS</h1>
      <div className="card__grid">
        <Card
          image="https://via.placeholder.com/320x200"
          title="ROBO FIFA"
          description="TEAM:: (2-4), ROBOTICS"
          link="/path1"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="ROBO WAR"
          description="TEAM:: (2-4), ROBOTICS"
          link="/path2"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="CHASE THE MAZE"
          description="TEAM:: (2), ROBOTICS"
          link="/path3"  // unique link for this card
        />
      </div>
    </div>
  );
};

export default Innovation;
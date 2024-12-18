import React from "react";
import "./css/roomAllocation.css";

export const Allocation = () => {
  const roomAllocationData = [
    { idRange: "ID 1 to 100", room: "B301" },
    { idRange: "ID 101 to 200", room: "B302" },
    { idRange: "ID 201 to 300", room: "C401" },
    { idRange: "ID 301 to 400", room: "C402" },
    { idRange: "ID 401 to 500", room: "D501" },
  ];

  return (
    <div className="room-allocation-container">
      <h1 className="room-allocation-title">Room Allocation</h1>
      <div className="room-allocation-table">
        <div className="table-header">
          <div className="header-item">ID Range</div>
          <div className="header-item">Room</div>
        </div>
        {roomAllocationData.map((data, index) => (
          <div key={index} className="table-row">
            <div className="row-item">{data.idRange}</div>
            <div className="row-item">{data.room}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

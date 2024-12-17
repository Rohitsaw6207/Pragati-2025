import "./css/schedule.css";

const Schedule = () => {
  const scheduleData = [
    { time: "10:00 AM", event: "Opening Ceremony", location: "Main Hall" },
    { time: "11:00 AM", event: "Keynote Speech", location: "Auditorium" },
    { time: "12:30 PM", event: "Networking Break", location: "Lobby" },
    {
      time: "1:30 PM",
      event: "Workshop: AI in Robotics",
      location: "Room 202",
    },
    {
      time: "3:00 PM",
      event: "Panel Discussion: Future of Tech",
      location: "Main Hall",
    },
    { time: "5:00 PM", event: "Closing Remarks", location: "Auditorium" },
  ];

  return (
    <div className="schedule-container">
      <h1 className="schedule-title">Event Schedule -- Design 01</h1>
      <div className="schedule-table">
        {scheduleData.map((item, index) => (
          <div key={index} className="schedule-row">
            <div className="schedule-time">{item.time}</div>
            <div className="schedule-event">{item.event}</div>
            <div className="schedule-location">{item.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;

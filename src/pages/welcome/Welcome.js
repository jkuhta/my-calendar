import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

// Component to render Welcome screen
const Welcome = () => {
  const [currentDate, setCurrentTime] = useState(new Date(Date.now()));

  // Update current Time every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date(Date.now()));
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Format date to 'Day, Mth MM, YYY'
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  // Format time to HH:MM
  const formattedTime = currentDate.toLocaleTimeString("en-UK", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="page welcome">
      <div className="welcome-container">
        <div className="welcome-header">
          <i className="bx bxs-calendar"></i>{" "}
          <div className="welcome-header-date">{formattedDate}</div>
          <div className="welcome-header-time">{formattedTime}</div>
        </div>
        <div className="welcome-links">
          <Link to="/home" className="welcome-link link-button">
            Show Calendar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

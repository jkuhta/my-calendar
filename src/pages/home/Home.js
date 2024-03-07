import React, { useState } from "react";
import Calendar from "../../components/calendar/Calendar";
import CalendarControls from "../../components/calendarControls/CalendarControls";
import "./Home.css";
import { Link } from "react-router-dom";

// Component to render HomePage with Calendar and Calendar controls
const Home = ({ holidaysData }) => {
  const currentDate = new Date(Date.now());
  // State selectedDate defines month and year shown in calendar
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // Function to update Month to selected month
  const handleMonth = (selectedMonth) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(Number(selectedMonth));
    setSelectedDate(newDate);
  };

  // Function to update Month to next month
  const handleNextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + 1);
    // Do not allow Year to be more than 9999
    if (newDate.getFullYear() <= 9999) setSelectedDate(newDate);
  };

  // Function to update Month to previous month
  const handlePrevMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() - 1);
    // Do not allow Year to be less than 1
    if (newDate.getFullYear() > 0) setSelectedDate(newDate);
  };

  // Function to update Year to selected year
  const handleYear = (e) => {
    // Do not allow input 0000
    if (e.target.value === "0000") {
      e.target.value = "000";
      return;
    }
    const selectedYear = e.target.value;
    if (selectedYear.length === 4) {
      const newDate = new Date(selectedDate);
      newDate.setFullYear(Number(selectedYear));
      setSelectedDate(newDate);
    }
  };

  // Function to update Date to selected date
  const handleDate = (selectedDate_) => {
    let newDate = new Date(selectedDate_);
    setSelectedDate(newDate);
  };
  return (
    <div className="home page">
      <div className="home-header">
        <Link to="/" className="link-button back-button">
          <i className="bx bx-arrow-back"></i>
        </Link>
        <div className="page-title home-title">
          My Calendar <i className="bx bxs-calendar"></i>
        </div>
      </div>

      <CalendarControls
        handleMonth={handleMonth}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleYear={handleYear}
        handleDate={handleDate}
        selectedDate={selectedDate}
      />
      <Calendar
        currentDate={currentDate}
        selectedDate={selectedDate}
        holidaysData={holidaysData}
      />
    </div>
  );
};

export default Home;

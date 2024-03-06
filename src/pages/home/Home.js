import React, { useState } from "react";
import Calendar from "../../components/calendar/Calendar";
import CalendarControls from "../../components/calendarControls/CalendarControls";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = ({ holidaysData }) => {
  const currentDate = new Date(Date.now());

  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleMonth = (selected_month) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(Number(selected_month));
    setSelectedDate(newDate);
  };
  const handleNextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + 1);
    setSelectedDate(newDate);
  };
  const handlePrevMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() - 1);
    setSelectedDate(newDate);
  };

  const handleYear = (selected_year) => {
    if (selected_year.length === 4) {
      const newDate = new Date(selectedDate);
      newDate.setFullYear(Number(selected_year));
      setSelectedDate(newDate);
    }
  };

  const handleDate = (selected_date) => {
    let newDate = new Date(selected_date);
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

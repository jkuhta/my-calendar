import React from "react";
import "./CalendarControls.css";

const CalendarControls = ({
  handleMonth,
  handlePrevMonth,
  handleNextMonth,
  handleYear,
  handleDate,
  selectedDate,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ];
  return (
    <div className="controls">
      <div className="controls-container">
        <div className="controls-title">
          <button className="controls-chevron" onClick={handlePrevMonth}>
            <i className="bx bx-chevron-left"></i>
          </button>
          <div className="controls-title-text">
            {months[selectedDate.getMonth()].slice(0, 3)}{" "}
            {selectedDate.getFullYear()}{" "}
          </div>
          <button className="controls-chevron" onClick={handleNextMonth}>
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
        <div className="controls-inputs">
          <select
            className="controls-month"
            id="select-month"
            defaultValue={selectedDate.getMonth()}
            onChange={(e) => handleMonth(e.target.value)}
          >
            {months.map((month, i) => (
              <option value={i} key={i}>
                {month}
              </option>
            ))}
          </select>
          <input
            className="controls-year"
            type="text"
            id="select-year"
            name="select-year"
            onChange={(e) => handleYear(e.target.value)}
            placeholder="2024"
            maxlength="4"
          />
          <input
            className="controls-date"
            type="date"
            id="select-date"
            name="select-date"
            onChange={(e) => handleDate(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarControls;

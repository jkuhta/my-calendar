import React from "react";
import "./CalendarControls.css";

// Component to show calendar controls - select month | select year | select date
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
            type="number"
            id="select-year"
            name="select-year"
            min="1"
            max="9999"
            pattern="[0-9]{3}[1-9]"
            onChange={(e) => handleYear(e)}
            placeholder="YYYY"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 4))}
          />
          <input
            className="controls-date"
            type="date"
            id="select-date"
            name="select-date"
            onChange={(e) => handleDate(e.target.value)}
            max="9999-12-31"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarControls;

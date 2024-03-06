import "./Calendar.css";

const Calendar = ({ currentDate, selectedDate, holidaysData }) => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  var month = selectedDate.getMonth();
  var year = selectedDate.getFullYear();

  const allDatesToShow = [];
  const startDay = new Date(year, month, 1).getDay();
  const overflow = startDay - 2;
  for (let i = -overflow; i < 35 - overflow; i++) {
    let day = new Date(year, month, i);
    allDatesToShow.push(day);
  }

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="calendar">
      <div className="calendar-container">
        <div className="calendar-header calendar-header-default">
          {weekDays.map((weekDay, i) => (
            <div key={i} className="calendar-header-item">
              {weekDay}
            </div>
          ))}
        </div>
        <div className="calendar-header calendar-header-small">
          {weekDays.map((weekDay, i) => (
            <div key={i} className="calendar-header-item">
              {weekDay.slice(0, 1)}
            </div>
          ))}
        </div>
        <div className="calendar-body">
          {allDatesToShow.map((date, i) => {
            const formattedDate = formatDate(date);
            const holiday = holidaysData.find(
              (holiday) =>
                (holiday.Date.slice(5) === formattedDate.slice(5) &&
                  holiday.Fixed === "True") ||
                holiday.Date === formattedDate
            );

            return (
              <div
                key={i}
                className={`calendar-body-item 
        ${date.getDay() === 0 ? "sunday" : ""}
        ${formattedDate === formatDate(currentDate) ? "current-day" : ""}
        ${holiday ? "holiday" : ""}
        ${date.getMonth() === month ? "" : "not-current-month"}`}
              >
                <div className="calendar-body-item-header">
                  <div className="calendar-body-item-label">
                    {holiday && (
                      <div className="calendar-body-item-label-holiday">
                        <i className="bx bx-party"></i>
                      </div>
                    )}
                    {date.getDate()}
                  </div>
                </div>
                {holiday && (
                  <>
                    <div className="calendar-body-item-holiday">
                      {holiday.Name}
                    </div>
                    <div className="calendar-body-item-holiday-icon">
                      <i className="bx bx-party"></i>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

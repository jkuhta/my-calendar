import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import holidaysCSV from "./assets/publicholiday.SI.2024.csv";
import Papa from "papaparse";
import { useEffect, useState } from "react";

function App() {
  // Parse CSV file to store holidays
  const [holidaysData, setHolidaysData] = useState([]);

  useEffect(() => {
    parseCSVFile();
  }, []);

  const parseCSVFile = () => {
    Papa.parse(holidaysCSV, {
      download: true,
      header: true,
      delimiter: ",",
      complete: function (results) {
        setHolidaysData(results.data);
      },
    });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route
            path="/home"
            element={<Home holidaysData={holidaysData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

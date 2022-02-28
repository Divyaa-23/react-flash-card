import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Cardeditor from "./components/Cardeditor";
import Cardviewer from "./components/Cardviewer";

function App() {
  const [frontValue, setFrontValue] = useState("");

  const [backValue, setBackValue] = useState("");

  //get data from localStorage
  const getInitialList = () => {
    const initialValue = localStorage.getItem("frontBack")
      ? JSON.parse(localStorage.getItem("frontBack"))
      : [];
    return initialValue;
  };

  const [result, setResult] = useState(getInitialList);

  //set input to localStorage
  useEffect(() => {
    if (result.length >= 0) {
      localStorage.setItem("frontBack", JSON.stringify(result));
    }
  }, [result]);

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<App />} />

          <Route
            index
            element={
              <Cardeditor
                result={result}
                setResult={setResult}
                setFrontValue={setFrontValue}
                setBackValue={setBackValue}
                frontValue={frontValue}
                backValue={backValue}
              />
            }
          />
          <Route path="/Cardviewer" element={<Cardviewer result={result} />} />

          <Route path="*" element={<App/>} /> 
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

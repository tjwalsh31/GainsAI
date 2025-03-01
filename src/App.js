import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage"; // Import HomePage

function App() {
  return (
    <div className="App">
      <HomePage />  {/* ✅ Now using HomePage */}
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage"; // Import HomePage
import Navbar from "./Components/Navbar/Navbar"; // Import Navbar
import Footer from "./Components/Footer/Footer"; // Import Footer

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Add Navbar here */}
      <HomePage />  {/* ✅ Now using HomePage */}
      <Footer />  {/* Add Footer here */}
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "../../Components/Navbar/Navbar"; // Import Navbar component
import "./HomePage.css"; // Import CSS for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar /> {/* Add Navbar component */}
      <h1>Welcome to GainsAI</h1>
    </div>
  );
};

export default HomePage;

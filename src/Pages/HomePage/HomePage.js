import React from "react";
import Navbar from "../../Components/Navbar/Navbar"; // Import Navbar component
import Footer from "../../Components/Navbar/Footer"; // Go up two directories, then into Components/Footer
import "./HomePage.css"; // Import CSS for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar /> {/* Add Navbar component */}
      <h1>Welcome to GainsAI</h1>
      
      <div className="planner-container">
        {/* Workout Planner Section */}
        <section className="workout-planner">
          <h2>Workout Planner</h2>
          <p>Generate a personalized workout plan to match your fitness goals.</p>
          <button onClick={() => window.location.href='/workout-planner'}>Go to Workout Planner</button>
        </section>
        
        {/* Meal Planner Section */}
        <section className="meal-planner">
          <h2>Meal Planner</h2>
          <p>Get AI-generated meal plans to help you achieve your fitness goals.</p>
          <button onClick={() => window.location.href='/meal-planner'}>Go to Meal Planner</button>
        </section>
      </div>

      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default HomePage;

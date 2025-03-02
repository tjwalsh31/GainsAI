import React, { useState } from "react";
import ExerciseList from ".../Components/Workout/Exercises"; // Correctly import ExerciseList
import "./ExercisesPage.css"; // Import the CSS file

const ExercisesPage = () => {
  const [bodyPart, setBodyPart] = useState("biceps");
  const [showExercises, setShowExercises] = useState(false); // State to control visibility

  const handleShowExercises = () => {
    setShowExercises(true); // Show exercises when the button is clicked
  };

  return (
    <div className="container">
      <h1>Exercise Finder</h1>
      <div className="formGroup">
        <label>Select Body Part:</label>
        <select
          value={bodyPart}
          onChange={(e) => setBodyPart(e.target.value)}
          className="select"
        >
          <option value="biceps">Biceps</option>
          <option value="chest">Chest</option>
          <option value="back">Back</option>
          <option value="legs">Legs</option>
          <option value="shoulders">Shoulders</option>
        </select>
      </div>

      <button onClick={handleShowExercises} className="button">
        Show Exercises
      </button>

      {showExercises && <ExerciseList bodyPart={bodyPart} />}
    </div>
  );
};

export default ExercisesPage;
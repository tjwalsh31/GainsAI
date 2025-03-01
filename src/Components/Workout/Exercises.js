import React, { useEffect, useState } from "react";
import axios from "axios";

const ExerciseList = ({ bodyPart }) => {
  const [exercises, setExercises] = useState([]);

  // Fetch exercises when the bodyPart changes
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          {
            headers: {
              "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
              "X-RapidAPI-Key": "d47f788badmsh829fb15b0d01428p133b75jsn596099baedb4", // Replace with your key
            },
          }
        );
        setExercises(response.data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, [bodyPart]);

  return (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          <h2>{exercise.name}</h2>
          <p>{exercise.instructions}</p>
          <p>Equipment: {exercise.equipment}</p>
          <p>Target: {exercise.target}</p>
        </li>
      ))}
    </ul>
  );
};

export default ExerciseList;
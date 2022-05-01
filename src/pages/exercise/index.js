import React from "react";
import { useParams } from "react-router-dom";

const ExercisePage = () => {
  const { exerciseId } = useParams();
  return (
    <div>
      <h1>Exercise Page</h1>
      <p>Exercise Id: {exerciseId}</p>
    </div>
  );
};

export { ExercisePage };

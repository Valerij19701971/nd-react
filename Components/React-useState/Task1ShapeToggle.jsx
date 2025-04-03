import React, { useState } from 'react';
import './Task1ShapeToggle.css';

function Task1ShapeToggle() {
  const [isCircle, setIsCircle] = useState(true);

  const toggleShape = () => {
    setIsCircle(!isCircle);
  };

  return (
    <div>
      <button onClick={toggleShape}>Change</button>
      <div className={isCircle ? 'circle' : 'square'}></div>
    </div>
  );
}

export default Task1ShapeToggle;

import React, { useState } from "react";

const PasswordCount = ({ onPasswordLengthChange }) => {
  const [count, setCount] = useState(10);

  const handleSliderChange = (event) => {
    const length = event.target.value;
    setCount(length);
    onPasswordLengthChange(length);
  };

  return (
    <div className="count-container">
      <p>Password Length:</p>
      <input type="text" className="input1" value={count} readOnly />
      <input
        type="range"
        min="4"
        max="30"
        value={count}
        onChange={handleSliderChange}
        className="slider"
      />
    </div>
  );
};

export default PasswordCount;

import React, { useState, useEffect } from "react";

const CheckBoxes = ({ onSelectionChange }) => {
  const [options, setOptions] = useState({
    upperCase: true,
    lowerCase: true,
    numbers: true,
    specialCharacters: true,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions, [name]: checked };

      if (onSelectionChange) {
        onSelectionChange(updatedOptions);
      }

      return updatedOptions;
    });
  };

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(options);
    }
  }, []);

  return (
    <div className="checkbox-container">
      <div className="checkbox-item">
        <label htmlFor="upperCase">UpperCase</label>
        <input
          type="checkbox"
          id="upperCase"
          name="upperCase"
          checked={options.upperCase}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="checkbox-item">
        <label htmlFor="lowerCase">LowerCase</label>
        <input
          type="checkbox"
          id="lowerCase"
          name="lowerCase"
          checked={options.lowerCase}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="checkbox-item">
        <label htmlFor="numbers">Numbers</label>
        <input
          type="checkbox"
          id="numbers"
          name="numbers"
          checked={options.numbers}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="checkbox-item lower-padding">
        <label htmlFor="specialCharacters">Special Characters</label>
        <input
          type="checkbox"
          id="specialCharacters"
          name="specialCharacters"
          checked={options.specialCharacters}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

export default CheckBoxes;

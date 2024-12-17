import React, { useState, useEffect } from "react";
import { MdContentCopy } from "react-icons/md";
import { BsArrowClockwise } from "react-icons/bs";

const Password = ({ options, passwordLength }) => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const characters = [
      ...(options.upperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""),
      ...(options.lowerCase ? "abcdefghijklmnopqrstuvwxyz" : ""),
      ...(options.numbers ? "0123456789" : ""),
      ...(options.specialCharacters ? "!@#$%^&*()_+[]{}|;:,.<>?" : ""),
    ];
    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    } else {
      alert("No password to copy. Generate one first!");
    }
  };

  useEffect(() => {
    if (options && passwordLength) {
      generatePassword();
    }
  }, [options, passwordLength]);

  return (
    <div className="input-container">
      <div className="input-box">
        <input type="text" className="input" value={password} readOnly />
        <BsArrowClockwise className="input-icon" onClick={generatePassword} />
      </div>
      <button className="button" onClick={copyToClipboard}>
        <MdContentCopy style={{ fontSize: "17px", paddingRight: "3px", transform: "translateY(20%)" }} />
        Copy
      </button>
    </div>
  );
};

export default Password;

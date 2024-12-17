import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Password from "./components/Password";
import PasswordCount from "./components/PasswordCount";
import CheckBoxes from "./components/CheckBoxes";

const App = () => {
  const [passwordLength, setPasswordLength] = useState(10);
  const [options, setOptions] = useState({
    upperCase: true,
    lowerCase: true,
    numbers: true,
    specialCharacters: true,
  });

  const handlePasswordLengthChange = (length) => {
    setPasswordLength(length);
  };

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
  };

  return (
    <div className="container">
      <Header></Header>
      <Password options={options} passwordLength={passwordLength} />
      <PasswordCount onPasswordLengthChange={handlePasswordLengthChange} />
      <CheckBoxes onSelectionChange={handleOptionsChange} />
      <Footer></Footer>
    </div>
  );
};

export default App;

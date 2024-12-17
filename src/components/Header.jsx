import { SlLock } from "react-icons/sl";

const Header = () => {
  return (
    <center>
      <SlLock className="lock-icon" />
      <h1 className="header">PASSWORD GENERATOR</h1>
      <p className="para">
        Create strong and secure passwords to <br /> keep your account safe online.
      </p>
    </center>
  );
};

export default Header;

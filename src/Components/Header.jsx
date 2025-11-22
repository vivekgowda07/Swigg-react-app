import { useState } from "react";
import { LOGO_IMG } from "../Utils/constants";

const Header = () => {
  const [LoginBtn, setLoginBtn] = useState("Login");
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img className="logo" src={LOGO_IMG} alt="food-image" />
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                LoginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {LoginBtn}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

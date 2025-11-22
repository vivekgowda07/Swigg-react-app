import { useState } from "react";
import { LOGO_IMG } from "../Utils/constants";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/contact">
              <li>Contact</li>
            </Link>

            <Link to="about">
              <li>About</li>
            </Link>
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

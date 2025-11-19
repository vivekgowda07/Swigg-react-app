// import react from "react";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://tse4.mm.bing.net/th/id/OIP.7X1xKUwWi7yWibpA9Ea2iwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="food-image"
          />
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

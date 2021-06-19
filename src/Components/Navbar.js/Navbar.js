import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="heading">PROTOTYPE-FLIPKART</div>
      <input placeholder="Search your favourite Products" />
      <button className="signin">SignIn</button>
    </div>
  );
};

export default Navbar;

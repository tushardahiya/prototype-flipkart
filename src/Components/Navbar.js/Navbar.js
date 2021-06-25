import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import FlipkartLogo from "../../assets/flipkartLogo.png";
import CartLogo from "../../assets/cart.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-container">
        <Link to="/">
          <div className="logo">
            <img src={FlipkartLogo} />
          </div>
        </Link>
        <div className="searchbar">
          <input placeholder="Search your favourite Products" />
          <button>Go</button>
        </div>
      </div>
      <div className="right-container">
        <Link to="/login">Sign In</Link>
        <Link to="/cart">
          <img src={CartLogo} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

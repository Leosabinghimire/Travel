import React from "react";
import "./Navbar.css";
import logo from "../../assets/travel logo.png";
import { FaHotel, FaPlane } from "react-icons/fa";

function Navbar({ toggleModal, isLogin }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-button">
          <FaPlane className="icon" /> Find Flight
        </button>
        <button className="navbar-button">
          <FaHotel className="icon" /> Find Stays
        </button>
      </div>

      <div className="navbar-center">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      <div className="navbar-right">
        <button
          onClick={() => toggleModal(false)}
          className="navbar-button login"
        >
          Login
        </button>
        <button
          onClick={() => toggleModal(true)}
          className="navbar-button signup"
        >
          Signup
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

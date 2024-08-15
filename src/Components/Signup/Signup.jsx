import React from "react";
import "./Signup.css";
import { X } from "lucide-react";
import Logo from "../../assets/travel logo.png";

const SignUp = ({ toggleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={Logo} alt="logo" className="modal-logo" />
        <button onClick={toggleModal} className="close-button">
          <X />
        </button>
        <div className="modal-header">
          <h2 className="modal-title">Signup</h2>
        </div>
        <form className="form">
          <input type="email" placeholder="Email" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

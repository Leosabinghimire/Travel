import React from "react";
import "./Login.css";
import { X } from "lucide-react";
import logo from "../../assets/travel logo.png"; // Ensure the path is correct

const Login = ({ toggleModal, toggleAuthMode, isLogin }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={logo} alt="Logo" className="modal-logo" />
        <button onClick={toggleModal} className="close-button">
          <X />
        </button>
        <div className="modal-header">
          <h2 className="modal-title">Login</h2>
        </div>
        <form className="form">
          <input type="email" placeholder="Email" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p className="toggle-auth">
          Don't have an account?{" "}
          <button onClick={toggleAuthMode} className="toggle-auth-button">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

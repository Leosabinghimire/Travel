import React from "react";
import "./Hero.css";
import { FaHotel, FaPlane, FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <main>
      <div className="hero">
        <div className="hero-content">
          <h1>Helping Others</h1>
          <h2>LIVE & TRAVEL</h2>
          <p>Special offers to suit your plan</p>
        </div>
      </div>
      {/* Form */}
      <div className="search-form">
        <div className="form-tabs">
          <button className="active">
            <FaPlane className="icon" /> Flights
          </button>
          <button>
            <FaHotel className="icon" />
            Stays
          </button>
        </div>
        <form>
          <div className="form-group">
            <label>From - To</label>
            <input type="text" defaultValue="Lahore - karachi" />
          </div>
          <div className="form-group">
            <label>Trip</label>
            <select>
              <option>Return</option>
              <option>One-ways</option>
            </select>
          </div>
          <div className="form-group">
            <label>Depart - Return</label>
            <input id="date-input" type="date" defaultValue="2024-07-09" />
          </div>

          <div className="form-group">
            <label>Passenger - Class</label>
            <input type="text" defaultValue="1 Passenger, Economy" />
          </div>
        </form>
        <div className="form-actions">
          <button className="promo-btn">+ Add Promo Code</button>
          <button className="search-btn">
            <FaSearch className="icon" />
            Show Flights
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;

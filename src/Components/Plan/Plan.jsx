import React from "react";
import "./plan.css";
import turkey from "../../assets/Turkey.jpg";
import france from "../../assets/france.jpg";
import japan from "../../assets/japan.jpg";
import usa from "../../assets/us.jpg";
import austraila from "../../assets/austraila.jpg";
import azerbaijan from "../../assets/azerbaijan.jpg";
import maldives from "../../assets/maldives.jpg";

const Plan = () => {
  const items = [
    {
      image: turkey,
      title: "Istanbul, Turkey",
      subtitle: "Flights · Hotels · Resorts",
    },
    {
      image: france,
      title: "Paris, France",
      subtitle: "Flights · Hotels · Tours",
    },
    {
      image: japan,
      title: "Tokyo, Japan",
      subtitle: "Flights · Hotels · Experiences",
    },
    {
      image: usa,
      title: "New York, USA",
      subtitle: "Flights · Hotels · Activities",
    },
    {
      image: austraila,
      title: "Sydnet, Austraila",
      subtitle: "Flights · Hotels · Activities",
    },
    {
      image: azerbaijan,
      title: "Baku, Azerbaijan",
      subtitle: "Flights · Hotels · Activities",
    },
    {
      image: maldives,
      title: "male, Maldives",
      subtitle: "Flights · Hotels · Activities",
    },
    {
      image: maldives,
      title: "male, Maldives",
      subtitle: "Flights · Hotels · Activities",
    },
    {
      image: maldives,
      title: "male, Maldives",
      subtitle: "Flights · Hotels · Activities",
    },
  ];

  return (
    <section className="plan-section">
      <div className="plan-header">
        <h2>Plan Your Perfect Trip</h2>
        <p>Search Flights & Places to Hire in our most popular destinations</p>
      </div>

      <div className="plan-gallery">
        {items.map((item, index) => (
          <div className="gallery-item" key={index}>
            <div className="image-container">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
              />
            </div>
            <div className="content">
              <h3 className="title">{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}
        <button className="btn">See More</button>
      </div>
    </section>
  );
};

export default Plan;

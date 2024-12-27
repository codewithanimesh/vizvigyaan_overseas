import React from "react";
import sideimg from "../assests/side-img.jpeg";
import "./css/visa.css";
import plane from "../assests/plane.png";
import graduation from "../assests/graduation-cap.png";
import buildings from "../assests/Buildings.png";
import growth from "../assests/Growth.png";
import vector from "../assests/Vector.png";

const Visa = () => {
  const decorativeLines = [
    { left: "228px", top: "-166.19px", background: "#FFF" },
    { left: "200px", top: "-89.19px", background: "#E4F2F8" },
    { left: "270px", top: "-118.475px", background: "#FFF" },
    { left: "53px", top: "60px", background: "#E4F2F8" }
  ];

  const visaTypes = [
    { icon: plane, title: "Tourist Visa" },
    { icon: growth, title: "Commercial Visa" },
    { icon: graduation, title: "Study Visa" },
    { icon: buildings, title: "Residence Visa" },
    { icon: graduation, title: "Student Visa" },
    { icon: vector, title: "Business Visa" }
  ];

  const renderDecorationLine = (style, index) => (
    <div
      key={index}
      style={{
        width: "51.564px",
        height: "237.652px",
        transform: "rotate(42.63deg)",
        position: "relative",
        borderRadius: "51px",
        ...style
      }}
    />
  );

  const renderVisaGridItem = ({ icon, title }, index) => (
    <div key={index} className="visa-grid-item-heading" style={title === "Business Visa" ? {zIndex: "1"} : {}}>
      <div className="grid-item-inner-pill">
        <img 
          src={icon} 
          alt={title.toLowerCase()} 
          style={{
            width: "20px",
            height: "20px",
            flexShrink: "0",
            backgroundColor: "#f34e5e",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            rotate: "320deg"
          }}
        />
      </div>
      <h3>{title}</h3>
      <p>Eligible for students from all over the world</p>
    </div>
  );

  return (
    <div className="visa-container">
      <div className="visa-content-container">
        <div className="visa-content">
          <h2>
            <span style={{ color: "black" }}>Visa types and eligibility</span>{" "}
            <br />
            <span style={{ color: "#F28623" }}>assessment</span>
            <br />
          </h2>
          {decorativeLines.map((style, index) => renderDecorationLine(style, index))}
        </div>
        <div className="side-image">
          <img
            src={sideimg}
            alt="side image"
            style={{
              width: "772px",
              height: "594px",
              marginRight: "34px",
              borderRadius: "16px",
              background: `url(${sideimg}) lightgray 50% / cover no-repeat`,
              position: "relative",
              marginTop: "64px",
              zIndex: "1",
            }}
          />
        </div>
      </div>
      <div className="visa-grid">
        <div className="visa-grid-item">
          {visaTypes.map((type, index) => renderVisaGridItem(type, index))}
        </div>
      </div>
    </div>
  );
};

export default Visa;
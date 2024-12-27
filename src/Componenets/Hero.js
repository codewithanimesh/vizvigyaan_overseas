import React from "react";
import heroimg from "../assests/heroimg.jpeg";
import "./css/hero.css";
import familyimg from "../assests/familyImg.png";
import family from "../assests/family.png";

const Hero = () => {
  const heroStyle = {
    background: `linear-gradient(0deg, rgba(30, 30, 30, 0.3) 0%, rgba(30, 30, 30, 0.3) 100%), url(${heroimg})`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="hero-container">
      <div className="hero" style={heroStyle}>
        <div className="hero-content">
          <div className="trusted-badge">
            <h3>Your Most Trusted Partners</h3>
          </div>
          
          <div className="hero-content-heading">
            <h1>
              Immigration & Visa
              <br />
              Consulting Here...
            </h1>
          </div>
          <div className="content-para">
            <p>
              Transnds is the world's driving worldwide coordination supplier we
              uphold <br />industry and exchange the worldwide trade of merchandi
            </p>          
          </div>
          <button className="explore-btn">Explore More →</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
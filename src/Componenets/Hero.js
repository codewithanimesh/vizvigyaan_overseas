import React from "react";
import heroimg from "../assests/heroimg.jpeg"
import "./css/hero.css";
import familyimg from "../assests/familyImg.png";
import family from "../assests/family.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div
        className="hero"
        style={{
          background: `linear-gradient(0deg, rgba(30, 30, 30, 0.3) 0%, rgba(30, 30, 30, 0.3) 100%), url(${heroimg})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        
      
        }}
      >
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
         <div classname="content-para">
          <p>
            Transnds is the world's driving worldwide coordination supplier we
            uphold <br />industry and exchange the worldwide trade of merchandi
          </p>          
          </div>
          <button className="explore-btn">Explore More →</button>
        </div>
      </div>

      {/* <div className="about-content">
        <div className="about-content-container">
          <div className="about-content-left">
            <div className="blue-box"></div>
            <div className="orange-border"></div>
            <div className="image-1">
              <img src={familyimg} alt="family" />
            </div>
            <div className="image-2">
              <img src={family} alt="family" />
            </div>
          </div>
          <div className="about-content-right">
            <h3>About company</h3>
            <p>
              Welcome to Experience Visa <br />
              Consulting Firm
              <br />
            </p>
            <h4>
              Transmds is the world’s driving worldwide <br/>coordinations supplier —
              we uphold industry and <br/>exchange the worldwide trade of merchandi
            </h4>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;

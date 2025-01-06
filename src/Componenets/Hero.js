import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroimg from "../assests/heroimg.jpeg";
import "./css/hero.css";
import { useNavigate } from "react-router-dom";
import { useSelectedCountry } from "../context/selectedcountrycontext";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const { SetSelectedCountry,SetSelectedType,SelectedType } = useSelectedCountry();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const navidatetoForm = (item) => {
    console.log("itemmm", item);
    console.log("context",SelectedType)
    SetSelectedCountry(null)
    SetSelectedType(item);
    navigate("/enquiryform");
  };

  const visittypedata = ["Work", "Study", "Migrate", "Travel"];

  return (
    <div className="hero-container" ref={heroRef}>
      <div
        className="hero"
        style={{
          background: `linear-gradient(0deg, rgba(30, 30, 30, 0.3) 0%, rgba(30, 30, 30, 0.3) 100%), url(${heroimg})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="visit-type-map">
          {visittypedata.map((item, index) => {
            return (
              <div
                key={index}
                className="per-item-of-visit-data"
                onClick={() => navidatetoForm(item)} 
              >
                {item}
              </div>
            );
          })}
        </div>

        <div className="hero-content" ref={contentRef}>
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
              Transnds is the world's leading global coordination provider. We
              support industry and trade in the global exchange of goods.
            </p>
          </div>
          <button className="explore-btn">Explore More →</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);

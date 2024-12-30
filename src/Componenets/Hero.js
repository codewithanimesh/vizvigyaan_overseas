import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroimg from "../assests/heroimg.jpeg";
import "./css/hero.css";
import familyimg from "../assests/familyImg.png";
import family from "../assests/family.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

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
            Transnds is the world's driving worldwide coordination provider we
            uphold <br />industry and trade in the global exchange of merchandise.
          </p>          
          </div>
          <button className="explore-btn">Explore More →</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
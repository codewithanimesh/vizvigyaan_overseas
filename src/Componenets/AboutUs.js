import React from "react";
import "../Componenets/css/AboutUs.css";
import heroimg from "../assests/heroimg.jpeg";
import Head from "../Componenets/Head";
import Header from "../Componenets/Header";
import aboutusimg from "../assests/aboutusimg.jpeg";
const AboutUs = () => {
  const cardData = [
    { count: "30k+", text: "we have worked with clients" },
    { count: "30k+", text: "we have worked with clients" },
    { count: "30k+", text: "we have worked with clients" },
    { count: "30k+", text: "we have worked with clients" },
    { count: "30k+", text: "we have worked with clients" },
  ];

  const Circle = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
    >
      <circle cx="4" cy="4" r="4" fill="#F28623" />
    </svg>
  );

  return (
    <>
      <Head />
      <Header />
      <div className="aboutus-main-container">
        <div className="aboutus-heading">
          <div className="aboutus-heading-text">
            <p>About us</p>
            <h2>Committed to Your Visa</h2>
            <h3>
              Transmds is the world's driving worldwide <br />
              coordinations
            </h3>
          </div>
          <div className="heading-img">
            <img src={heroimg} alt="hero" />
          </div>
        </div>
        <div className="card-conatiner">
          <div className="card-row">
            {cardData.map((card, index) => (
              <div className="card" key={index}>
                <h2>{card.count}</h2>
                <div className="circle-container">
                  <Circle />
                  <Circle />
                  <Circle />
                </div>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div classname="aboutus-remaining-container">
          <div className="aboutus-remaining-text-img-container">
            <div className="aboutus-remaining-text">
              <h2>
                Dependable and Trustworthy Visa & <br />
                <span style={{color: "#F28623"}}>Immigration Guidance</span>              </h2>
              <p>
                Transmds is the world’s driving worldwide coordinations supplier
                we uphold industry and <br /> exchange the worldwide trade. Transmds is
                the world’s driving worldwide coordinations <br />supplier we uphold
                industry and exchange the worldwide trade of merchandi. Transmds
                is <br />
                 the world’s driving worldwide coordinations supplier we
                uphold industry and exchange the <br /> worldwide trade of merchandi.
              </p>
            </div>
            <div className="aboutus-img">
              <img src={aboutusimg} alt="aboutusimg" />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

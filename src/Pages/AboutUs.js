import React, { useState } from "react";

import "../Componenets/css/AboutUs.css";
import "../App.css"
import Head from "../Componenets/Head";
import Header from "../Componenets/Header";
import aboutusimg from "../assests/aboutusimg.jpeg";
import Teams from "../Componenets/Teams"
import Footer from "../Componenets/Footer";
import girlpic from "../assests/Rectangle 4 (1).png"

import { useSelectedCountry } from '../context/selectedcountrycontext';
import sideimg from "../assests/side-img.jpeg";
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


 


  const FirstContainer = () => {
    return (<>
      <div className="visa-container">
        <div className="visa-content-container">
          <div className="visa-content">
            <div
              style={{
                width: "51.564px",
                height: "237.652px",
                transform: "rotate(42.63deg)",
                position: "relative",
                right: "128.11px",
                left: "328px",
                top: "-166.19px",
                borderRadius: "51px",
                background: "#FFF",
              }}
            ></div>
            <div
              style={{
                width: "51.564px",
                height: "237.652px",
                transform: "rotate(42.63deg)",
                position: "relative",
                right: "127.11px",
                left: "300px",
                top: "-89.19px",
                borderRadius: "51px",
                background: "#E4F2F8"
              }}
            ></div>
            <div
              style={{
                width: "51.564px",
                height: "237.652px",
                transform: "rotate(42.63deg)",
                position: "relative",
                right: "5.806px",
                top: "-118.475px",
                left: "370px",
                borderRadius: "51px",
                background: "#FFF"
              }}
            ></div>
            <div
              style={{
                width: "51.564px",
                height: "237.652px",
                transform: "rotate(42.63deg)",
                position: "relative",
                right: "174.11px",
                left: "153px",
                bottom: "-15.417px",
                top: "60px",
                borderRadius: "51px",
                background: "#E4F2F8"
              }}
            ></div>
          </div>

          <div className="side-image">
            <img
              src={girlpic}
              alt="side image"
              style={{
                width: "537px",
                height: "584px",
                marginRight: "34px",
                borderRadius: "16px",
                background: "url(" + sideimg + ") lightgray 50% / cover no-repeat",
                position: "relative",
                marginTop: "64px",
                top: "-20px"
              }}
            />
          </div>
        </div>
        <div className="new-visa-div">
          <div className="heading-visa-div">
            <div className="form-ditail-div">
              <h5 >About Us</h5>
              <h2>Feel Free to Call Us</h2>
              <p>Transmds is the world’s driving worldwide coordinations.</p>
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
        </div>
      </div>
    </>)
  }


  const SecondContainer = () => {
    return (<>
      <div className="aboutus-main-container">


        <div className="aboutus-remaining-container">
          <div className="aboutus-remaining-text-img-container">
            <div className="aboutus-remaining-text">
              <h2>
                Dependable and Trustworthy Visa & <br />
                <span style={{ color: "#F28623" }}>Immigration Guidance</span>              </h2>
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


          <div className="aboutus-remaining-text-img-container">
            <div className="aboutus-img">
              <img src={aboutusimg} alt="aboutusimg" />
            </div>
            <div className="aboutus-remaining-text">
              <h2>
                Dependable and Trustworthy Visa & <br />
                <span style={{ color: "#F28623" }}>Immigration Guidance</span>              </h2>
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

          </div>




        </div>
      </div>
    </>)
  }

  

  return (
    <>
    <div className="animatediv">
      <Head />
      <Header />
      <FirstContainer />
      <SecondContainer />
      <Teams />
      <Footer />
      </div>
    </>
  );
};

export default AboutUs;

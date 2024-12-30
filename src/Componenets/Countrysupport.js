import React from "react";
import "../Componenets/css/countrysupport.css";
import cardImg1 from "../assests/card-img1.jpeg";
import cardImg2 from "../assests/card-img2.jpeg";

const CountryCard = ({ image, country, description }) => (
  <div className="card-img1">
    <img src={image} alt={country} />
    <h3>{country}</h3>
    <p>{description}</p>
  </div>
);

const Countrysupport = () => {
  const topCountries = [
    { image: cardImg1, country: "Canada", description: "Average time to resolve a cyber" },
    { image: cardImg2, country: "France", description: "Average time to resolve a cyber" },
  ];

  const bottomCountries = [
    { image: cardImg1, country: "America", description: "Average time to resolve a cyber" },
    { image: cardImg2, country: "Australia", description: "Average time to resolve a cyber" },
    { image: cardImg1, country: "Dubai", description: "Average time to resolve a cyber" },
    { image: cardImg1, country: "Turkey", description: "Average time to resolve a cyber" },
    { image: cardImg1, country: "Turkey", description: "Average time to resolve a cyber" },
  ];

  return (
    <div className="country-support">
      <div className="country-support-container">
        <div
          style={{
            marginLeft: "130px",
            marginRight: "130px",
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          {topCountries.map((country, index) => (
            <CountryCard key={index} {...country} />
          ))}
        </div>

        <div className="card-text">
          <h3>
            Countries We Support For <br />{" "}
            <span style={{ color: "#F28623" }}>Immigration</span>
          </h3>
          <p>
            Transmds is the world's driving worldwide coordinations supplier we
            uphold industry and exchange the worldwide trade of merchandi.
          </p>
        </div>
      </div>

      <div className="country-support-container1">
        <div
          style={{
            marginLeft: "130px",
            marginRight: "130px",
            display: "flex",
            justifyContent: "flex-start",
            gap: "40px",
          }}
        >
          {bottomCountries.map((country, index) => (
            <CountryCard key={index} {...country} />
          ))}
        </div>
      </div>
      <div className="country-support-container2"></div>
    </div>
  );
};

export default Countrysupport;
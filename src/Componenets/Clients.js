import React from "react";
import "./css/clients.css";
import star from "../assests/Star.svg";

const ClientCard = ({ name, text }) => (
  <div className="client-card1">
    <h3>-{name}</h3>
    <div className="star-card">
      {[...Array(5)].map((_, index) => (
        <img key={index} src={star} alt="star" />
      ))}
    </div>
    <p>{text}</p>
  </div>
);

const Clients = () => {
  const testimonials = [
    {
      name: "Juliana Silva",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi nulla, euismod ut gravida eu, vestibulum tempus arcu. Phasellus fringilla placerat tempor.."
    },
    {
      name: "Juliana Silva",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi nulla, euismod ut gravida eu, vestibulum tempus arcu. Phasellus fringilla placerat tempor.."
    }
  ];

  return (
    <div>
      <div className="client-container">
        <div className="client-card">
          <h3>
            Happy Clients Reflect on Their{" "}
            <span style={{ color: "#F28623" }}>Journey with Us</span>
          </h3>
          <p>
            Transmds is the world's driving worldwide coordinations supplier we
            uphold the worldwide trade of merchandi.
          </p>
        </div>
        {testimonials.map((testimonial, index) => (
          <ClientCard
            key={index}
            name={testimonial.name}
            text={testimonial.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
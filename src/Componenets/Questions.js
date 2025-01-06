import React, { useState } from "react";
import queimg from "../assests/queimg.jpeg";
import "../Componenets/css/questions.css";

const Questions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What services do you offer?",
      answer:
        "Transmds is the world's leading global logistics provider. We support industry and trade in the global exchange of merchandise.",
    },
    {
      question: "How does the process work?",
      answer:
        "We handle the entire process from documentation to delivery, ensuring smooth transportation and compliance with international regulations.",
    },
    {
      question: "What are your main markets?",
      answer:
        "We serve a wide range of industries including technology, automotive, and manufacturing, across global markets.",
    },
    {
      question: "How can I track my shipment?",
      answer:
        "You can track your shipment in real-time via our online platform or mobile app, which provides updates at every stage of transit.",
    },
  ];

  return (
    <div className="questions-container">
      <div className="questions-card1">
        <h3>
          Common Question <br />
          <span style={{ color: "#F28623" }}>Answer</span>{" "}
        </h3>
        <p>
          Transmds is the world's leading global logistics provider. We support
          industry and trade in the global exchange of merchandise.
        </p>
        <img
          src={queimg}
          style={{ width: "273px", height: "224px" }}
          alt="questions"
        />
      </div>

      <div className="questions-card2">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`questions-card-ser1 ${expandedIndex === index ? "active" : ""}`}
          >
            <h4>{item.question}</h4>

            <div
              className="design-serv"
              onClick={() => toggleQuestion(index)}
              style={{
                display: "flex",
                width: "71.173px",
                height: "50.284px",
                transform: "rotate(135deg)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "10px",
                position: "absolute",
                right: "-8.963px",
                top: "2px",
                borderRadius: "35px",
                background: "#EDF6FA",
              }}
            >
              <div
                className="plus-minus"
                style={{
                  display: "flex",
                  width: "15px",
                  height: "10px",
                  transform: "rotate(45deg)",
                  padding: " 11px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "27px",
                  gap: "10px",
                  flexShrink: 0,
                  borderRadius: "18px",
                  background: "#FFF",
                  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.16)",
                 
                }}
              >
                {expandedIndex === index ? "-" : "+"}
              </div>
            </div>

            {/* The answer paragraph with smooth transition */}
            {expandedIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
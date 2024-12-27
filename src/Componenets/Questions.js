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
      question: "What services do you offers ?",
      answer:
        "Transmds is the world's driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of merchandi.",
    },
    {
      question: "What services do you offers ?",
      answer:
        "Transmds is the world's driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of merchandi.",
    },
    {
      question: "What services do you offers ?",
      answer:
        "Transmds is the world's driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of merchandi.",
    },
    {
      question: "What services do you offers ?",
      answer:
        "Transmds is the world's driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of merchandi.",
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
          Transmds is the world's driving worldwide coordinations supplier we
          uphold industry and exchange the worldwide trade of merchandi.
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
            className={`questions-card-ser1 ${
              expandedIndex === index ? "active" : ""
            }`}
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
                right: "-5.963px",
                top: "2px",
                borderRadius: "35px",
                background: "#EDF6FA"
              }}
            >
              <div 
                className="plus-minus"
                style={{
                  display: "flex",
                  width: "15px",
                  height: "20px",
                  transform: "rotate(45deg)",
                  padding: "8px 11px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                 
                  left: "27px",
                  
                 
               
               
                  gap: "10px",
                  flexShrink: 0,
                  borderRadius: "18px",
                  background: "#FFF",
                  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.16)"
                }}
              >
                {expandedIndex === index ? "-" : "+"}
              </div>
            </div>
            {expandedIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;

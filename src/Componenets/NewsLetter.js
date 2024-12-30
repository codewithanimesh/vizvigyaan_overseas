import React, { useState } from "react";
import "../Componenets/css/newsletter.css";
import newsltter from "../assests/newsletter.jpeg";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      // Here you can add API call or other logic to handle the subscription
      setEmail("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="main-div-conatiner">
        
      <div className="newsletter-container">
        <div className="newsletter-heading">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Subscribe to the free newsletter to receive the latest news & case
            Studies
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="newsletter-image">
          <img src={newsltter} alt="Newsletter" />
        </div>
      </div>

    
    </div>
  );
};

export default NewsLetter;
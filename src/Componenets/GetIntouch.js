import React, { useState } from "react";
import map from "../assests/map.png";
import "../Componenets/css/Getintouch.css";

const GetIntouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    visaType: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    // Handle form submission
    console.log("Form submitted:", formData);
    // Add your API call or form submission logic here
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      visaType: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="get-in-touch-container">
      <div className="get-in-touch">
        <div className="get-in-touch-content">
          <h2>Contact</h2>
          <p>Get In Touch With Us</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-input-container">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-input-container">
              <select
                className="form-input"
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
              >
                <option value="">Select Visa Type</option>
                <option value="tourist">Tourist Visa</option>
                <option value="business">Business Visa</option>
                <option value="student">Student Visa</option>
                <option value="work">Work Visa</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-input-container">
              <textarea
                name="message"
                placeholder="Write your message"
                className="form-input1"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-input-container">
              <button type="submit" className="send-message-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="get-in-touch-map">
          <img src={map} alt="location map" />
        </div>
      </div>
    </div>
  );
};

export default GetIntouch;

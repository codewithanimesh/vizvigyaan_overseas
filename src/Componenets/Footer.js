import React from "react";
import "../Componenets/css/footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="footer-content">
        <div className="footer-content-left">
          <h2>
            Do you have questions or went <br /> more information ? Contact us
            now <br />
            <span style={{ color: "#F28623" }}>We are here to Help You</span>
          </h2>

          <div className="contact-info">
            <p>
              <i className="bi bi-telephone"></i> +91 9845684237
            </p>
            <p>
              <i className="bi bi-envelope"></i> examplemail@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-content-right">

        <div className="explore-links">
          <h3>Explore Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        
                <div className="service-links">
                  <h3> Services</h3>
                  <ul>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Mobile Development</a>
                    </li>
                    <li>
                      <a href="#">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">Cloud Services</a>
                    </li>
                  </ul>
                </div>
                <div className="service-links">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Mobile Development</a>
                    </li>
                    <li>
                      <a href="#">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">Cloud Services</a>
                    </li>
                  </ul>
                </div>
        
        
        </div>
      </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} VizVigyaan Overseas. All rights reserved</p>
            </div>            
    </div>
  );
};
export default Footer;
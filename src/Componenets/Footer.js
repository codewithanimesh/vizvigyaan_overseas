import React from "react";
import { Link } from "react-router-dom";
import "../Componenets/css/footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>
            Do you have questions or want <br /> more information? Contact us
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
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Testimonials</Link>
              </li>
              <li>
                <Link to="/">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="service-links">
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="/">Web Development</Link>
              </li>
              <li>
                <Link to="/">Mobile Development</Link>
              </li>
              <li>
                <Link to="/">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/">Cloud Services</Link>
              </li>
            </ul>
          </div>

          <div className="service-links">
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link to="/">Web Development</Link>
              </li>
              <li>
                <Link to="/">Mobile Development</Link>
              </li>
              <li>
                <Link to="/">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/">Cloud Services</Link>
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

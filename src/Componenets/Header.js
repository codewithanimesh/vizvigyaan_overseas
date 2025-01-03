import React, { useState } from "react";
import logo from "../assests/logo.png";
import "./css/header.css";
import { NavLink } from "react-router-dom";
import { useSelectedCountry } from "../context/selectedcountrycontext";

const Header = () => {
  const { SelectedCountry } = useSelectedCountry();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <NavLink to="/" onClick={toggleMenu}>
            <img src={logo} alt="Logo" />
          </NavLink>

          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/enquiryform" onClick={toggleMenu}>
              Form
            </NavLink>
            <NavLink to="/admissions" onClick={toggleMenu}>
              Admissions
            </NavLink>
            <NavLink to="/work" onClick={toggleMenu}>
              Work
            </NavLink>
            <NavLink to="/study" onClick={toggleMenu}>
              Study
            </NavLink>
            <NavLink to="/jobs" onClick={toggleMenu}>
              Jobs
            </NavLink>
            <NavLink to="/visa" onClick={toggleMenu}>
              Visa
            </NavLink>
            <NavLink className="new-link" to="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </div>
        </div>

        {/* "Contact Us" Button - This will be visible on Desktop */}
        <div className="nav-linkss">
          <NavLink to="/contact" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.1004 18.1495L18.4754 15.7723C18.7656 15.4821 18.9286 15.0937 18.9286 14.683C18.9286 14.2723 18.7679 13.8839 18.4754 13.5937L15.9196 11.0335C15.6295 10.7433 15.2388 10.5803 14.8281 10.5803C14.4152 10.5803 14.029 10.7411 13.7366 11.0335L11.7344 13.0335C10.6728 12.5778 9.70827 11.9232 8.89286 11.1049C8.0692 10.2857 7.41964 9.32811 6.95982 8.26561L8.96206 6.26561C9.25223 5.97543 9.41518 5.58704 9.41518 5.17632C9.41593 4.97374 9.37624 4.77305 9.29843 4.586C9.22062 4.39895 9.10626 4.22932 8.96206 4.08704L6.40625 1.52454C6.11607 1.23436 5.72545 1.07141 5.31473 1.07141C4.90179 1.07141 4.51563 1.23213 4.22322 1.52454L1.84822 3.89954C1.35268 4.39507 1.0692 5.07811 1.0692 5.779C1.0692 5.92409 1.08036 6.06472 1.10491 6.20757C1.59152 9.16293 3.16518 12.096 5.53125 14.4643C7.90179 16.8303 10.8348 18.4018 13.7924 18.8928C14.6317 19.0335 15.4955 18.7522 16.1004 18.1495ZM14.058 17.3103C11.4263 16.875 8.80134 15.4598 6.66964 13.3281C4.53795 11.1964 3.12277 8.57364 2.6875 5.94195C2.6317 5.61159 2.74331 5.2723 2.98214 5.03123L5.31473 2.69864L7.79018 5.17186L5.11161 7.84597L5.09152 7.86605L5.27009 8.3482C5.80758 9.81009 6.65652 11.1376 7.75808 12.2388C8.85964 13.34 10.1875 14.1885 11.6496 14.7254L12.1317 14.904L14.8259 12.2076L17.3013 14.6808L14.9688 17.0134C14.7277 17.2544 14.3884 17.3661 14.058 17.3103Z"
                fill="white"
              />
            </svg>{" "}
            Contact Us
          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className="header-end"></div>
    </div>
  );
};

export default Header;

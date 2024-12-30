import React, { useState } from 'react';
import sideimg from "../assests/side-img.jpeg";
import "./css/FormComponent.css"
import girlpic from "../assests/Rectangle 4 (1).png"
import callsvg from "../assests/Call.svg"
import mailsvg from "../assests/mail.svg"
import person from "../assests/Page-1.svg"
import globe from "../assests/Globe.svg"
import phone from "../assests/phone-alt.svg"
import Email from "../assests/Email.svg"
import bagpng from "../assests/Rectangle 18.png"

const FormComponent = ({ countryData }) => {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        phone: '',
        email: '',
        message: '',
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
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
                                left: "228px",
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
                                left: "200px",
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
                                left: "270px",
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
                                left: "53px",
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
                            <h5>Contact Us</h5>
                            <h2>Feel Free to Call Us</h2>
                            <p>Transmds is the world’s driving worldwide coordinations.</p>
                        </div>
                    </div>
                    <div className="visa-grid">
                        <div className="form-details-div">

                            <div className="main-form-section">
                                <h3>Migrate To <span style={{ color: "#F68712" }}>{countryData}</span></h3>
                                <form className="form-style" onSubmit={handleSubmit}>
                                    <div className="input-div name-div">
                                        <p> I am</p>
                                        <div className="input-container">
                                            <img src={person} alt="logo" className="input-logo" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                placeholder="Enter Your Full Name"
                                                className="input-box"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="input-div name-div">
                                        <p> Wanted to Migrate to</p>
                                        {countryData?null:<div className="input-container">
                                            <img src={globe} alt="logo" className="input-logo" />
                                            <select
                                                className="select-box"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                            >
                                               
                                                    <option value="">Select an option</option>
                                                    <option value="option1">option1</option>
                                                    <option value="option2">option2</option>
                                                    <option value="option3">option3</option>

                                                
                                            </select>
                                        </div>}
                                    </div>

                                    <div className="input-div name-div">
                                        <p> You can connect me at</p>
                                        <div className="input-container">
                                            <img src={phone} alt="logo" className="input-logo" />
                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                placeholder="Enter Your Phone Number"
                                                className="input-box"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="input-div name-div">
                                        <p> and Email</p>
                                        <div className="input-container">
                                            <img src={Email} alt="logo" className="input-logo" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                placeholder="Enter Your Email"
                                                className="input-box"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="input-div name-div">
                                        <p> for any queries you can message here</p>
                                    </div>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        placeholder="Enter Your Message"
                                        className="input-box-textarea"
                                        onChange={handleChange}
                                    />
                                    <div className="input-div name-div">
                                        <input
                                            type="checkbox"
                                            name="termsAccepted"
                                            checked={formData.termsAccepted}
                                            className="input-checkbox"
                                            onChange={handleChange}
                                        />
                                        <p className="checkbox-styel"> I accept the Terms & Conditions</p>
                                    </div>
                                    <button type="submit" className="enquery-button">Submit</button>
                                </form>
                            </div>

                            <div className="contact-details-section">
                                <img src={bagpng} alt="Eligibility" />
                                <div className="new-div-form-content">
                                    <h3>Check Your Eligibility<span style={{ color: "#F68712" }}> Instantly</span></h3>
                                    <button>Check Eligibility</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormComponent;

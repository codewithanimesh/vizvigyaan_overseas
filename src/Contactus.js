import sideimg from "../assests/side-img.jpeg";
import "./css/FormComponent.css"
import girlpic from "../assests/Rectangle 4 (1).png"
import callsvg from "../assests/Call.svg"
import mailsvg from "../assests/mail.svg"

const ContactusForm=()=>{

    return(<>
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
              left:"228px",
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
              left:"200px",
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
              left:"270px",
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
              left:"53px",
              bottom: "-15.417px",
              top:"60px",
              borderRadius: "51px",
              background: "#E4F2F8"
            }}
          ></div>
        </div>{" "}
       
        <div className="side-image">
          <img
            src={girlpic}
            alt="side image"
            style={{
              width: "537px",
              height: "584px",
              marginRight: "34px",
              borderRadius: "16px",
              background:
                "url(" + sideimg + ") lightgray 50% / cover no-repeat",
              position: "relative",
              marginTop: "64px",
              top:"-20px"
           
            }}
          />
        </div>
      </div>
      <div className="new-visa-div">
      <div className="heading-visa-div">
           <div className="form-ditail-div">
            <h5>Contact Us </h5>
            <h2>Feel Free to Call Us</h2>
            <p>Transmds is the world’s driving worldwide coordinations.</p>
            </div>
          </div>
      <div className="visa-grid">
        <div className="form-details-div">
          <div className="contact-details-section">
            <h3>Do you have questions or went more information ? Contact us now<span style={{color:"#F68712"}}> We are here to Help You</span></h3>
            <p>Transmds is the world’s driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of merchandi.</p>
            <div className="contact-details-with-logo"></div>
            <div className="contact-details-with-logo-under">
                <div className="logo-circle"><img src={callsvg} alt="logo"/></div>
                <h3>+91 9845684237</h3>
            </div>

            <div className="contact-details-with-logo-under">
                <div className="logo-circle"><img src={mailsvg} alt="logo"/></div>
                <h3>examplemail@gmail.com</h3>
            </div>
          </div>
          <div className="main-form-section">
            <form className="form-style">

            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>)

}

export default ContactusForm
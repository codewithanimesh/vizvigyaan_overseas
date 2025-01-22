import React from "react";
import sideimg from "../assests/side-img.jpeg";
import "./css/visa.css";
import plane from "../assests/plane.png"
import graduation from "../assests/graduation-cap.png"
import buildings from "../assests/Buildings.png"
import growth from "../assests/Growth.png"
import vector from "../assests/Vector.png"
const Visa = () => {
  return (
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
              left:"328px",
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
              left:"300px",
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
              left:"370px",
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
              left:"153px",
              bottom: "-15.417px",
              top:"60px",
              borderRadius: "51px",
              background: "#E4F2F8"
            }}
          ></div>
        </div>{" "}
       
        <div className="side-image">
          <img
            src={sideimg}
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
      <h2 className="heading-visa-div">
            <span >Visa types and eligibility</span>{" "}
            <br />
            <span style={{ color: " #F28623" }}>assessment</span>
            <br />
          </h2>
      <div className="visa-grid">
        <div className="visa-grid-item">
          <div className="visa-grid-item-heading">
            <div className="grid-item-inner-pill">
                <div className="position-imge-cercle" src={plane} alt="plane" style={{width:"20px",height:"20px",flexShrink:"0",backgroundColor:"#f34e5e",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",rotate:"320deg",padding:"1.1rem"}}>
                  <img src={plane} style={{rotate:"10deg"}}/>
                </div>
            </div>
            <h3>Tourist Visa</h3>
            <p>Eligible for students from all over the world</p>
         
          </div>
          <div className="visa-grid-item-heading">
          <div className="grid-item-inner-pill">
                <div className="position-imge-cercle" src={plane} alt="plane" style={{width:"20px",height:"20px",flexShrink:"0",backgroundColor:"#f34e5e",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",rotate:"320deg",padding:"1.1rem"}}>
                  <img src={growth} style={{rotate:"-5deg"}}/>
                </div>
            </div>
            <h3>Commerical Visa</h3>
            <p>Eligible for students from all over the world</p>
      
          </div>
          <div className="visa-grid-item-heading">
          <div className="grid-item-inner-pill">
                <div className="position-imge-cercle" src={plane} alt="plane" style={{width:"20px",height:"20px",flexShrink:"0",backgroundColor:"#f34e5e",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",rotate:"320deg",padding:"1.1rem"}}>
                  <img src={growth} style={{rotate:"-5deg"}}/>
                </div>
            </div>
            <h3>Commerical Visa</h3>
            <p>Eligible for students from all over the world</p>
      
          </div>
          <div className="visa-grid-item-heading">
          <div className="grid-item-inner-pill">
                <div className="position-imge-cercle" src={plane} alt="plane" style={{width:"20px",height:"20px",flexShrink:"0",backgroundColor:"#f34e5e",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",rotate:"320deg",padding:"1.1rem"}}>
                  <img src={buildings} style={{rotate:"-5deg"}}/>
                </div>
            </div>
            <h3>Residence Visa</h3>
            <p>Eligible for students from all over the world</p>
          
          </div>
          <div className="visa-grid-item-heading">
          <div className="grid-item-inner-pill">
                <div className="position-imge-cercle" src={plane} alt="plane" style={{width:"20px",height:"20px",flexShrink:"0",backgroundColor:"#f34e5e",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",rotate:"320deg",padding:"1.1rem"}}>
                  <img src={graduation} style={{rotate:"-5deg"}}/>
                </div>
            </div>
            <h3>Student Visa</h3>
            <p>Eligible for students from all over the world</p>
          
          </div>
          <div className="visa-grid-item-heading" style={{zIndex: "1"}}>
          <div className="grid-item-inner-pill">
                <div className="position-imge-cercle" src={plane} alt="plane" style={{width:"20px",height:"20px",flexShrink:"0",backgroundColor:"#f34e5e",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",rotate:"320deg",padding:"1.1rem"}}>
                  <img src={vector} style={{rotate:"-5deg"}}/>
                </div>
            </div>
            <h3>Business Visa</h3>
            <p>Eligible for students from all over the world</p>
           
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Visa;



import React from "react";
import "./css/OurStories.css"
import svg1 from "../assests/Luggage.svg"
import svg2 from "../assests/process.svg"
import startsvg from "../assests/Star.svg"
import berifyingsvg from "../assests/briefing.svg"
const OurStories = () => {
    const GudaiceData = [

        {
            id: 1,
            heading: "20 +",
            para: "Visa Categories",
            color: "#FE6C3F",
            img: svg1,
            color2: "#FFF0EB"

        },
        {
            id: 2,
            heading: "20 +",
            para: "Process Visa",
            color: "#0C9",
            img: svg2,
            color2: "rgba(0, 145, 255, 0.4)"
        }, {
            id: 3,
            heading: "20 +",
            para: "Successful Project",
            color: "#FE6C3F",
            img: startsvg,
            color2: "rgba(0, 204, 153, 0.46)"
        }, {
            id: 4,
            heading: "20 +",
            para: "Pro Consultants",
            color: "#FFBD0F",
            img: berifyingsvg,
            color2: "rgba(255, 187, 15, 0.4)"
        }
    ]
    return (<>
        <div className="main-div-guildace-osr-stories">
            <div className="guildace-content-div">
                <div className="guildace-title-div">
                    <h2 className="style-text-heading ">Discovering Our Biggest Successes: The Stories
                        <span className="color-last"><br />   Behind Our Great Achievements</span></h2>
                    <p className="style-paragraph">Transmds is the world’s driving worldwide coordinations<br />
                        supplier we uphold industry and exchange the worldwide trade</p>
                </div>
                <div className="map-item-div-ourstories">
                    {GudaiceData.length > 0 ? (
                        GudaiceData.map((item) => (
                            <div className="map-items-container-ourstories" key={item.id}>
                                <div style={{ borderLeft: `3px solid ${item.color}` }} className="logo-image-conatainer">
                                    <div style={{background:`${item.color2}`}} className="rotate-div-content-ourstories">
                                        <img src={item.img} alt="logo" />
                                    </div>
                                    <div>
                                        <h4 className="number-head">{item?.heading}</h4>
                                        <p className="style-paragraph">{item?.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        "no items"
                    )}
                </div>
            </div>
            <div className="image-div-bag"></div>
        </div>
    </>)
}

export default OurStories
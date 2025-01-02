import React from "react";
import "./css/Achievements.css"
const Achievements = () => {

    const Achievementsdata = [
        {
            heading: "Countory",
            data: ["Migrate to Australia", "Migrate to Australia", "Migrate to Australia", "Migrate to Australia", "Migrate to Australia",],
            color: "#F68712"
        },
        {
            heading: "PR Visas",
            data: ["Migrate to Australia", "Migrate to Australia", "Migrate to Australia", "Migrate to Australia", "Migrate to Australia",],
            color: "#0091FF"
        },
        {
            heading: "Work Visas",
            data: ["Migrate to Australia", "Migrate to Australia", "Migrate to Australia", "Migrate to Australia", "Migrate to Australia",],
            color: "#0C9"
        }, {
            heading: "Work Visas",
            data: ["Migrate to Australia", "Migrate to Australia", "Migrate to Australia", "Migrate to Australia", "Migrate to Australia",],
            color: "#FFBD0F"
        }
    ]
    return (<>
        <div className="main-Achievements-div">
            <div className="achievment-content-div">
                <div>
                    <h2 className="h2-heading-text">
                        Discovering Our Biggest Successes: The Stories<span style={{ color: "#F68712" }}> Behind Our Great Achievements</span>
                    </h2>
                    <p style={{padding:"0"}} className="p-heading-text" >Embarking on a journey to reunite families, we recently had the privilege of assisting a couple in secure their spouse’s visa.</p>
                </div>

                <div className="map-items-data-container">
                    {Achievementsdata.length > 0 ?
                        Achievementsdata?.map((item, index) => {
                            return (
                                <div className="achievmentdata-map-main-div">
                                    <div className="achievmentdata-heading">
                                        <h4
                                            className="h2-heading-text2"
                                            style={{ borderLeft: `3px solid ${item.color}` }} // Corrected inline style syntax
                                        >
                                            {item?.heading}
                                        </h4>
                                    </div>
                                    <div className="achievmentdata-heading">
                                        {item?.data.map((subItem, index) => {
                                            return (
                                                <div key={index} style={{ display: "flex" }}>
                                                    <p
                                                        className="p-heading-text"
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        {subItem}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                            
                        })
                        : "no data"}
                </div>
            </div>

        </div>
    </>)

}
export default Achievements
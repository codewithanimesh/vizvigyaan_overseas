import React from "react";

const Guidance2 = () => {
    const GudaiceData = [

        {
            id: 1,
            heading: "Business Visa",
            para: "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum amet dolor tortor elementum",
            color: "#FE6C3F"
        },
        {
            id: 2,
            heading: "Business Visa",
            para: "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum amet dolor tortor elementum",
            color: "#0C9"
        }, {
            id: 3,
            heading: "Business Visa",
            para: "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum amet dolor tortor elementum",
            color: "#0091FF;"
        }, {
            id: 4,
            heading: "Business Visa",
            para: "Sit amet consectetur bestibulu ullamcorer arcustulla amet dolor tortor elementum amet dolor tortor elementum",
            color: "#FFBD0F"
        }
    ]
    return (<>
        <div className="main-div-guildace">
            <div className="guildace-content-div">
                <div className="guildace-title-div">
                    <h2 className="style-text-heading ">Dependable and Trustworthy <span className="color-last">Visa<br/> & Immigration Guidance</span></h2>
                    <p className="style-paragraph">Transmds is the world’s driving worldwide coordinations<br/>
                        supplier we uphold industry and exchange the worldwide trade</p>
                </div>
                <div className="map-item-div">
                    {GudaiceData.length > 0 ? (
                        GudaiceData.map((item) => {
                            return (
                                <div className="map-items-container" key={item.id}>
                                    <div className="rotating-div">
                                        <div style={{ backgroundColor: item.color }} className="dot-of-number">
                                            {item.id}
                                        </div>
                                    </div>
                                    <div className="rotate-div-content">
                                        <h3>{item?.heading}</h3>
                                        <p className="style-paragraph">{item?.para}</p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        "no items"
                    )}

                </div>
            </div>
        </div>
    </>)
}

export default Guidance2
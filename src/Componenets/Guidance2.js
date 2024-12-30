import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
    ];

    const mainDivRef = useRef(null);
    const titleDivRef = useRef(null);
    const mapItemsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            mainDivRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
        );
        gsap.fromTo(
            titleDivRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.5 }
        );
        gsap.fromTo(
            mapItemsRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 1 }
        );
    }, []);

    return (
        <div className="main-div-guildace" ref={mainDivRef}>
            <div className="guildace-content-div">
                <div className="guildace-title-div" ref={titleDivRef}>
                    <h2 className="style-text-heading">
                        Dependable and Trustworthy <span className="color-last">Visa<br /> & Immigration Guidance</span>
                    </h2>
                    <p className="style-paragraph">
                        Transmds is the world’s driving worldwide coordinations<br />
                        supplier we uphold industry and exchange the worldwide trade
                    </p>
                </div>
                <div className="map-item-div">
                    {GudaiceData.length > 0 ? (
                        GudaiceData.map((item, index) => {
                            return (
                                <div className="map-items-container" key={item.id} ref={el => mapItemsRef.current[index] = el}>
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
    );
}

export default Guidance2;
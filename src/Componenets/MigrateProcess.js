import React from "react";
import "./css/MigrateProcess.css"
import mansvg from "../assests/mansvg.svg"
import man2svg from "../assests/man2svg.svg"
import graph from "../assests/graph.svg"
import document from "../assests/Documents.svg"
import growth from "../assests/Growth Graph.svg"
const MigrateProcess = () => {
    const MigrateProcessData = [
        {
            heading: "Migrate Process",
            content: "In recent times, migration has become a dream for everyone willing to settle abroad. People move abroad to study, work, or have a better quality of life.",
            logo: null
        },
        {
            heading: "Inquiry",
            content: "Welcome! Your immigration journey starts here.",
            logo: mansvg,
        },
        {
            heading: "Inquiry",
            content: "Welcome! Your immigration journey starts here.",
            logo: man2svg,
        },
        {
            heading: "Inquiry",
            content: "Welcome! Your immigration journey starts here.",
            logo: graph,
        }, {
            heading: "Inquiry",
            content: "Welcome! Your immigration journey starts here.",
            logo: growth,
        },
        {
            heading: "Inquiry",
            content: "Welcome! Your immigration journey starts here.",
            logo: document,
        },
    ]

    return (<>
        <div className="main-MigrateProcess">
            <div className="absolute-div-migrate"></div>
            <div className="content-migrate">
                {
                    MigrateProcessData.length > 0 ?
                        MigrateProcessData?.map((item, index) => {
                            return (
                                <div
                                    className="map-items-migrate"
                                    style={index === 0 ? { paddingBottom: "0", paddingTop: "0", border: "none", alignItems: "center" } : {}}
                                >
                                    <div className="all-content-container-migrate"
                                        style={index === 0 ? { display: "flex", gap: "0", alignItems: "start", justifyContent: "center" } : {}}
                                    >
                                        <div
                                            style={{
                                                display: index === 0 ? "none" : "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            className="logo-container-migrate"
                                        >
                                            <img src={item?.logo} alt="logo" />
                                        </div>

                                        <h3
                                            style={index === 0 ? {
                                                color: '#414141',
                                                fontFamily: 'Catamaran',
                                                fontSize: '36px',
                                                fontStyle: 'normal',
                                                fontWeight: 700,
                                                lineHeight: '40px'
                                            } : {}}
                                        >
                                            {item?.heading.split(' ').map((word, idx) => (
                                                <div key={idx} style={idx === 1 ? { color: '#F68712' } : {}}>
                                                    {word}
                                                </div>
                                            ))}
                                        </h3>


                                        <p>{item?.content}</p>
                                    </div>
                                </div>
                            )
                        })
                        : <p>No data</p>
                }

            </div>
        </div>
    </>)

}
export default MigrateProcess
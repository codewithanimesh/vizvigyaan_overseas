import React, { useState } from "react";
import "./css/selectCountry.css";
import { useSelectedCountry } from "../context/selectedcountrycontext";
import { useNavigate } from "react-router-dom";
const SelectCountry = () => {
    const navigate = useNavigate();
    const { SelectedCountry, SetSelectedCountry } = useSelectedCountry();

    const countryData = [
        {
            region: "Asia",
            visaTypes: ["Tourist", "Student", "Work"],
            countries: [
                { name: "India", flag: "https://flagcdn.com/w320/in.png", visaTypes: ["Tourist", "Student", "Work"] },
                { name: "China", flag: "https://flagcdn.com/w320/cn.png", visaTypes: ["Tourist", "Work"] },
                { name: "Japan", flag: "https://flagcdn.com/w320/jp.png", visaTypes: ["Tourist", "Student"] },
                { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png", visaTypes: ["Tourist", "Work"] },
                { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png", visaTypes: ["Tourist", "Work"] }
            ]
        },
        {
            region: "Europe",
            visaTypes: ["Tourist", "Student", "Work"],
            countries: [
                { name: "Germany", flag: "https://flagcdn.com/w320/de.png", visaTypes: ["Tourist", "Student", "Work"] },
                { name: "France", flag: "https://flagcdn.com/w320/fr.png", visaTypes: ["Tourist", "Student"] },
                { name: "Italy", flag: "https://flagcdn.com/w320/it.png", visaTypes: ["Tourist", "Work"] },
                { name: "Spain", flag: "https://flagcdn.com/w320/es.png", visaTypes: ["Tourist"] },
                { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png", visaTypes: ["Tourist", "Work"] }
            ]
        },
       
    ];

    const [selectedRegion, setSelectedRegion] = useState(countryData[0].region);
    const [selectedCountries, setSelectedCountries] = useState(countryData[0].countries);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedVisaType, setSelectedVisaType] = useState("Tourist");

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        const regionData = countryData.find((data) => data.region === region);
        setSelectedCountries(regionData ? regionData.countries : []);
        setSelectedCountry(null);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        SetSelectedCountry(country);
        navigate(`/enquiryform/${country}`);

    };

    const handleVisaTypeSelect = (visaType) => {
        setSelectedVisaType(visaType);
    };

    const filteredCountries = selectedCountries.filter((country) =>
        country.visaTypes.includes(selectedVisaType)
    );

    return (
        <div className="main-selected-country-div">
            <div className="selected-country-heading">
                <h2>Our trusted immigration <span style={{ color: "#F68712" }}>support team</span></h2>
                <p>Transmds is the world’s leading global logistics provider supporting industry and trade in the international exchange of merchandise.</p>
            </div>

            <div className="visa-type-filter">
                <p>Select Visa Type:</p>
                <div className="visa-buttons-container">
                    {countryData.find((data) => data.region === selectedRegion)?.visaTypes.map((visaType) => (
                        <button
                            key={visaType}
                            className={`visa-button ${selectedVisaType === visaType ? "selected-visa-button" : ""}`}
                            onClick={() => handleVisaTypeSelect(visaType)}
                            style={{
                                backgroundColor: selectedVisaType === visaType ? "#F7F9FB" : "#fff",
                                color: selectedVisaType === visaType ? "#878787" : "#000",
                                // border: "1px solid #F68712",
                                padding: "5px 15px",
                                cursor: "pointer"
                            }}
                        >
                            {visaType}
                        </button>
                    ))}
                </div>
            </div>

            <div className="seleted-country-funtionality">
                <div className="region-map-div">
                <p style={{paddingInline:"10px"}}>Select Region:</p>
                    {countryData.map((regionData) => (
                        <div
                            key={regionData.region}
                            className={`map-sigle-region ${selectedRegion === regionData.region ? "selected-region" : ""}`}
                            onClick={() => handleRegionSelect(regionData.region)}
                            style={{
                                padding: "10px",
                                cursor: "pointer",
                                backgroundColor: selectedRegion === regionData.region ? "#F7F9FB" : "transparent",
                                color: selectedRegion === regionData.region ? "#878787" : "#000"
                            }}
                        >
                            {regionData.region}
                        </div>
                    ))}
                </div>
             
                <div className="map-countries-div">
               
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                            <div
                                key={country.name}
                                className={selectedCountry === country.name ? "selected-country select-single-country" : "select-single-country"}
                                onClick={() => handleCountrySelect(country.name)}

                            >
                                <img
                                    src={country.flag}
                                    alt={country.name}
                                    style={{ width: 30, marginRight: 10 }}
                                />
                                {country.name}
                            </div>
                        ))
                    ) : (
                        <p>No countries available for the selected visa type</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectCountry;
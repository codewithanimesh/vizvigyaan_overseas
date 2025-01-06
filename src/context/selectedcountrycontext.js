import React, { useState, useContext } from "react";
import { createContext } from "react";

const selectedcountryContext = createContext();

export const SelectedcountryProvider = ({ children }) => {
    const [SelectedCountry, SetSelectedCountry] = useState(null);
    const [SelectedType, SetSelectedType] = useState(null)

    return (
        <selectedcountryContext.Provider value={{ SelectedCountry, SetSelectedCountry,SelectedType,SetSelectedType }}>
            {children}
        </selectedcountryContext.Provider>
    );
};

export const useSelectedCountry = () => {
    const context = useContext(selectedcountryContext);

    if (!context) {
        throw new Error("useSelectedCountry must be used within a selectedcountryProvider");
    }

    return context;
};
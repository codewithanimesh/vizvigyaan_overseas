import React, { useState } from "react";

const QuaryForm = () => {
    const [currentData, setCurrentData] = useState(null);  // To store selected type and categories
    const [selectedCategory, setSelectedCategory] = useState(null);  // To store selected category
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });  // Form data for user info collection
    const [selectedType, setSelectedType] = useState(null);  // Store selected type

    const dummyData = [
        { id: 1, name: "study" },
        { id: 2, name: "migrate" },
        { id: 3, name: "work" },
        { id: 4, name: "visit" }
    ];

    const allTypeData = [
        {
            type: "study",
            categories: [
                { program: "Bachelor's Degree", country: "United States", university: "Harvard University" },
                { program: "Master's Degree", country: "Canada", university: "University of Toronto" }
            ]
        },
        {
            type: "migrate",
            categories: [
                { destination: "Australia", visa_type: "Skilled Migration" },
                { destination: "Germany", visa_type: "EU Blue Card" }
            ]
        },
        {
            type: "visit",
            categories: [
                { country: "France", city: "Paris", trip_purpose: "Tourism" },
                { country: "Japan", city: "Tokyo", trip_purpose: "Business" }
            ]
        },
        {
            type: "work",
            categories: [
                { job_title: "Software Developer", company: "TechCorp" },
                { job_title: "Data Scientist", company: "DataVision" }
            ]
        }
    ];

    // Logs the selected type and category
    const handleItemClick = (item) => {
        const selectedTypeData = allTypeData.find((data) => data.type === item.name);
        setCurrentData(selectedTypeData);  // Set selected type and categories
        setSelectedCategory(null);  // Reset selected category
        setSelectedType(item.name); // Set the selected type
        console.log("Selected Type:", item.name);  // Log the selected type
    };

    // Logs the selected category
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);  // Set selected category
        console.log("Selected Category:", category);  // Log the selected category
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Logs the form data upon submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted with Data:", {
            selectedType,
            selectedCategory,
            formData
        });
    };

    const renderCategories = () => {
        return currentData.categories.map((category, index) => (
            <div
                key={index}
                onClick={() => handleCategoryClick(category)}
                style={{
                    padding: "1rem",
                    cursor: "pointer",
                    border: "1px solid black",
                    margin: "5px"
                }}>
                <p>{category.program || category.destination || category.job_title}</p>
            </div>
        ));
    };

    const renderForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <h3>Enter your information:</h3>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    style={{ padding: "10px", marginBottom: "10px" }}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    style={{ padding: "10px", marginBottom: "10px" }}
                />
                <br />
                <button type="submit" style={{ padding: "10px 20px" }}>Submit</button>
            </form>
        );
    };

    const renderStep = () => {
        if (selectedCategory) {
            // Once a category is selected, display the form
            return renderForm();
        }

        if (currentData) {
            // Display categories for the selected type (study, migrate, etc.)
            return <div>{renderCategories()}</div>;
        }

        if (selectedType) {
            // User has selected a type but not a category yet
            return <div>{renderCategories()}</div>;
        }

        // Initial display with the list of activities (study, migrate, etc.)
        return dummyData.map((item) => (
            <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                style={{ padding: "1rem", cursor: "pointer", border: "1px solid black" }}>
                <p>{item.name}</p>
            </div>
        ));
    };

    return (
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            {renderStep()}
        </div>
    );
};

export default QuaryForm;

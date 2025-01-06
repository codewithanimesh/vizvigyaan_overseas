import React, { useEffect } from "react";
import Head from "../Componenets/Head";
import Header from "../Componenets/Header";
import FormComponent from "../Componenets/FormComponent";
import Achievements from "../Componenets/Achievements";
import MigrateProcess from "../Componenets/MigrateProcess";
import Footer from "../Componenets/Footer"
import SelectCountry from "../Componenets/selectCountry";
import { useNavigate } from "react-router-dom";
const EnquiryForm = () => {
    const navigate = useNavigate();

    // const handleReloadAndNavigate = () => {
    //   window.location.reload(); 
    //   navigate("/");  
    // };
    // useEffect(()=>{
    //     handleReloadAndNavigate()
    // },[])

    return (<>
        <div>
            <Head />
            <Header />
            <FormComponent />
            <Achievements />
            <MigrateProcess />
            {/* <SelectCountry /> */}
            <Footer />
        </div>

    </>)

}
export default EnquiryForm
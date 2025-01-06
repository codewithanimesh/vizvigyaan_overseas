import React from "react";
import Head from "../Componenets/Head";
import Header from "../Componenets/Header";
import FormComponent from "../Componenets/FormComponent";
import Achievements from "../Componenets/Achievements";
import MigrateProcess from "../Componenets/MigrateProcess";
import Footer from "../Componenets/Footer"
import SelectCountry from "../Componenets/selectCountry";
const EnquiryForm = () => {

    return (<>
        <div>
            <Head />
            <Header />
            <FormComponent />
            <Achievements />
            <MigrateProcess />
           <SelectCountry/>
           <Footer/>
        </div>

    </>)

}
export default EnquiryForm
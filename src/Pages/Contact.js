import React from "react";
import Head from "../Componenets/Head";
import Header from "../Componenets/Header";
import ContactusForm from "../Componenets/Contactus";
import Footer from "../Componenets/Footer";
import Questions from "../Componenets/Questions";
const Contact = () => {
    return (<>
        <div>
            <Head />
            <Header />
            <ContactusForm />
            <Questions/>
            <Footer/>
            
        </div>
    </>)

}
export default Contact
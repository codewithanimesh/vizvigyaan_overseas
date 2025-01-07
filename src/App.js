import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import EnquiryForm from "./Pages/EnquiryForm";
import Home from "./Pages/Home";
import { SelectedcountryProvider } from "./context/selectedcountrycontext";
import ScrollToTop from "./Componenets/ScrollToTop"
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
const App = () => {

  return (<>
    <div className="app">
      <SelectedcountryProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/enquiryform/:country?" element={<EnquiryForm />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </BrowserRouter>
      </SelectedcountryProvider>
    </div>
  </>)

}
export default App
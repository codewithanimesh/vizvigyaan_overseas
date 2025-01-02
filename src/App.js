import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import EnquiryForm from "./Pages/EnquiryForm";
import Home from "./Pages/Home";
import { SelectedcountryProvider } from "./context/selectedcountrycontext";
import ScrollToTop from "./Componenets/ScrollToTop"
const App = () => {

  return (<>
  <SelectedcountryProvider>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiryform/:country?" element={<EnquiryForm />} />

      </Routes>
    </BrowserRouter>
    </SelectedcountryProvider>
  </>)

}
export default App
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import EnquiryForm from "./Pages/EnquiryForm";
import Home from "./Pages/Home";
const App = () => {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiryform" element={<EnquiryForm/>}/>
      </Routes>
    </BrowserRouter>
  </>)

}
export default App
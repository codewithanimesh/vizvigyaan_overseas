import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from "./Pages/Home";
const App = () => {

  return (<>
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
</Routes>
    </BrowserRouter>
  </>)

}
export default App
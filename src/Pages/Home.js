import React from "react";
import QuaryForm from "../Componenets/QuaryForm";
import Header from "../Componenets/Header";
import Hero from "../Componenets/Hero";
import Head from "../Componenets/Head"
import Visa from "../Componenets/Visa";
import Guidance from "../Guidance";

const Home=()=>{
return(<>
<Head/>
<Header />

<Hero />
<Visa />
<Guidance/>

<QuaryForm/>
</>)
}
export default Home
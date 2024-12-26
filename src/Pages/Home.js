import React from "react";
import QuaryForm from "../Componenets/QuaryForm";
import Header from "../Componenets/Header";
import Hero from "../Componenets/Hero";
import Head from "../Componenets/Head"
import Visa from "../Componenets/Visa";
import Guidance from "../Guidance";
import Guidance2 from "../Componenets/Guidance2";
import OurStories from "../Componenets/OurStories";
const Home=()=>{
return(<>
<Head/>
<Header />

<Hero />
<Visa />
{/* <Guidance/> */}
<Guidance2/>
<OurStories/>
<QuaryForm/>
</>)
}
export default Home
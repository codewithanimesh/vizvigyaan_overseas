import React from "react";
import QuaryForm from "../Componenets/QuaryForm";
import Header from "../Componenets/Header";
import Hero from "../Componenets/Hero";
import Head from "../Componenets/Head"
import Visa from "../Componenets/Visa";
import Guidance from "../Guidance";

import Clients from "../Componenets/Clients";
import Questions from "../Componenets/Questions";
import Countrysupport from "../Componenets/Countrysupport";
import NewsLetter from "../Componenets/NewsLetter";
import GetIntouch from "../Componenets/GetIntouch";
import Guidance2 from "../Componenets/Guidance2";
import OurStories from "../Componenets/OurStories";
import Footer from "../Componenets/Footer";
import Teams from "../Componenets/Teams";
const Home=()=>{
return(<>
<Head/>
<Header />

<Hero />
<Visa />
<Guidance2/>
<OurStories/>
<Teams/>

<QuaryForm/>
<Clients/>
<Questions />
<Countrysupport/>
<NewsLetter/>
<GetIntouch/>
<Footer/>
</>)
}
export default Home
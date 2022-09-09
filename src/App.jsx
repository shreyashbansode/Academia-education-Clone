import React from "react";
import "./App.css";
import Header from "./component/common/heading/Header";
import Home from "./component/common/home/Home"
import About from "./component/about/About"
import CourseHome from "./component/allcources/courseHome"
import Team from "./component/team/Team"
import Price from "./component/Pricing/Price"
import Contact from "./component/contact/Contact"

import Footer from "./component/common/footer/Footer"

import {Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <h1>App</h1> */}
      <Header />

      <Routes>
         
       <Route exact path="/" element= {<Home/>}></Route>
       <Route exact path="/about" element= {<About/>}></Route>
       <Route exact path="/cource" element= {<CourseHome/>}></Route>
       <Route exact path="/team" element= {<Team/>}></Route>
       <Route exact path="/pricing" element= {<Price/>}></Route>
       <Route exact path="/contact" element= {<Contact/>}></Route>
       
      
      </Routes>

        <Footer/>

    </>
  );
};

export default App;

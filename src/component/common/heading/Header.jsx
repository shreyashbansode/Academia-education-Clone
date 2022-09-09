import React ,{useState}from 'react'
import Head from "./Head"
import "./header.css"
import {NavLink} from 'react-router-dom';

 const Header = () => {


    const[Click ,setClick] =useState(false);

  return (
    <div>


        <Head/>
        <header>

            <nav className="flexSB">

            <ul className= { Click ? "mobile-nav":"flexSB" } onClick ={()=>setClick(false)}>


                <li><NavLink to ="/">Home</NavLink></li>
                <li><NavLink to ="/cource">All Courses</NavLink></li>
                <li><NavLink to ="/about">About</NavLink></li>
                <li><NavLink to ="/team">Team</NavLink></li>
                <li><NavLink to ="/pricing">pricing</NavLink></li>
               
                <li><NavLink to ="/contact">Contact</NavLink></li>
            </ul>

            <div className="start">

                        <div className="button">Get Certificate</div>

            </div>
        <button className="toggle" onClick ={()=>setClick(!Click)}>

            {Click ? <i className="fa fa-times"></i>:<i className="fa fa-bars"></i> }


        </button>
            </nav>

        </header>
    </div>
  )
}



export default Header;
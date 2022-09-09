import React from 'react'
import {useLocation} from 'react-router-dom';


 const Back = (props) => {

    const location = useLocation()
  return (
    <>
    <section className="back">


        <h2>Home / {location.pathname.split("/")}</h2>
        <h1>{props.title}</h1>

    </section>
  
  
  </>
  )
}

export default Back;

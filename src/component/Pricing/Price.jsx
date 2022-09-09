import React from 'react'
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import Faq from "./Faq"



import "./price.css"









 const Price = () => {
  return (
   

    <>


         <Back title = "Choose the right plan"/>   
       
        <section className="price padding">
            
            <div className="container grid">
                <PriceCard/>
                </div></section>    
                <Faq title = "Choose the right plan"/>
    </>
  )
}


export default Price
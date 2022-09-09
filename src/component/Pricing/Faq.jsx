import React,{useState} from 'react'
import Title from "../common/title/Title"

import data from "./FaqData"


const Faq = () => {

const[Click, setclick] =useState(false)


const toggle = (index)=>{
    if(Click===index){
        return setclick(null)
    }
    setclick(index)
}

  return (
   <>
   
   <Title subtitle="FAQS" title="frequesntly Ask Questions"/>

   <section className="faq">

        <div className="container">


            {data.map((val,index)=>{

                return(


                    <>
                    <div className="box">
                        <button className="accordion" onClick = {()=>toggle(index)} key={index}>
                            <h2>{val.title}</h2>


                            <span>{Click === index ? <i className="fa fa-chevron-down"></i>:<i className="fa fa-chevron-right"></i>}</span>



                        </button>
                       {Click === index ?(

                            <div className='text'>

                                <p>{val.desc}</p>


                            </div>


                       ):null }
                    </div>
                    
                    
                    </>
                )
            })}

        </div>


   </section>
   
   
   
   </>
  )
}


export  default Faq;
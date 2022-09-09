import React from 'react'
import awrapper from "./data"
 const AWrapper = () => {
  return (

    <>
    


    <section className="awrapper">

        <div className="container grid">

            {awrapper.map((val)=>{
                return(

                    <div className="box flex">
                        <div className="img">

                    <img src={val.cover} alt="" />

                        </div>

                        <div className="text">

                            <h2>{val.data}</h2>
                            <h3>{val.title}</h3>


                        </div>
                    </div>
                )
            })}
        </div>

    </section>
    
    
    </>

  )
}


export default AWrapper;
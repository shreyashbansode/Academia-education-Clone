import React from 'react'
import Title from "../common/title/Title"
import online from "./onlineData"

 const onlineCourses = () => {



  return (


   <>
   
                <section className="online">
                    <div className="container">
                       < Title title = "COURSES" subtitle = "Browse Our Online Courses"/>


                       <div className="content grid3">
            {online.map((val) => {

                return(

                    <>
                    
                    <div className="box">
                        <div className="img">

                            <img src={val.cover} alt="" />
                            <img src={val.hoverCover} className="show" alt="" />
                        </div>
                        <h1>{val.courseName}</h1>
                    </div>
                    
                    
                    
                    
                    </>


                )

            })}

                       </div>
                    </div>
                </section>
   </>
  )
}



export default onlineCourses;
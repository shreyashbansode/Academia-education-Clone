import React from 'react'
import Back from "../common/back/Back"
import Coursecard from "./courseCard"
import OnlineCourses from "./onlineCourses"


 const CourseHome = () => {




  return (
<>



        <Back title = "Explore cources "/>
        
        <Coursecard />

        <OnlineCourses/>

        </>
    
  )
}



export default CourseHome;
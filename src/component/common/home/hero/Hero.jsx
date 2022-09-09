import React from 'react'
import "./Hero.css"
import Title from "../../title/Title"



 const Hero = () => {
  return (
    

    <>

            <section className="hero">
                <div className="container">
                    <div className="row">
                        <Title title ="WELCOME TO ACADEMIA" subtitle ="Best Online Education"/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quos, beatae dolorum cupiditate velit voluptas sequi molestiae quisquam laudantium maiores. Error, culpa obcaecati consequatur dignissimos numquam modi deserunt natus nemo!
                       </p>
                        <div className="button">
                            <button className="primary-btn">
                           Get Started Now  <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                            <button className="">
                           View Course  <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
                <div className="margin"></div>
    </>
  )
}


export default Hero;

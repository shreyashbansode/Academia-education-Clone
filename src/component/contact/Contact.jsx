import React ,{useState} from 'react'
import "./contact.css"
import Back from "../common/back/Back"
import axios from 'axios'
 const Contact = () => {


    const map ="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15219.42194061379!2d74.81561945!3d17.5144107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1662188363499!5m2!1sen!2sin"


    const [firstName,setfirstName]=useState("");
    const [Email,setEmail]=useState("");
    const [Subject,setSubject]=useState("");
    const [Message,setMessage]=useState("");



        const SubmitHandler= (e)=>{
          e.preventDefault();


          const data ={
            firstName,
            Email,
            Subject,
            Message,
          }

          // console.log(data);



          axios.post("http://localhost:5000",data)
          .then(()=>{
            alert("thank U we connect you into 24hr");
          })
          .catch(()=>{
            alert("didnt send")
          })

        }

  return (



    <>
    
    <Back title ="Contact us"/>

    <section className='contacts padding margintop'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>santosh Nagar, lane-7 katraj,pune</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>shreyashbansode1@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> 9730971045</p>
              </div>
            </div>

            <form action='' onSubmit={SubmitHandler}>
              <div className='flexSB'>
                <input type='text' placeholder='Name' onChange ={(e)=>setfirstName(e.target.value)} />
                <input type='email' placeholder='Email' onChange ={(e)=>setEmail(e.target.value)} />
              </div>
              <input type='text' placeholder='Subject'  onChange ={(e)=>setSubject(e.target.value)} />
              <textarea cols='30' rows='10'  onChange ={(e)=>setMessage(e.target.value)}>
                Create a message here...
              </textarea>
              <input type="submit" className = "primary-btn" />
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    
    </>
  )
}


export default Contact;
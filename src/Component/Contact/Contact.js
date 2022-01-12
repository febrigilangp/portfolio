import React from 'react'
import '../../App.css'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

function Contact() {

  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v0cafms",
        "template_ba60q1c",
        formRef.current,
        "user_CKYjoij3unCdsC7RNbnZG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };



    return (
        <div className="contact-area">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-info">
            <div className="contact-info-item">
            <CallOutlinedIcon fontSize='large'/>
            <p className='contact-text'>+62 857 8310 9377</p>
            </div>

            <div className="contact-info-item">
              <EmailOutlinedIcon fontSize='large'/>
             <p className='contact-text'>febri.gilangpratama22@gmail.com</p> 
            </div>
            <div className="contact-info-item">
             <PlaceOutlinedIcon fontSize='large'/>
             <p className='contact-text'> Jl. Lintas Pantai Timur Sumatra, Tulung Pasik, Mataram Baru, Lampung Timur, Lampung</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="from_name"/><br/>
            <input type="text" placeholder="Subject" name="user_subject"/><br/>
            <input type="email" placeholder="Email" name="user_email"/>
            <textarea  rows="5" placeholder="Message" name="message"/>
            <button>Submit</button>
            {done && " Thank you... "}
          </form>
        </div>
      </div>
    </div>
    )
}

export default Contact

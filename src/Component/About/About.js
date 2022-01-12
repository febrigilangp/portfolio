import React from 'react'
import '../../style.css'

function About() {
    return (
        <div className="about-area">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="/Asset/img/aboutme.jpg"
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <h4 className="about-desc pb-5">
        I like to learn new things, both programming and other things, I'm also a tech enthusiast
        </h4>
       </div>
    </div>
    )
}

export default About

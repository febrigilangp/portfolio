import React from 'react'
import '../../style.css'
import sit from '../../img/sit.png';
 

function Intro() {
    return (
<div className="intro">
<div className="intro-left">
  <div className="intro-left-wrapper">
    <h2 className="intro-intro">Hello, I'M</h2>
    <h1 className="intro-name">FEBRI GILANG PRATAMA</h1>
    

  </div>
</div>
<div className="intro-right">
  <div className="intro-bg"></div>
  <img src={sit} alt="computer" className="intro-img" />
</div>
</div>

    )
}

export default Intro

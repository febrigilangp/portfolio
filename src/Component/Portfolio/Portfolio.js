import React from 'react'
import '../../style.css'

const Portfolio = ({img,link}) =>{
    return (
<div className="portfolio-area">
        <div className="portfolio-browser">
        <div className="portfolio-circle"></div>
        <div className="portfolio-circle"></div>
        <div className="portfolio-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="portfolio-img" />
      </a>
</div>
    )
}

export default Portfolio

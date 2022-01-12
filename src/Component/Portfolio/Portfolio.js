import React from 'react'
import '../../style.css'
import one from '../../img/portfolio/1.png'
import second from '../../img/portfolio/2.png'
import third from '../../img/portfolio/3.png'


const Portfolio = () =>{
    return (
<div className='row'>
  <div className='col-12 d-flex'> 
<div className="portfolio-area">
        <div className="portfolio-browser">
        <div className="portfolio-circle"></div>
        <div className="portfolio-circle"></div>
        <div className="portfolio-circle"></div>
      </div>
      <img src={one} alt="" className='portfolio-img'/>
</div>

<div className="portfolio-area">
        <div className="portfolio-browser">
        <div className="portfolio-circle"></div>
        <div className="portfolio-circle"></div>
        <div className="portfolio-circle"></div>
      </div>
      <img src={second} alt="" className='portfolio-img'/>
</div>

<div className="portfolio-area">
        <div className="portfolio-browser">
        <div className="portfolio-circle"></div>
        <div className="portfolio-circle"></div>
        <div className="portfolio-circle"></div>
      </div>
      <img src={third} alt="" className='portfolio-img'/>
</div>

</div>
</div>



    )
}

export default Portfolio

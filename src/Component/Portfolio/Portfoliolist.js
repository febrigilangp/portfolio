import React from 'react'
import Portfolio from './Portfolio'
import '../../style.css';
import one from '../../img/portfolio/1.png'

const Portfoliolist = () => {
    return (
        <div className="portfoliolist-area">
        <div className="portfoliolist-texts">
          <h1 className="portfoliolist-title">PORTFOLIO</h1>
        </div>
        <div className="portfoliolist-list">
         <Portfolio/>
        </div>
      </div>
    )
}

export default Portfoliolist;
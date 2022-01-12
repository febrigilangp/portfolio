import React from 'react'
import Portfolio from './Portfolio'
import '../../style.css';
import {porto} from '../../data'

const Portfoliolist = () => {
    return (
        <div className="portfoliolist-area">
        <div className="portfoliolist-texts">
          <h1 className="portfoliolist-title">PORTFOLIO</h1>
        </div>
        <div className="portfoliolist-list">
          {porto.map((item) => (
            <Portfolio key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    )
}

export default Portfoliolist;
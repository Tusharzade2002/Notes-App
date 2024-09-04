import React from 'react'
import './../../Views/Home/Home.css'
function Featurecard({featureimg,featuretext}) {
  return (
  <div className='feature-card '>
    <img  className="feature-img" src={featureimg} />
    <p className='feature-text'>{featuretext}</p>
  </div>
  )
}

export default Featurecard
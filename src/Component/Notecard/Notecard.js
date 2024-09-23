import React from 'react'
import './Notecard.css'
function Notecard({title,description,category,emoji}) {
  return (
    <div className='main-container'>
    
       <div className='shownote-emoji'>  
           {emoji}
      </div>


           <div className='shownotes-text-container'>
             <h2 className='shownotes-title'>{title}</h2>
             <p className='shownotes-description'>{description}</p>
             <span className='shownotes-category'>{category}</span>
           </div>
    </div>
  )
}

export default Notecard
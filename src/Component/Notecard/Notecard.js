import React from 'react'
import './Notecard.css'
import deleteicon from './delete.png';
import { Simulate } from 'react-dom/test-utils';
import { json } from 'react-router-dom';
function Notescategory({category}){
     const CATEGORY_EMOJIS ={
        "shopping":"🛒",
        "personal":"🧑‍🦰",
        "working":"💼",
        "health":"🏋️",
        "learning":"📖"
     }

     return(
      <div className={`shownote-category bg-${category}`}>
           <span className='shownote-category-emoji'>{CATEGORY_EMOJIS[category]}</span>
               {category[0].toUpperCase()+ category.slice(1)}
      </div>
     );
}

 function deleteNote(index){
       const saveNotes=JSON.parse(localStorage.getItem('notes')) || []
       saveNotes.splice(index,1);
       localStorage.setItem('notes',JSON.stringify(saveNotes))
       window.location.reload();
}

function Notecard({index,title,description,category,emoji}) {
  return (
    <div className='main-container'>
    
       <div className='shownote-emoji'>  
           {emoji}
      </div>


           <div className='shownotes-text-container'>
             <h2 className='shownote-title'>{title}</h2>
             <p className='shownote-description'>{description}</p>
             <span >
             <Notescategory category={category} />
             </span>
             <img className='notecard-deletebutton' onClick={()=>{
                deleteNote(index)
             }} src={deleteicon} />
           </div>
    </div>
  )
}

export default Notecard
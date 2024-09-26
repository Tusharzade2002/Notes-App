import React, { useEffect, useState } from 'react'
import './Shownotes.css'

import Homebutton from '../../Component/Homebutton/Homebutton'
import Notecard from '../../Component/Notecard/Notecard';
function Shownotes() {
  const [notes,setnotes]=useState([]);

  useEffect(()=>{
         const savenotes =JSON.parse(localStorage.getItem('notes')) || []
         setnotes(savenotes);
         console.log(savenotes);
         
  },[]);
  
  return (
    <div>
    <h1 className='text-centre primary-color'>Show Notes</h1>
   <div className='shownote-main-container'>
     {
       
          notes.map((note,index)=>{
          const {title,description,category,emoji}=note;
             return(
              
              <Notecard index={index}
              title={title} description={description} category={category} emoji={emoji}/>
             )})
     }
     </div>
                 {/* {notes.map((note) => <div>{note.title}</div>)} */}

                  <Homebutton />
    </div>
  )
}

export default Shownotes
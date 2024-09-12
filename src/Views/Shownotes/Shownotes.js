import React, { useEffect, useState } from 'react'
import './Shownotes.css'

import Homebutton from '../../Component/Homebutton/Homebutton'
function Shownotes() {
  const [notes ,setnotes] =useState([])
  useEffect(()=>{
    const savednotes=JSON.parse(localStorage.getItem("notes")) || []

    setnotes(savednotes);
  },[])
  return (
    <div>
      
    <h1 className='text-centre primary-color'>✍️Addnotes</h1>
    <Homebutton />

  {
    notes.map((note)=>{
      const {title,description}=note
     return(
      <div>
           {
            title
           }
      </div>
     )
    })
  }

    </div>
  )
}

export default Shownotes
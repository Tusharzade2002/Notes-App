import React, { useState } from 'react'
import './Addnotes.css'
import Homebutton from '../../Component/Homebutton/Homebutton'

function Addnotes() {
  const [title , setTitle] =useState("");
  const[description,setDescription] =useState("")
  const [category,setCategory] =useState("")
  return (
    <div>
      <h2 className='text-centre primary-color App-name'>✍️Addnotes</h2>
      <Homebutton/> 
      <input type='text' 
      placeholder='enter the note'
      value={title}
      onChange={(e)=>
       setTitle(e.target.value)}
      />
      
      <button type='button' onClick={()=>{setTitle("")}}>
                 Clear 
      </button>
      <input type='text' 
      placeholder='enter the note'
      value={description}
      onChange={(e)=>
       setDescription(e.target.value)}
      />
       <input type='text' 
      placeholder='enter the note'
      value={category}
      onChange={(e)=>
       setCategory(e.target.value)}
      />



    </div>
  )
}

export default Addnotes
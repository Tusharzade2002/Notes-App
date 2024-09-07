import React, { useState } from 'react'
import './Addnotes.css'
import Homebutton from '../../Component/Homebutton/Homebutton'
import EmojiPicker from 'emoji-picker-react';

function Addnotes() {
  const [title , setTitle] =useState("");
  const[description,setDescription] =useState("")
  const [category,setCategory] =useState("")
  const [emoji , setEmoji] =useState("")
  const [EmojiDialog ,setEmojiDialog]=useState(false)
  return (
    <div>
      <h2 className='text-centre primary-color App-name'>✍️Addnotes</h2>
      <Homebutton/> 
      <input type='text' 
      placeholder='Title'
      value={title}
      onChange={(e)=>
       setTitle(e.target.value)}
       className='user-input'
      />
 
      <input type='text' 
      placeholder='description'
      value={description}
      onChange={(e)=>
       setDescription(e.target.value)}
       className='user-input'
      />
   <select value={category} 
   placeholder="category"
   onClick={(e)=>{setCategory(e.target.value)}}>
   <option value="personal">Personal</option>
   <option value="working">Working</option>
   <option value="shopping">Shopping</option>
   <option value="learning">Learning</option>
   </select>
{
  emoji
}
    <button type='button' onClick={()=>setEmojiDialog(true)}>
    Emoji
   </button>
      <EmojiPicker open={EmojiDialog} 
            searchDisabled={true} 
            height="300px" 
            width="400px" 
            skinTonesDisabled={true}
            onEmojiClick={(emojiobject)=>{
            setEmoji(emojiobject.emoji)
            setEmojiDialog(false)
            }}
      />  
    </div>
  )
}

export default Addnotes
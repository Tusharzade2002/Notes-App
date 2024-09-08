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
      <div className='inputs-container'>
      <input type='text' 
      placeholder='Title'
      value={title}
      onChange={(e)=>
       setTitle(e.target.value)}
       className='user-input'
      />
 
      <input type='text' 
      placeholder='Description'
      value={description}
      onChange={(e)=>
       setDescription(e.target.value)}
       className='user-input'
      />
   <select value={category} 
   className='user-input user-input-category'
   onChange={(e)=>{setCategory(e.target.value)}}>
    <option value="personal">Personal</option>
    <option value="working">Working</option>
   <option value="health">Health</option>
   <option value="shopping">Shopping</option>
   <option value="learning">Learning</option>
   </select>

  <div  className='user-input emoji' onClick={()=>setEmojiDialog(true)}>
     {emoji ? emoji : "Select Emoji"}
  </div>
   <EmojiPicker className='emoji-picker'
            open={EmojiDialog}  
            height="360px" 
            width="50%" 
            skinTonesDisabled={true}
            onEmojiClick={(emojiobject)=>{
            setEmoji(emojiobject.emoji)
            setEmojiDialog(false)
            }}
      />  

      <button type='button' className='btn add-notes-btn secondary-btn'
        onClick={()=>{
          console.log("title:" ,title);
          console.log("Description" ,description);
          console.log("category" ,category);
          console.log("Emoji" ,emoji); 
        }}
      >
              +{" "} Add Notes
      </button>
    </div>
    </div>
  )
}

export default Addnotes
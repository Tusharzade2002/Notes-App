import React from 'react'
import home from './../../Assest/home.png'
import './Homebutton.css'
import { Link } from 'react-router-dom';
function Homebutton() {
  return (
    <div>
    <Link to='/'>
        <img className='Homeimg' src={home} />
    </Link>
    </div>
  )
}

export default Homebutton
import React from 'react'
import './Home.css'
import './../../index.css'
function Home() {
  return (
    <div>
      <div className='text-centre App-name'> 📒{" "}Quick Notes</div>
      <p className='text-centre App-description'>
        Your Packet Friendly Notes Taking App. <del>Never Forget Anything Again!</del> 
        <span className='App-description-highlight'> Remember Everything! 🧠</span>
      </p>

      <div className='buttons-container'>
        <button className='btn primary-btn'>Add Notes</button>
        <button className='btn secondary-btn'>Show Notes</button>
      </div>
    </div>
  )
}

export default Home
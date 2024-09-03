import React from 'react'
import './Home.css'
import './../../index.css'
import shield from './shield.png'
function Home() {
  return (
    <div>
      <div className='text-centre App-name'> 📒{" "}Quick Notes</div>
      <p className='text-centre App-description'>
        Your Packet Friendly Notes Taking App. <del>Never Forget Anything Again!</del> 
        <span className='App-description-highlight'> Remember Everything! 🧠</span>
      </p>

      <div>
        <h2 className='text-centre'>Why You Should Use Quick Notes</h2>
        <div className='cards-container'>
        <div className='feature-card '>
          <img className='shield-img' src={shield} alt='shield image'/>
         <p className='feature-text'>Notes Will be Saved Securely in Your Browser's Local Storage</p>
        </div>
        <div className='feature-card '>
          <img className='shield-img' src={shield} alt='shield image'/>
         <p className='feature-text'>Notes Will be Saved Securely in Your Browser's Local Storage</p>
        </div>
        <div className='feature-card '>
          <img className='shield-img' src={shield} alt='shield image'/>
         <p className='feature-text'>Notes Will be Saved Securely in Your Browser's Local Storage</p>
        </div>
        </div>
      </div>

      <div className='buttons-container'>
        <button className='btn primary-btn'>Add Notes</button>
        <button className='btn secondary-btn'>Show Notes</button>
      </div>
    </div>
  )
}

export default Home
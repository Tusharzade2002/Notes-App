import React from 'react'
import './Home.css'
import './../../index.css'
import shield from './shield.png';
import brain from './brain.png';
import heart from './heart.png'
import { Link } from 'react-router-dom';
import Featurecard from '../../Component/FeatureCard/Featurecard';

function Home() {
  const FEATURE =[
    {
      featureimg:shield,
      featuretext:"Notes Will be Saved Securely in Your Browser's Local Storage"
    },
    {
      featureimg:brain,
      featuretext:"Use Your Brain For Thinking. Not for Remembaring"
    },
    {
      featureimg:heart,
      featuretext:"Loved By  100+ Users. Feedbacks Are Always Welcome!"
    }
  ]
  return (
    <div>
      <div className='text-centre App-name'> 📒Quick Notes</div>
      <p className='text-centre App-description'>
        Your Packet Friendly Notes Taking App. <del>Never Forget Anything Again!</del> 
        <span className='highlight tagline-highlight'> Remember Everything! 🧠</span>
      </p>
      <h2 className='text-centre text-hightlight' >Why You Should Use Quick Notes</h2>
      <div className='cards-container'>
      {
        FEATURE.map((feature)=>{
          const {featureimg ,featuretext} =feature;
            return(
             <Featurecard 
                    featureimg={featureimg}
                    featuretext={featuretext}
              />
            )
        })
      }
      </div>

      <div className='buttons-container'>
        <Link to="/add">
        <button className='btn primary-btn'>✍️Add Notes</button>
        </Link>

        <Link to="/show">
        <button className='btn secondary-btn'>📖Show Notes</button>
        </Link>
      </div>
    </div>
  )
}

export default Home



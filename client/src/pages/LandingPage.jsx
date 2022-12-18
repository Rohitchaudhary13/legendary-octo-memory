import React from 'react'
import main from '../assets/two.jpg'
import '../styles/LandingPage.css'
const LandingPage = () => {
  return (
    <div>
        <div className='landing-page-img-container'>
            <img src={main} alt="main" className='landing-page-img' />
        </div>
    </div>
  )
}

export default LandingPage
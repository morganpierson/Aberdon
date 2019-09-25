import React from 'react'
import {about} from '../text/AboutText'

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-header'>Acre makes real estate happen</h1>
      <h3 className='about-intro'>{about.intro}</h3>
    </div>
  )
}

export default About
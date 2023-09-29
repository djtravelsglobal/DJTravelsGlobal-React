import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - DJTravelsGlobal</title>
        <meta property="og:title" content="About - DJTravelsGlobal" />
      </Helmet>
    </div>
  )
}

export default About

import React from 'react'

import { Helmet } from 'react-helmet'

import './celebrity-cruises.css'

const CelebrityCruises = (props) => {
  return (
    <div className="celebrity-cruises-container">
      <Helmet>
        <title>Celebrity-Cruises - DJTravelsGlobal</title>
        <meta
          property="og:title"
          content="Celebrity-Cruises - DJTravelsGlobal"
        />
      </Helmet>
    </div>
  )
}

export default CelebrityCruises

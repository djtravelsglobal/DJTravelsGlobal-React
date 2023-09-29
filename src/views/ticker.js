import React from 'react'

import { Helmet } from 'react-helmet'

import './ticker.css'

const Ticker = (props) => {
  return (
    <div className="ticker-container">
      <Helmet>
        <title>ticker - DJTravelsGlobal</title>
        <meta property="og:title" content="ticker - DJTravelsGlobal" />
      </Helmet>
    </div>
  )
}

export default Ticker

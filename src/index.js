import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import About from './views/about'
import LandingPage from './views/landing-page'
import CelebrityCruises from './views/celebrity-cruises'
import Ticker from './views/ticker'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={About} exact path="/about" />
        <Route component={LandingPage} exact path="/" />
        <Route component={CelebrityCruises} exact path="/celebrity-cruises" />
        <Route component={Ticker} exact path="/ticker" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

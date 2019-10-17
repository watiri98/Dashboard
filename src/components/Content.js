import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import UserProfile from './UserProfile'

class Content extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/profile" component={UserProfile} />
          <Redirect from='*' to='/Dashboard' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Content
  
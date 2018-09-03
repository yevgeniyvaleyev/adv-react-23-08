import React, { Component, Fragment } from 'react'
import { NavLink, Route } from 'react-router-dom'
import PersonPage from './person-page'
import EventsPage from './events-page'

class AdminPage extends Component {
  static propTypes = {}

  get navMenu() {
    return (
      <Fragment>
        <div>
          <NavLink to="/admin/people" activeStyle={{ color: 'red' }}>
            People
          </NavLink>
        </div>
        <div>
          <NavLink to="/admin/events" activeStyle={{ color: 'red' }}>
            Events
          </NavLink>
        </div>
      </Fragment>
    )
  }

  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        {this.navMenu}

        <Route path="/admin/people" component={PersonPage} />
        <Route path="/admin/events" component={EventsPage} />
      </div>
    )
  }
}

export default AdminPage

import React, { Component } from 'react'
import LiNavLink from './linkactive.component.jsx'


class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <ul className="nav navbar-nav">            
            <LiNavLink activeClassName='active' exact={true} to="/home">Home</LiNavLink>
            <LiNavLink activeClassName='active' exact={true} to="/teste">Teste</LiNavLink>
            <LiNavLink activeClassName='active' exact={false} to="/parameters/">Parameter /:parameter</LiNavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header
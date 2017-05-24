import React, { Component } from 'react';  
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/home'>home</Link></li>
            <li><Link to='/teste'>teste</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header
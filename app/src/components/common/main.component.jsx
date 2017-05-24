import React, { Component } from 'react';
import { render } from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './home.component.jsx'
import Teste from './teste.component.jsx'

class Main extends Component {
  render() {
    return (
        <main>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/teste' component={Teste}/>
            </Switch>
        </main>
    );
  }
}
export default Main;

import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import Home from '../components/common/home.component.jsx'
import Teste from '../components/common/teste.component.jsx'

export default (
    <Switch>
        <Route path="/" component={App}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/teste' component={Teste}/>
    </Switch>
)


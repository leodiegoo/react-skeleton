import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home.component.jsx'
import Teste from '../teste.component.jsx'
import Parameters from '../parameters.component.jsx'

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Switch>
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/teste' component={Teste} />
                        <Route path='/parameters/' component={Parameters} />
                        <Route path='/parameters/:parameter' component={Parameters} />
                    </Switch>
                </div>
            </div>
        );
    }
}
export default Main;

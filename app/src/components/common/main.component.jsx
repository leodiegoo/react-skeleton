import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/home.component.jsx'
import Teste from '../../views/teste.component.jsx'
import Parameters from '../../views/parameters.component.jsx'

class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Switch>
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/teste' component={Teste} />
                        <Route exact path='/parameters/' component={Parameters} />
                        <Route exact path='/parameters/:parameter' component={Parameters} />
                    </Switch>
                </div>
            </div>
        );
    }
}
export default Main;

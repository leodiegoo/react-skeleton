import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Parameters extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <Helmet>
                    <title>Parameters</title>
                </Helmet>
                <div className="page-header">
                    <h1>Parameters</h1>
                </div>
            </div>
        )
    }
}

export default Parameters
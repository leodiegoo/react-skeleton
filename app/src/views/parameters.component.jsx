import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Parameters extends Component {
    render() {

        return (
            <div className="col-md-8 col-md-offset-2">
                <Helmet>    
                    <title>Parameters </title>
                </Helmet>
                <div className="page-header">
                    <h1>Parameters {this.props.match.params.parameter}</h1>
                </div>
            </div>
        )
    }
}

export default Parameters
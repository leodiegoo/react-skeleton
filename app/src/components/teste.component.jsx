import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Teste extends Component {
    render() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <Helmet>
                    <title>Teste</title>
                </Helmet>
                <div className="page-header">
                    <h1>Teste</h1>
                </div>
            </div>
        )
    }
}

export default Teste
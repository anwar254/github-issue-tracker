import React, { Component } from 'react'

export default class MainCard extends Component {
    render() {
        return (
            <div className="card-container card">
                {this.props.children}
            </div>
        )
    }
}

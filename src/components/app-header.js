import React, { Component } from 'react'

export class AppHeader extends Component {
    render() {
        return (
            <div className="form auth">
                <div className="header-section is-flex">
                    <div class="avatar-container">
                        <img src={this.props.img} alt="user-avatar" />
                    </div>
                    <div className="heading">
                        <h1 className="title is-capitalized is-size-5">{this.props.name}</h1>
                        <p className="subtitle is-capitalized is-size-7">{this.props.role}</p>
                    </div>
                    <div className="logout-container">
                        <button className="btn button is-dark">Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppHeader

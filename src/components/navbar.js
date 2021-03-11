import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
        <div className="navbar-container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <NavLink className="navbar-item" to="dashboard">
                        Dashboard
                    </NavLink>
                    <NavLink className="navbar-item" to="myissues">
                        My issues
                    </NavLink>
                </div>
            </nav>
        </div>
        )
    }
}

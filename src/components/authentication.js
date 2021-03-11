import React, { Component } from 'react';
import "./FontawesomeIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import githubAuth from '../service/auth';
import githubProvider from '../configs/authMethods';

export default class Authentication extends Component {
    render() {
        return (
            <div className="form auth">
                <div className="heading">
                    <h1 className="title is-capitalized is-size-4">GIthub issue tracker</h1>
                    <p className="subtitle is-capitalized is-size-7">Authenticate with github</p>
                </div>

                <a className="button is-dark" onClick={() => this.handleClick(githubProvider)}>
                    <span className="icon">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </span>
                    <span>Sign in with GitHub</span>
                </a>
            </div>
        )
    }

    handleClick = async (provider) => {
        const res = await githubAuth(provider);
        console.log(res);
        return res.displayName;
    }
}

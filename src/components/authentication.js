import React, { Component } from 'react';
import "./FontawesomeIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Authentication extends Component {
    render() {
        return (
            <div class="form auth">
                <div class="heading">
                    <h1 class="title is-capitalized is-size-4">GIthub issue tracker</h1>
                    <p class="subtitle is-capitalized is-size-7">Authenticate with github</p>
                </div>

                <a class="button is-dark">
                    <span class="icon">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </span>
                    <span>Sign in with GitHub</span>
                </a>
            </div>
        )
    }
}

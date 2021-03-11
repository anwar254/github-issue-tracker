import React, { Component } from 'react'

export class IssueList extends Component {
    render() {
        return (
            <li>
                <a>
                    <div className="issue-card columns">
                        <div className="column is-three-quarters">
                            <div className="heading">
                                <p className="title is-size-6 issue-title">Create the list component</p>
                                <p className="subtitle is-size-7 issue-subtitle">This is a subtitle</p>
                            </div>
                        </div>
                        <div className="column is-one-quarter"></div>
                    </div>
                </a>
            </li>
        )
    }
}

export default IssueList;

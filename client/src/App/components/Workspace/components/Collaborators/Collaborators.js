import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
// Components
import CollaboratorsNav from './CollaboratorsNav';
import CollaboratorsList from './CollaboratorsList';

class Collaborators extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div className="collaborators row">
                <div className="header col-xs-12">
                    <h3>Collaborators</h3>
                </div>
                <CollaboratorsNav />
                <CollaboratorsList />
            </div>
        );
    }
}

export default connect(null, {
    fetchUsers: actions.usersActions.fetchUsers
})(Collaborators);

import React, { Component } from 'react';
// Tools
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
// Components
import InviteCollaborators from './InviteCollaborators';
import ActiveCollaborators from './ActiveCollaborators';

class Users extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { activeTab, togglePageView } = this.props;
        return (
            <div className="container main_content users">
                <div className="header">
                    <h3>Artists</h3>
                </div>
                <div className="collaborators_nav">
                    <p
                        className={
                            activeTab === 'active' ? 'active' : 'inactive'
                        }
                        onClick={() => {
                            togglePageView('active');
                        }}
                    >
                        Collaborators
                    </p>
                    <p
                        className={
                            activeTab === 'invite' ? 'active' : 'inactive'
                        }
                        onClick={() => {
                            togglePageView('invite');
                        }}
                    >
                        Invite Collaborators
                    </p>
                </div>
                {activeTab === 'active' && <ActiveCollaborators />}
                {activeTab === 'invite' && <InviteCollaborators />}
            </div>
        );
    }
}

function mapStateToProps({ users, collaborators }) {
    return { users, activeTab: collaborators.pageView };
}

export default connect(mapStateToProps, {
    fetchUsers: actions.usersActions.fetchUsers,
    togglePageView: actions.collaboratorsActions.togglePageView
})(withRouter(Users));

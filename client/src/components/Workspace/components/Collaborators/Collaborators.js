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
            <div className="collaborators row">
                <div className="header col-xs-12">
                    <h3>Collaborators</h3>
                </div>
                <div className="collaborators details_nav col-xs-12">
                    <p
                        className={
                            activeTab === 'active' ? 'active' : 'inactive'
                        }
                        onClick={() => {
                            togglePageView('active');
                        }}
                    >
                        Active
                    </p>
                    <p
                        className={
                            activeTab === 'invite' ? 'active' : 'inactive'
                        }
                        onClick={() => {
                            togglePageView('invite');
                        }}
                    >
                        Invite
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

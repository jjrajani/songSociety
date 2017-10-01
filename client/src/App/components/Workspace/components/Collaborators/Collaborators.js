import React, { Component } from 'react';
// Tools
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
// Components
import InviteCollaborators from './InviteCollaborators';
import ActiveCollaborators from './ActiveCollaborators';
import PendingCollaborators from './PendingCollaborators';

const tabs = [
    { text: 'Invite', route: 'invite' },
    { text: 'Active', route: 'active' },
    { text: 'Pending', route: 'pending' }
];

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
                    {tabs.map(t => {
                        return (
                            <p
                                className={
                                    activeTab === t.route
                                        ? 'active'
                                        : 'inactive'
                                }
                                onClick={() => {
                                    togglePageView(t.route);
                                }}
                            >
                                {t.text}
                            </p>
                        );
                    })}
                </div>
                {activeTab === 'active' && <ActiveCollaborators />}
                {activeTab === 'invite' && <InviteCollaborators />}
                {activeTab === 'pending' && <PendingCollaborators />}
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

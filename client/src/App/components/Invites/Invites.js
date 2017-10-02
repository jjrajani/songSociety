import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
// Components
import InvitesNav from './components/InvitesNav';
import IncomingList from './components/IncomingList';
import OutgoingList from './components/OutgoingList';

class Invites extends Component {
    componentDidMount() {
        let { profile } = this.props;
        this.props.fetchInvites(profile._id);
    }
    render() {
        return (
            <div className="container main_content invites">
                <InvitesNav />
                <div className="row">
                    {this.props.activeTab === 'incoming' && <IncomingList />}
                    {this.props.activeTab === 'outgoing' && <OutgoingList />}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ profile, invites, activeTab }) {
    return {
        profile: profile.profile,
        invites,
        activeTab: invites.activeTab
    };
}

export default connect(mapStateToProps, {
    fetchInvites: actions.inviteActions.fetchInvites
})(Invites);

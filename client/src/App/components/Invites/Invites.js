import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
// Components
import InvitesNav from './components/InvitesNav';
import Incoming from './components/Incoming';
import Outgoing from './components/Outgoing';

class Invites extends Component {
    componentDidMount() {
        let { profile } = this.props;
        this.props.fetchInvites(profile._id);
    }
    render() {
        console.log(this.props.invites);
        return (
            <div className="container main_content pending_invites">
                <InvitesNav />
                <div className="row">
                    {this.props.activeTab === 'incoming' && <Incoming />}
                    {this.props.activeTab === 'outgoing' && <Outgoing />}
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
    fetchInvites: actions.invitesActions.fetchInvites
})(Invites);

import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const InvitesNav = ({ togglePageView, activeTab, outgoing, incoming }) =>
    <div className="details_nav">
        <p
            className={activeTab === 'incoming' ? 'active' : 'inactive'}
            onClick={() => {
                togglePageView('incoming');
            }}
        >
            Incoming <span className="count">{incoming.length}</span>
        </p>
        <p
            className={activeTab === 'outgoing' ? 'active' : 'inactive'}
            onClick={() => {
                togglePageView('outgoing');
            }}
        >
            Outgoing <span className="count">{outgoing.length}</span>
        </p>
    </div>;

function mapStateToProps({ invites }) {
    return {
        activeTab: invites.activeTab,
        incoming: invites.incoming,
        outgoing: invites.outgoing
    };
}

export default connect(mapStateToProps, {
    togglePageView: actions.inviteActions.togglePageView
})(InvitesNav);

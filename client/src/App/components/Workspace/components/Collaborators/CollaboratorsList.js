import React from 'react';
// Tools
import { connect } from 'react-redux';
// Components
import {
    InviteCollaborators,
    ActiveCollaborators,
    PendingCollaborators
} from './lists';

const CollaboratorsList = ({ activeTab }) => {
    return activeTab === 'active'
        ? <ActiveCollaborators />
        : activeTab === 'invite'
          ? <InviteCollaborators />
          : activeTab === 'pending' ? <PendingCollaborators /> : null;
};

function mapStateToProps({ collaborators }) {
    return { activeTab: collaborators.pageView };
}

export default connect(mapStateToProps)(CollaboratorsList);

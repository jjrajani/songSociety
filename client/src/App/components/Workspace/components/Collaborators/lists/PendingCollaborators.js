import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
// Components
import CollaboratorItem from '../item/CollaboratorItem';

const PendingCollaborators = ({ users, outgoing, filterCollaborators }) => {
    const pendingCollaborators = filterCollaborators(
        users,
        outgoing,
        'pending'
    );
    return (
        <ul className="list col-xs-12">
            {pendingCollaborators.map((user, i) => {
                return <CollaboratorItem key={i} user={user} />;
            })}
        </ul>
    );
};

function mapStateToProps({ users, profile }) {
    return {
        users,
        outgoing: profile.profile.invites.outgoing
    };
}

export default connect(mapStateToProps, {
    filterCollaborators: actions.collaboratorsActions.filterCollaborators
})(PendingCollaborators);

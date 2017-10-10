import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
// Components
import CollaboratorItem from '../item/CollaboratorItem';

const InviteCollaborators = ({
    collaborators,
    users,
    outgoing,
    filterCollaborators
}) => {
    const inactiveCollaborators = filterCollaborators(
        users,
        outgoing,
        'inactive',
        collaborators
    );
    return (
        <ul className="list col-xs-12">
            {inactiveCollaborators.map((user, i) => {
                return <CollaboratorItem key={i} user={user} />;
            })}
        </ul>
    );
};

function mapStateToProps({ collaborators, users, profile }) {
    return {
        collaborators: collaborators.list,
        users,
        outgoing: profile.profile.invites.outgoing
    };
}

export default connect(mapStateToProps, {
    filterCollaborators: actions.collaboratorsActions.filterCollaborators
})(InviteCollaborators);

import React from 'react';
import ArtistItem from './ArtistItem';
import { connect } from 'react-redux';

const InviteCollaborators = ({ collaborators, users, pendingInvites }) => {
    const inactiveCollaborators = users.filter(u => {
        let isCollaborator = collaborators.indexOf(u.authId) !== -1;
        let isPending = false;
        pendingInvites.forEach(i => {
            if (i.collaboratorId === u._id) isPending = true;
        });
        return !isCollaborator && !isPending;
    });
    return (
        <ul className="list col-xs-12">
            {inactiveCollaborators.map((user, i) => {
                return <ArtistItem key={i} user={user} active={false} />;
            })}
        </ul>
    );
};

function mapStateToProps({ collaborators, users, profile }) {
    return {
        collaborators: collaborators.list,
        users,
        pendingInvites: profile.profile.outGoingInvites
    };
}

export default connect(mapStateToProps)(InviteCollaborators);

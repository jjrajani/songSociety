import React from 'react';
import ArtistItem from './ArtistItem';
import { connect } from 'react-redux';

const PendingCollaborators = ({ collaborators, users, pendingInvites }) => {
    const pendingCollaborators = users.filter(u => {
        let pending = false;
        pendingInvites.forEach(i => {
            if (i.collaboratorId === u._id) pending = true;
        });
        return pending;
    });
    return (
        <ul className="list col-xs-12">
            {pendingCollaborators.map((user, i) => {
                return <ArtistItem key={i} user={user} pending={true} />;
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

export default connect(mapStateToProps)(PendingCollaborators);

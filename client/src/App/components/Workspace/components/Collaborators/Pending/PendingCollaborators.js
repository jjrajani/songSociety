import React from 'react';
import ArtistItem from '../ArtistItem';
import { connect } from 'react-redux';

const PendingCollaborators = ({ collaborators, users, outgoing }) => {
    const pendingCollaborators = users.filter(u => {
        let pending = false;
        outgoing.forEach(i => {
            if (i.inviteeId === u._id) pending = true;
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
        outgoing: profile.profile.invites.outgoing
    };
}

export default connect(mapStateToProps)(PendingCollaborators);

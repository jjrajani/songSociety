import React from 'react';
import ArtistItem from './ArtistItem';
import { connect } from 'react-redux';

const InviteCollaborators = ({ collaborators, users, outgoing }) => {
    const inactiveCollaborators = users.filter(u => {
        let isCollaborator = collaborators.indexOf(u.authId) !== -1;
        let isPending = false;
        outgoing.forEach(i => {
            if (i.inviteeId === u._id) isPending = true;
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
        outgoing: profile.profile.invites.outgoing
    };
}

export default connect(mapStateToProps)(InviteCollaborators);

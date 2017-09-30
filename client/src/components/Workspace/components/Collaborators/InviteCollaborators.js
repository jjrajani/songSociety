import React from 'react';
import ArtistItem from './ArtistItem';
import { connect } from 'react-redux';

const InviteCollaborators = ({ collaborators, users }) => {
    const inactiveCollaborators = users.filter(u => {
        return collaborators.indexOf(u.authId) === -1;
    });
    return (
        <ul className="list row">
            {inactiveCollaborators.map((user, i) => {
                return <ArtistItem key={i} user={user} active={false} />;
            })}
        </ul>
    );
};

function mapStateToProps({ collaborators, users }) {
    return { collaborators: collaborators.list, users };
}

export default connect(mapStateToProps)(InviteCollaborators);

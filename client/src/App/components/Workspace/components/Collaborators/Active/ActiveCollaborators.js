import React from 'react';
import ArtistItem from '../ArtistItem';
import { connect } from 'react-redux';

const ActiveCollaborators = ({ collaborators, users }) => {
    console.log('active collaborators', collaborators);
    console.log('active users', users);
    const activeCollaborators = users.filter(u => {
        return collaborators.indexOf(u._id) !== -1;
    });
    return (
        <ul className="list col-xs-12">
            {activeCollaborators.map((user, i) => {
                return <ArtistItem key={i} user={user} active={true} />;
            })}
        </ul>
    );
};

function mapStateToProps({ collaborators, users }) {
    return { collaborators: collaborators.list, users };
}

export default connect(mapStateToProps)(ActiveCollaborators);

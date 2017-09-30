import React from 'react';
import ArtistItem from './ArtistItem';
import { connect } from 'react-redux';

const ArtistList = ({ users }) =>
    <ul className="list row">
        {users.map((user, i) => {
            return <ArtistItem key={i} user={user} />;
        })}
    </ul>;

function mapStateToProps({ users }) {
    return { users };
}

export default connect(mapStateToProps)(ArtistList);

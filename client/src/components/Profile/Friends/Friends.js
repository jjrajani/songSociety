import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import FriendList from './components/FriendList';

const Friends = ({ profile }) => {
    const friends = profile.friends;
    return (
        <div className="friends">
            <div className="header">
                <h3>Friends</h3>
                <p className="btn btn-info">Find Friends</p>
            </div>
            <FriendList friends={friends} />
        </div>
    );
};

export default Friends;

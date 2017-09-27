import React from 'react';
import FriendList from './components/FriendList';

const Friends = () =>
    <div className="friends">
        <div className="header">
            <h3>Friends</h3>
            <p className="btn btn-info">Find Friends</p>
        </div>
        <FriendList />
    </div>;

export default Friends;

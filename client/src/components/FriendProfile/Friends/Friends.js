import React from 'react';
// Components
import FriendList from './components/FriendList';

const Friends = () =>
    <div className="friends">
        <div className="header">
            <h3>Friends</h3>
        </div>
        <FriendList />
    </div>;

export default Friends;

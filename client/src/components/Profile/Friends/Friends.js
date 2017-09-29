import React from 'react';
// Components
import FriendList from './components/FriendList';
import { Link } from 'react-router-dom';

const Friends = () =>
    <div className="friends">
        <div className="header">
            <h3>Friends</h3>
            <Link className="btn btn-danger" to="/find_friends">
                Find Friends
            </Link>
        </div>
        <FriendList />
    </div>;

export default Friends;

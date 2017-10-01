import React from 'react';
// Components
import FollowerList from './components/FollowerList';

const Followers = () =>
    <div className="followers">
        <div className="header">
            <h3>Followers</h3>
        </div>
        <FollowerList />
    </div>;

export default Followers;

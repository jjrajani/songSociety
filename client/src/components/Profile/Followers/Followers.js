import React from 'react';
// Components
import FollowerList from './components/FollowerList';
import { Link } from 'react-router-dom';

const Followers = () =>
    <div className="followers">
        <div className="header">
            <h3>Followers</h3>
            <Link className="btn btn-danger" to="/artists">
                Browse Artists
            </Link>
        </div>
        <FollowerList />
    </div>;

export default Followers;

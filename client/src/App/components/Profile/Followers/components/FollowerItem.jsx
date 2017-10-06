import React from 'react';
// Components
import { Link } from 'react-router-dom';

const FollowerItem = ({ follower }) => {
    return (
        <Link to={`/artist/${follower._id}`}>
            <li className="list_item">
                <h5 className="title">
                    <img
                        src={follower.img}
                        alt={`${follower.nickname}'s avatar'`}
                    />
                    {follower.name}
                </h5>
                <p>
                    <span className="label">Latest Project:</span>
                    {follower.latestProject}
                </p>
            </li>
        </Link>
    );
};

export default FollowerItem;

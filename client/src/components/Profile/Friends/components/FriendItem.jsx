import React from 'react';
// Components
import { Link } from 'react-router-dom';

const FriendItem = ({ friend }) => {
    return (
        <Link to={`/friend/${friend._id}`}>
            <li className="list_item">
                <h5 className="title">
                    <img
                        src={friend.img}
                        alt={`${friend.nickname}'s avatar'`}
                    />
                    {friend.name}
                </h5>
                <p>
                    <span className="label">Latest Project:</span>
                    {friend.latestProject}
                </p>
            </li>
        </Link>
    );
};

export default FriendItem;

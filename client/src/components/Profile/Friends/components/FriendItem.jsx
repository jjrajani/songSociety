import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const FriendItem = ({ friend }) =>
    <li className="list_item">
        <h5 className="title">
            <Glyphicon glyph="user" />
            {friend.name}
        </h5>
        <p>
            <span className="label">Latest Project:</span>
            {friend.latestProject}
        </p>
    </li>;

export default FriendItem;

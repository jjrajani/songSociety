import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const Friends = ({ profile }) => {
    const friends = profile.friends;
    return (
        <div className="friends">
            <div className="header">
                <h3>Friends</h3>
                <p className="btn btn-info">Find Friends</p>
            </div>
            <ul className="list">
                {friends &&
                    Object.keys(friends).map(f => {
                        const frnd = friends[f];
                        return (
                            <li key={f} className="list_item">
                                <h5>
                                    <Glyphicon glyph="user" />
                                    {frnd.name}
                                </h5>
                                <p>
                                    <span className="label">
                                        Latest Project:
                                    </span>
                                    {frnd.latestProject}
                                </p>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Friends;

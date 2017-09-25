import React from 'react';

const Friends = ({ profile }) => {
    const friends = profile.friends;
    console.log('FRIENDS', friends);
    return (
        <div className="friends">
            <h3>Friends</h3>
            <ul className="list">
                {friends &&
                    Object.keys(friends).map(f => {
                        const frnd = friends[f];
                        return (
                            <li key={f} className="list_item">
                                <p>
                                    {frnd.name}
                                </p>
                                <p>
                                    Latest Project: {frnd.latestProject}
                                </p>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Friends;

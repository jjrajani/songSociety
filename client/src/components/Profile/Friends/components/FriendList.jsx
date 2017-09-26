import React from 'react';
import FriendItem from './FriendItem';

const FriendList = ({ friends }) =>
    <ul className="list">
        {friends &&
            Object.keys(friends).map(f => {
                const frnd = friends[f];
                return <FriendItem key={f} friend={frnd} />;
            })}
    </ul>;

export default FriendList;

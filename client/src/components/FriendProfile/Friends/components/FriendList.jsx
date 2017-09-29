import React from 'react';
import FriendItem from './FriendItem';
import { connect } from 'react-redux';

const FriendList = ({ friends }) => {
    console.log('friends', friends);
    return (
        <ul className="list">
            {friends.list.map((friend, i) => {
                return <FriendItem key={i} friend={friend} />;
            })}
        </ul>
    );
};

function mapStateToProps({ friends }) {
    return { friends };
}

export default connect(mapStateToProps, {})(FriendList);

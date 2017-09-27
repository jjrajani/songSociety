import React from 'react';
import FriendItem from './FriendItem';
import { connect } from 'react-redux';

const FriendList = ({ friends }) => {
    return (
        <ul className="list">
            {friends.map((friend, i) => {
                return <FriendItem key={i} friend={friend} />;
            })}
        </ul>
    );
};

function mapStateToProps({ friends }) {
    return { friends };
}

export default connect(mapStateToProps, {})(FriendList);

import React, { Component } from 'react';
import FriendItem from './FriendItem';
import { connect } from 'react-redux';

const FriendList = ({ friends }) =>
    <ul className="list">
        {Object.keys(friends).map(f => {
            const frnd = friends[f];
            return <FriendItem key={f} friend={frnd} />;
        })}
    </ul>;

function mapStateToProps({ friends }) {
    return { friends };
}

export default connect(mapStateToProps, {})(FriendList);

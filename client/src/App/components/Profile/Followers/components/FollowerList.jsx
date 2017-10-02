import React from 'react';
import FollowerItem from './FollowerItem';
import { connect } from 'react-redux';

const FollowerList = ({ followers }) => {
    return (
        <ul className="list">
            {followers.list.map((follower, i) => {
                return <FollowerItem key={i} follower={follower} />;
            })}
        </ul>
    );
};

function mapStateToProps({ followers }) {
    return { followers };
}

export default connect(mapStateToProps, {})(FollowerList);

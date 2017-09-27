import React, { Component } from 'react';
import FriendItem from './FriendItem';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

class FriendList extends Component {
    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        const { friends } = this.props;
        return (
            <ul className="list">
                {Object.keys(friends).map(f => {
                    const frnd = friends[f];
                    return <FriendItem key={f} friend={frnd} />;
                })}
            </ul>
        );
    }
}

function mapStateToProps({ friends }) {
    return { friends };
}

export default connect(mapStateToProps, {
    fetchFriends: actions.friendsActions.fetchFriends
})(FriendList);

import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
// Components
import Bio from './Bio/Bio';
import Details from './Details/Details';

class FriendProfile extends Component {
    componentDidMount() {
        const friendId = this.props.match.params.friendId;
        this.props.fetchProfile(friendId).then(res => {
            const { authId } = this.props.friend;
            this.props.fetchGroups(authId);
            this.props.fetchFriends(authId);
            this.props.fetchProjects(authId);
        });
    }
    render() {
        return (
            <div className="container main_content profile">
                <div className="row">
                    <Bio />
                    <Details />
                </div>
            </div>
        );
    }
}
function mapStateToProps({ friends }) {
    return { friend: friends.currentFriend };
}
export default connect(mapStateToProps, {
    fetchProfile: actions.friendsActions.fetchProfile,
    fetchGroups: actions.groupsActions.fetchGroups,
    fetchProjects: actions.projectsActions.fetchProjects,
    fetchFriends: actions.friendsActions.fetchFriends
})(withRouter(FriendProfile));

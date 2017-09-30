import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
// Components
import Bio from './Bio/Bio';
import Details from './Details/Details';

class FollowerProfile extends Component {
    componentDidMount() {
        const followerId = this.props.match.params.followerId;
        this.props.fetchProfile(followerId).then(res => {
            const { authId } = this.props.follower;
            this.props.fetchGroups(authId);
            this.props.fetchFollowers(authId);
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
function mapStateToProps({ followers }) {
    return { follower: followers.currentFollower };
}
export default connect(mapStateToProps, {
    fetchProfile: actions.followersActions.fetchProfile,
    fetchGroups: actions.groupsActions.fetchGroups,
    fetchProjects: actions.projectsActions.fetchProjects,
    fetchFollowers: actions.followersActions.fetchFollowers
})(withRouter(FollowerProfile));

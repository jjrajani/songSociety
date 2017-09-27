import React, { Component } from 'react';
import Bio from './Bio/Bio';
import Details from './Details/Details';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Profile extends Component {
    componentDidMount() {
        this.props.getProfile(this.props.auth).then(res => {
            const userId = res.sub;
            this.props.fetchProjects(userId);
            this.props.fetchFriends(userId);
            this.props.fetchGroups(userId);
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

function mapStateToProps({ auth, profile }) {
    return { auth, profile };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile,
    fetchGroups: actions.groupsActions.fetchGroups,
    fetchProjects: actions.projectsActions.fetchProjects,
    fetchFriends: actions.friendsActions.fetchFriends
})(Profile);

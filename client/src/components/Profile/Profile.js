import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
// Components
import Bio from './Bio/Bio';
import Details from './Details/Details';

class Profile extends Component {
    componentDidMount() {
        this.props.getProfile().then(res => {
            const userId = res.sub;
            this.props.fetchProfile(userId);
            this.props.fetchGroups(userId);
            this.props.fetchFollowers(userId);
            this.props.fetchProjects(userId);
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
    fetchProfile: actions.profileActions.fetchProfile,
    fetchGroups: actions.groupsActions.fetchGroups,
    fetchProjects: actions.projectsActions.fetchProjects,
    fetchFollowers: actions.followersActions.fetchFollowers
})(withRouter(Profile));

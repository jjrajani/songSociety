import React, { Component } from 'react';
import * as db from './db';
import Bio from './components/Bio';
import Details from './components/Details';

class Profile extends Component {
    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                profile['groups'] = db.GROUPS;
                profile['projects'] = db.PROJECTS;
                profile['friends'] = db.FRIENDS;
                this.setState({ profile });
            });
        } else {
            userProfile['groups'] = db.GROUPS;
            userProfile['projects'] = db.PROJECTS;
            userProfile['friends'] = db.FRIENDS;
            this.setState({ profile: userProfile });
        }
    }
    render() {
        const { profile } = this.state;
        return (
            <div className="container-fluid main_content profile">
                <div className="row">
                    <Bio profile={profile} />
                    <Details profile={profile} />
                </div>
            </div>
        );
    }
}

export default Profile;

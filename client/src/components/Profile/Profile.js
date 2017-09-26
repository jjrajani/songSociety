import React, { Component } from 'react';
import Bio from './Bio/Bio';
import Details from './Details/Details';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Profile extends Component {
    componentDidMount() {
        this.props.getProfile(this.props.auth);
    }
    render() {
        const { profile } = this.props;
        return (
            <div className="container main_content profile">
                <div className="row">
                    <Bio />
                    <Details profile={profile} />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth, profile }) {
    return { auth, profile };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile
})(Profile);

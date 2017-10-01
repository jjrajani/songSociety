import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
// Components
import LandingCarousel from '../LandingCarousel/LandingCarousel';

class Home extends Component {
    componentDidMount() {
        const isAuthenticated = this.props.auth.isAuthenticated();
        if (isAuthenticated) {
            this.props.getProfile().then(res => {
                const userId = res.sub;
                this.props.fetchProfile(userId);
            });
        }
    }
    render() {
        return (
            <div className="home">
                <LandingCarousel />
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile,
    fetchProfile: actions.profileActions.fetchProfile
})(Home);

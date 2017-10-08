import React, { Component } from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
// Components
import LandingCarousel from '../LandingCarousel/LandingCarousel';

class Home extends Component {
    componentDidMount() {
        const isAuthenticated = this.props.auth.isAuthenticated();
        if (isAuthenticated) {
            this.props.getProfile().then(res => {
                const userId = res.sub;
                this.props.fetchProfile(userId);
                let fromLogin = localStorage.getItem('goingToLoginRoute');
                if (fromLogin === 'true') {
                    localStorage.removeItem('goingToLoginRoute');
                    this.props.history.push('/my_profile');
                }
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

function mapStateToProps({ auth, profile }) {
    return { auth, profile };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile,
    fetchProfile: actions.profileActions.fetchProfile
})(withRouter(Home));

import React, { Component } from 'react';
import LandingCarousel from '../LandingCarousel/LandingCarousel';

class Home extends Component {
    login() {
        this.props.auth.login();
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="home">
                {isAuthenticated() && <LandingCarousel />}
                {!isAuthenticated() && <LandingCarousel />}
            </div>
        );
    }
}

export default Home;

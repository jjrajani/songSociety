import React, { Component } from 'react';
// Routes
import Routes from './routes';
// Tools
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
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
        return <Routes />;
    }
}

function mapStateToProps({ auth, profile }) {
    return { auth, profile };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile,
    fetchProfile: actions.profileActions.fetchProfile
})(App);

import React, { Component } from 'react';
import loading from './loading.svg';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Login extends Component {
    componentDidMount() {
        // init get profile to store auth profile info on
        // redux profile object
        this.props.getProfile();
    }
    render() {
        return (
            <div id="login">
                <img src={loading} alt="loading" />
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, {
    getProfile: actions.authActions.getProfile
})(Login);

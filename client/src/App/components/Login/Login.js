// import React from 'react';
import React, { Component } from 'react';
import loading from './loading.svg';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Login extends Component {
    componentDidMount() {
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

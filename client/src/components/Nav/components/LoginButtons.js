import React from 'react';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../actions';
// Components
import { Button } from 'react-bootstrap';

const LoginButtons = ({ auth, login, logout }) => {
    const isAuthenticated = auth.isAuthenticated();
    return isAuthenticated
        ? <Button className="btn-margin" onClick={logout}>
              Log Out
          </Button>
        : <Button className="btn-margin" onClick={login}>
              Log In
          </Button>;
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, {
    logout: actions.authActions.logout,
    login: actions.authActions.login
})(LoginButtons);

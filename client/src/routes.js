import React from 'react';
// tools
import { connect } from 'react-redux';
// services
import * as actions from './actions';
import history from './history';
//components
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Home, Profile, Workspace, Login, Nav } from './components';

const Routes = ({ auth, initAuth, handleAuthenticationParse }) => {
    return (
        <Router history={history}>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" render={props => <Home />} />
                    <Route
                        exact
                        path="/profile"
                        render={props =>
                            !auth.isAuthenticated()
                                ? <Redirect to="/" />
                                : <Profile auth={auth} {...props} />}
                    />
                    <Route
                        exact
                        path="/workspace"
                        render={props =>
                            !auth.isAuthenticated()
                                ? <Redirect to="/" />
                                : <Workspace auth={auth} {...props} />}
                    />
                    <Route
                        exact
                        path="/login"
                        render={props => {
                            handleAuthenticationParse(props);
                            return <Login {...props} />;
                        }}
                    />
                </Switch>
            </div>
        </Router>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, {
    initAuth: actions.authActions.initAuth,
    handleAuthenticationParse: actions.authActions.handleAuthenticationParse
})(Routes);

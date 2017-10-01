import React, { Component } from 'react';
// tools
import { connect } from 'react-redux';
// services
import * as actions from './actions';
import history from './history';
//components
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import {
    Home,
    Profile,
    Workspace,
    Login,
    Nav,
    Artists,
    FollowerProfile,
    PendingInvites
} from './components';

class Routes extends Component {
    render() {
        const { auth, handleAuthenticationParse } = this.props;
        return (
            <Router history={history}>
                <div className={'dark_theme light_theme'}>
                    <Nav />
                    <Switch>
                        <Route exact path="/" render={props => <Home />} />
                        <Route
                            exact
                            path="/my_profile"
                            render={props =>
                                !auth.isAuthenticated()
                                    ? <Redirect to="/" />
                                    : <Profile />}
                        />
                        <Route
                            exact
                            path="/follower/:followerId"
                            render={props =>
                                !auth.isAuthenticated()
                                    ? <Redirect to="/" />
                                    : <FollowerProfile />}
                        />
                        <Route
                            exact
                            path="/artist/:followerId"
                            render={props => <FollowerProfile />}
                        />
                        <Route
                            exact
                            path="/artists"
                            render={props => <Artists />}
                        />
                        <Route
                            exact
                            path="/workspace/:workspaceId"
                            render={props =>
                                !auth.isAuthenticated()
                                    ? <Redirect to="/" />
                                    : <Workspace auth={auth} {...props} />}
                        />
                        <Route
                            exact
                            path="/workspace/new"
                            component={Workspace}
                        />
                        <Route exact path="/workspace" component={Workspace} />
                        <Route
                            exact
                            path="/pending_invites"
                            render={props =>
                                !auth.isAuthenticated()
                                    ? <Redirect to="/" />
                                    : <PendingInvites />}
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
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, {
    handleAuthenticationParse: actions.authActions.handleAuthenticationParse
})(Routes);

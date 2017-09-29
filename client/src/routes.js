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
    Users,
    FriendProfile
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
                            path="/profile"
                            render={props =>
                                !auth.isAuthenticated()
                                    ? <Redirect to="/" />
                                    : <Profile />}
                        />
                        <Route
                            exact
                            path="/friend/:friendId"
                            render={props =>
                                !auth.isAuthenticated()
                                    ? <Redirect to="/" />
                                    : <FriendProfile />}
                        />
                        <Route
                            exact
                            path="/find_friends"
                            render={props =>
                                !auth.isAuthenticated()
                                    ? <Redirect to="/" />
                                    : <Users />}
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

import React, { Component } from 'react';
// tools
import { connect } from 'react-redux';
// services
import * as actions from './actions';
import history from './history';
//components
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Home, Profile, Workspace, Login, Nav } from './components';

class Routes extends Component {
    render() {
        const { auth, handleAuthenticationParse } = this.props;
        const isWorkspaceRoute =
            this.props.pathname.split('/').indexOf('workspace') !== -1;
        return (
            <Router history={history}>
                <div
                    className={isWorkspaceRoute ? 'dark_theme' : 'light_theme'}
                >
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
    return { auth, pathname: history.location.pathname };
}

export default connect(mapStateToProps, {
    handleAuthenticationParse: actions.authActions.handleAuthenticationParse
})(Routes);

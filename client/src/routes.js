import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { App, Home, Profile, Workspace, Login, Nav } from './components';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
};

export const makeMainRoutes = () => {
    return (
        <Router history={history} component={App}>
            <div>
                <Nav auth={auth} />
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
                            handleAuthentication(props);
                            return <Login {...props} />;
                        }}
                    />
                </Switch>
            </div>
        </Router>
    );
};

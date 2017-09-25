import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Workspaces from './Workspaces/Workspaces';
import Login from './Login/Login';
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
                <Route
                    path="/"
                    render={props => <App auth={auth} {...props} />}
                />
                <Route
                    path="/home"
                    render={props => <Home auth={auth} {...props} />}
                />
                <Route
                    path="/profile"
                    render={props =>
                        !auth.isAuthenticated()
                            ? <Redirect to="/home" />
                            : <Profile auth={auth} {...props} />}
                />
                <Route
                    path="/workspaces"
                    render={props =>
                        !auth.isAuthenticated()
                            ? <Redirect to="/home" />
                            : <Workspaces auth={auth} {...props} />}
                />
                <Route
                    path="/login"
                    render={props => {
                        handleAuthentication(props);
                        return <Login {...props} />;
                    }}
                />
            </div>
        </Router>
    );
};

import t from './types';
// Auth to create new auth instance on logout
import auth, { Auth } from '../../Auth/Auth';

export const handleAuthenticationParse = (nextState, replace) => dispatch => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
    dispatch({ type: t.HANDLE_AUTHENTICATION_PARSE, payload: auth });
};

export const login = () => dispatch => {
    auth.login();
    dispatch({ type: 'LOGIN', payload: auth });
};

export const logout = () => dispatch => {
    auth.logout();
    const newAuth = new Auth();
    dispatch({ type: 'LOGOUT', payload: newAuth });
};

export const getProfile = () => dispatch => {
    auth.getProfile((err, profile) => {
        dispatch({ type: t.GET_PROFILE, payload: { auth, profile } });
    });
};

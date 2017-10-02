import t from '../../actions/auth/types';

import auth from '../../../Auth/Auth';

export default function(state = auth, action) {
    switch (action.type) {
    case t.INIT_AUTH:
        return action.payload;
    case t.HANDLE_AUTHENTICATION_PARSE:
        return action.payload;
    case t.LOGIN:
        return action.payload;
    case t.LOGOUT:
        return action.payload;
    case t.GET_PROFILE:
        return action.payload.auth;
    default:
        return state;
    }
}

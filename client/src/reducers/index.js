import { combineReducers } from 'redux';
// import { reducer as reduxForm } from 'redux-form';
import authReducer from './auth/reducer';
import profileReducer from './profile/reducer';
import groupsReducer from './groups/reducer';

export default combineReducers({
    auth: authReducer,
    profile: profileReducer,
    groups: groupsReducer
    // form: reduxForm,
});

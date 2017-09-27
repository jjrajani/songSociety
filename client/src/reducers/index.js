import { combineReducers } from 'redux';
// import { reducer as reduxForm } from 'redux-form';
import authReducer from './auth/reducer';
import profileReducer from './profile/reducer';
import groupsReducer from './groups/reducer';
import projectsReducer from './projects/reducer';
import friendsReducer from './friends/reducer';
import navReducer from './nav/reducer';
import workspaceReducer from './workspace/reducer';

export default combineReducers({
    auth: authReducer,
    navExpanded: navReducer,
    profile: profileReducer,
    groups: groupsReducer,
    projects: projectsReducer,
    friends: friendsReducer,
    workspace: workspaceReducer
    // form: reduxForm,
});

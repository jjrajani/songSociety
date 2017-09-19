import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './auth/reducer';
import surveyFormReducer from './surveyForm/reducer';
import surveysReducer from './surveys/reducer';

export default combineReducers({
    auth: authReducer,
    surveyForm: surveyFormReducer,
    /* Redux From must be stored under form key */
    /* Changing from form key can be done but is difficult, check redux-form docs */
    form: reduxForm,
    surveys: surveysReducer
});

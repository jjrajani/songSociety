import axios from 'axios';
import t from '../auth/types';

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: t.FETCH_USER, payload: res.data });
};

import axios from 'axios';
import t from './types';

/*
  fetchUser uses ReduxThunk, a middleware that determines if action creator is returning a funciton.
  In so it is able to hold off calling dispatch until fetchUser says to.
 */
export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: t.FETCH_SURVEYS, payload: res.data });
};

export const deleteSurvey = id => async dispatch => {
    await axios.delete(`/api/survey/${id}`);

    dispatch({ type: t.DELETE_SURVEY, payload: id });
};

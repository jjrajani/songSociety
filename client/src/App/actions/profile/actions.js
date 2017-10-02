import t from './types';
import axios from 'axios';

export const togglePageView = page => dispatch => {
    dispatch({ type: t.TOGGLE_PAGE_VIEW, payload: page });
};

export const setUserId = id => dispatch => {
    dispatch({ type: t.SET_USER_ID, payload: id });
};

export const fetchProfile = id => async dispatch => {
    const res = await axios.get(`/api/user/${id}`);

    dispatch({ type: t.FETCH_PROFILE, payload: res.data });
};

import axios from 'axios';
import t from './types';

export const getMoreStorage = (userId, token) => async dispatch => {
    const res = await axios.post(`/api/stripe/getMoreStorage/${userId}`, token);

    dispatch({ type: t.FETCH_PROFILE, payload: res.data });
};

export const privatiseProfile = (userId, token) => async dispatch => {
    const res = await axios.post(
        `/api/stripe/privatiseProfile/${userId}`,
        token
    );

    dispatch({ type: t.FETCH_PROFILE, payload: res.data });
};

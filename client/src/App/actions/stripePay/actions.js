import axios from 'axios';
import t from './types';

export const handleToken = (userId, token) => async dispatch => {
    const res = await axios.post(`/api/stripe/${userId}`, token);

    dispatch({ type: t.FETCH_PROFILE, payload: res.data });
};

import t from './types';
import axios from 'axios';
import _ from 'lodash';

export const fetchFriends = userId => async dispatch => {
    // the RIGHT way
    // const res = await axios.get(`/api/${userId}/friends`);
    // dispatch({ type: t.FETCH_FRIENDS, payload: res.data });
    // the DEMO way
    const res = await axios.get(`/api/friends`);

    dispatch({ type: t.FETCH_FRIENDS, payload: res.data });
};

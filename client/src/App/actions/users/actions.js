import t from './types';
import axios from 'axios';
import _ from 'lodash';

export const fetchUsers = () => async dispatch => {
    // the RIGHT way
    const res = await axios.get(`/api/users`);
    // the DEMO way
    // const res = await axios.get(`/api/followers`);

    dispatch({ type: t.FETCH_USERS, payload: res.data });
};

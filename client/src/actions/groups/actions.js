import t from './types';
import axios from 'axios';
import _ from 'lodash';

export const fetchGroups = userId => async dispatch => {
    // the RIGHT way
    // const res = await axios.get(`/api/${userId}/groups`);
    // dispatch({ type: t.FETCH_GROUPS, payload: res.data });
    // the DEMO way
    const res = await axios.get(`/api/groups`);

    dispatch({ type: t.FETCH_GROUPS, payload: res.data });
};

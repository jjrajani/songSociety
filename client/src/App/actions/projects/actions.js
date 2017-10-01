import axios from 'axios';
import t from './types';

export const fetchProjects = userId => async dispatch => {
    // the RIGHT way
    const res = await axios.get(`/api/${userId}/projects`);
    // the DEMO way
    // const res = await axios.get(`/api/projects`);

    dispatch({ type: t.FETCH_PROJECTS, payload: res.data });
};

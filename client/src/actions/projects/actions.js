import axios from 'axios';
import t from './types';

export const fetchProjects = userId => async dispatch => {
    const res = await axios.get(`/api/${userId}/projects`);

    dispatch({ type: t.FETCH_PROJECTS, payload: res.data });
};

import axios from 'axios';
import t from './types';

export const fetchComments = workspaceId => async dispatch => {
    let comments = await axios.get(`/api/${workspaceId}/comments`);

    dispatch({ type: t.FETCH_COMMENTS, payload: comments.data });
};

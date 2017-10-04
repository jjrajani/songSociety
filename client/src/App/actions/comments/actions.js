import axios from 'axios';
import t from './types';

export const fetchComments = workspaceId => async dispatch => {
    let comments = await axios.get(`/api/${workspaceId}/comments`);

    dispatch({ type: t.FETCH_COMMENTS, payload: comments.data });
};

export const addComment = (
    userId,
    content,
    audio,
    workspaceId
) => async dispatch => {
    await axios.post(`/api/${workspaceId}/comments`, {
        userId: userId,
        content: content,
        audio: audio,
        workspaceId: workspaceId
    });
    let comments = await axios.get(`/api/${workspaceId}/comments`);
    dispatch({ type: t.FETCH_COMMENTS, payload: comments.data });
};

export const updateAudioSource = src => dispatch => {
    dispatch({ type: t.UPDATE_COMMENTS_CURRENT_AUDIO, payload: src });
};

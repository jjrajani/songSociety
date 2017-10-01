import t from './types';
import axios from 'axios';
import _ from 'lodash';

export const inviteCollaborator = (
    userId,
    workspaceId,
    collaboratorId
) => async dispatch => {
    const res = await axios.post(
        `/api/${userId}/${workspaceId}/collaborators/invite/${collaboratorId}`
    );
    return res;
};

export const addCollaborator = (
    workspaceId,
    followerUserId
) => async dispatch => {
    const res = await axios.post(
        `/api/collaborators/${workspaceId}/${followerUserId}`
    );

    dispatch({ type: t.ADD_COLLABORATOR, payload: res.data });
};

export const removeCollaborator = (
    workspaceId,
    followerUserId
) => async dispatch => {
    const res = await axios.delete(
        `/api/collaborators/${workspaceId}/${followerUserId}`
    );

    dispatch({ type: t.REMOVE_COLLABORATOR, payload: res.data });
};

export const togglePageView = page => dispatch => {
    dispatch({ type: t.TOGGLE_PAGE_VIEW, payload: page });
};
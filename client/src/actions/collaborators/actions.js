import t from './types';
import axios from 'axios';
import _ from 'lodash';

// export const fetchCollaborators = workspaceId => async dispatch => {
//     const res = await axios.get(`/api/collaborators/${workspaceId}`);
//
//     dispatch({ type: t.FETCH_COLLABORATORS, payload: res.data });
// };

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
//
// export const fetchProfile = followerId => async dispatch => {
//     const follower = await axios.get(`/api/follower/${followerId}`);
//
//     dispatch({ type: t.GET_FRIEND_PROFILE, payload: follower.data });
// };

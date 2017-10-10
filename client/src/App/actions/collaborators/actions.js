import t from './types';
import axios from 'axios';
import _ from 'lodash';

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

export const filterCollaborators = (
    users,
    invites,
    filterType,
    collaborators
) => dispatch => {
    switch (filterType) {
        case 'pending': {
            return users.filter(c => {
                let pending = false;
                invites.forEach(i => {
                    if (i.inviteeId === c._id) pending = true;
                });
                return pending;
            });
        }
        case 'inactive': {
            return users.filter(u => {
                let isCollaborator = collaborators.indexOf(u.authId) !== -1;
                let isPending = false;
                invites.forEach(i => {
                    if (i.inviteeId === u._id) isPending = true;
                });
                return !isCollaborator && !isPending;
            });
        }
        case 'active': {
            return users.filter(u => {
                return collaborators.indexOf(u._id) !== -1;
            });
        }
        default: {
            return users;
        }
    }
    return {};
};

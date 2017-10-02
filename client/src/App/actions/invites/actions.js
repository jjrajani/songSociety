import t from './types';
import axios from 'axios';
import _ from 'lodash';

export const fetchInvites = userId => async dispatch => {
    const res = await axios.get(`/api/user/${userId}/invites`);

    dispatch({ type: t.FETCH_INVITES, payload: res.data });
};

export const togglePageView = page => dispatch => {
    dispatch({ type: t.TOGGLE_INVITES_VIEW, payload: page });
};

export const inviteCollaborator = (
    inviterId,
    workspaceId,
    inviteeId
) => async dispatch => {
    const res = await axios.post(
        `/api/invite/${inviterId}/${workspaceId}/${inviteeId}`
    );
    dispatch({ type: t.INVITE, payload: res.data.outgoing });
};

export const acceptInvite = (invite, userId) => async dispatch => {
    const res = await axios.post(`/api/invites/accept/${userId}`, invite);

    dispatch({ type: t.ACCEPT_INVITE, payload: res.data });
};

export const declineInvite = (invite, userId) => async dispatch => {
    const res = await axios.post(`/api/invites/decline/${userId}`, invite);
    console.log('decline action', res.data);
    dispatch({ type: t.DECLINE_INVITE, payload: res.data });
};
//
// export const cancelInvite = () => dispatch => {
//     const res = axios.post(`/api/cancel/${inviteId}`);
//
//     dispatch({ type: t.CANCEL_INVITES, payload: inviteId });
// };

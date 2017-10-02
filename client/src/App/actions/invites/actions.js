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

// export const acceptInvite = (userId, inviteId) => dispatch => {
//     const res = axios.post(`/api/invites/accept/${inviteId}/${userId}`);
//
//     dispatch({ type: t.ACCEPT_INVITES, payload: inviteId });
// };
//
// export const declineInvite = (userId, inviteId) => dispatch => {
//     const res = axios.post(`/api/invites/decline/${inviteId}/${userId}`);
//
//     dispatch({ type: t.DECLINE_INVITES, payload: inviteId });
// };
//
// export const cancelInvite = () => dispatch => {
//     const res = axios.post(`/api/cancel/${inviteId}`);
//
//     dispatch({ type: t.CANCEL_INVITES, payload: inviteId });
// };

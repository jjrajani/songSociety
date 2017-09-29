import t from './types';
import axios from 'axios';
import _ from 'lodash';

export const fetchFriends = userId => async dispatch => {
    const res = await axios.get(`/api/${userId}/friends`);
    console.log('fetchFriends', userId, res.data);

    dispatch({ type: t.FETCH_FRIENDS, payload: res.data });
};

export const addFriend = (userId, friendUserId) => async dispatch => {
    const res = await axios.post(`/api/${userId}/add_friend/${friendUserId}`);

    dispatch({ type: t.ADD_FRIEND, payload: res.data });
};

export const fetchProfile = friendId => async dispatch => {
    const friend = await axios.get(`/api/friend/${friendId}`);

    dispatch({ type: t.GET_FRIEND_PROFILE, payload: friend.data });
};

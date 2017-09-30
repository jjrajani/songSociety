import t from './types';
import axios from 'axios';
import _ from 'lodash';

export const fetchFollowers = userId => async dispatch => {
    const res = await axios.get(`/api/${userId}/followers`);

    dispatch({ type: t.FETCH_FOLLOWERS, payload: res.data });
};

export const addFollower = (userId, followerUserId) => async dispatch => {
    const res = await axios.post(
        `/api/${userId}/add_follower/${followerUserId}`
    );

    dispatch({ type: t.ADD_FOLLOWER, payload: res.data });
};

export const fetchProfile = followerId => async dispatch => {
    const follower = await axios.get(`/api/follower/${followerId}`);

    dispatch({ type: t.GET_FOLLOWER_PROFILE, payload: follower.data });
};

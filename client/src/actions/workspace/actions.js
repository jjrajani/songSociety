import * as secrets from '../../secrets';
import t from './types';
import axios from 'axios';

export const togglePageView = page => dispatch => {
    dispatch({ type: t.TOGGLE_WORKSPACE_PAGE_VIEW, payload: page });
};

export const editTitleOn = () => dispatch => {
    dispatch({ type: t.EDIT_TITLE_ON, payload: true });
};

export const editTitleOff = () => dispatch => {
    dispatch({ type: t.EDIT_TITLE_OFF, payload: false });
};

export const playAudio = id => async dispatch => {
    return new Promise((res, rej) => {
        dispatch({
            type: t.PLAY_AUDIO,
            payload: `https://api.soundcloud.com/tracks/${Math.floor(
                Math.random() * 5700000
            ) + 1}/stream?client_id=${secrets.SOUND_CLOUD_CLINT_ID}`
        });
        res('play damnit');
    });
};

export const fetchWorkspace = id => async dispatch => {
    const workspace = await axios.get(`/api/workspace/${id}`);

    dispatch({ type: t.FETCH_WORKSPACE, payload: workspace.data });
};

export const resetWorkspace = () => dispatch => {
    dispatch({ type: t.RESET_WORKSPACE, payload: {} });
};

export const submitTitleForm = values => dispatch => {
    dispatch({ type: t.SUBMIT_TITLE_FORM, payload: values.title });
};

export const changeTitleForm = (value, prevValue) => dispatch => {
    if (value !== prevValue) {
        dispatch({ type: t.CHANGE_TITLE_FORM, payload: value });
    }
};

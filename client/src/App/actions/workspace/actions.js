import * as secrets from '../../../secrets';
import t from './types';
import axios from 'axios';

export const promoteAudio = (workspaceId, audio) => async dispatch => {
    const workspace = await axios.post(
        `/api/comments/promote/${workspaceId}/audio`,
        { audio }
    );

    dispatch({ type: t.PROMOTE_AUDIO, payload: workspace.data });
};

export const togglePageView = page => dispatch => {
    dispatch({ type: t.TOGGLE_WORKSPACE_PAGE_VIEW, payload: page });
};

export const editTitleOn = () => dispatch => {
    dispatch({ type: t.EDIT_TITLE_ON, payload: true });
};

export const editTitleOff = () => dispatch => {
    dispatch({ type: t.EDIT_TITLE_OFF, payload: false });
};

export const fetchWorkspace = id => async dispatch => {
    const workspace = await axios.get(`/api/workspace/${id}`);

    dispatch({ type: t.FETCH_WORKSPACE, payload: workspace.data });
};

export const resetWorkspace = () => dispatch => {
    dispatch({ type: t.RESET_WORKSPACE, payload: {} });
};

export const submitTitleForm = (workspace, userId) => async dispatch => {
    if (workspace.project._id) {
        const workspaceId = workspace.project._id;
        const res = await axios.post(
            `/api/workspace/${workspaceId}`,
            workspace.project
        );
        dispatch({ type: t.SUBMIT_TITLE_FORM, payload: res.data });
    } else {
        const res = await axios.post(
            `/api/new/workspace/${userId}`,
            workspace.project
        );

        dispatch({ type: t.SUBMIT_TITLE_FORM, payload: res.data });
    }
};

export const changeTitleForm = (value, prevValue) => dispatch => {
    if (value !== prevValue) {
        dispatch({ type: t.CHANGE_TITLE_FORM, payload: value });
    }
};

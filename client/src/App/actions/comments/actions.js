import axios from 'axios';
import t from './types';
import aws from '../../../utils/aws';
import randomString from 'randomstring';
import auth from '../../../Auth/Auth';

export const fetchComments = workspaceId => async dispatch => {
    let comments = await axios.get(`/api/${workspaceId}/comments`);

    dispatch({ type: t.FETCH_COMMENTS, payload: comments.data });
};

export const addComment = (
    form
    // userId,
    // content,
    // audio,
    // workspaceId
) => async dispatch => {
    console.log('addComment', form);
    const file = form.values.selected_file[0];
    const fileType = file.type.split('/')[1];
    const title = `${randomString.generate(32)}.${fileType}`;
    const idToken = auth.getIdToken();
    let awsUpload = await aws.upload(title, file, idToken);
    console.log('awsUpload', awsUpload);

    // await axios.post(`/api/${workspaceId}/comments`, {
    //     userId: userId,
    //     content: content,
    //     audio: audio,
    //     workspaceId: workspaceId
    // });
    // let comments = await axios.get(`/api/${workspaceId}/comments`);
    // dispatch({ type: t.FETCH_COMMENTS, payload: comments.data });
};

export const updateNewComment = (key, value) => dispatch => {
    dispatch({
        type: t.UPDATE_NEW_COMMENT,
        payload: { key, value }
    });
};

export const updateAudioSource = src => dispatch => {
    dispatch({ type: t.UPDATE_COMMENTS_CURRENT_AUDIO, payload: src });
};

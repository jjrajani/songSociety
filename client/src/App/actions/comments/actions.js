import axios from 'axios';
import t from './types';
import aws from '../../../utils/aws';
import randomString from 'randomstring';
import auth from '../../../Auth/Auth';

export const fetchComments = workspaceId => async dispatch => {
    let comments = await axios.get(`/api/${workspaceId}/comments`);

    dispatch({ type: t.FETCH_COMMENTS, payload: comments.data });
};

export const addComment = (userId, workspaceId, values) => async dispatch => {
    let textContent = values.content ? values.content : '';
    if (values.selected_file) {
        const file = values.selected_file[0];
        const fileType = file.type.split('/')[1];
        const title = `${randomString.generate(32)}.${fileType}`;
        const idToken = auth.getIdToken();
        const awsUpload = await aws.upload(title, file, idToken);
        // audioLink can be used to stream and download file
        const audioLink = `http://d2lv3jhuthznxw.cloudfront.net/${awsUpload.Key}`;
        const comment = {
            userId,
            content: textContent,
            audio: audioLink,
            workspaceId
        };

        let posted = await axios.post(`/api/${workspaceId}/comments`, comment);

        dispatch({ type: t.ADD_COMMENT, payload: posted.data });
    } else {
        const comment = {
            userId,
            content: textContent,
            audio: '',
            workspaceId
        };
        let posted = await axios.post(`/api/${workspaceId}/comments`, comment);
        dispatch({ type: t.ADD_COMMENT, payload: posted.data });
    }
};

export const updateNewComment = (key, value) => dispatch => {
    dispatch({
        type: t.UPDATE_NEW_COMMENT,
        payload: { key, value }
    });
};

export const updateAudioSource = audioSrc => dispatch => {
    dispatch({ type: t.UPDATE_COMMENTS_CURRENT_AUDIO, payload: audioSrc });
};

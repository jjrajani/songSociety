import * as secrets from '../../secrets';
import t from './types';

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

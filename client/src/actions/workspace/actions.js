import t from './types';

export const editTitleOn = () => dispatch => {
    dispatch({ type: t.EDIT_TITLE_ON, payload: true });
};

export const editTitleOff = () => dispatch => {
    dispatch({ type: t.EDIT_TITLE_OFF, payload: false });
};

import t from './types';

export const togglePageView = page => dispatch => {
    dispatch({ type: t.TOGGLE_PAGE_VIEW, payload: page });
};

export const setUserId = id => dispatch => {
    dispatch({ type: t.SET_USER_ID, payload: id });
};

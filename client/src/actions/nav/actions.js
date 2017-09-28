import t from './types';

export const openNav = () => dispatch => {
    dispatch({ type: t.OPEN_NAV, payload: true });
};

export const closeNav = () => dispatch => {
    dispatch({ type: t.CLOSE_NAV, payload: false });
};

export const toggleNav = () => dispatch => {
    dispatch({ type: t.TOGGLE_NAV, payload: null });
};

export const toggleActiveTab = route => dispatch => {
    dispatch({ type: t.TOGGLE_ACTIVE_TAB, payload: route });
};

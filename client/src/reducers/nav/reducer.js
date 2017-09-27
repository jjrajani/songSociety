import t from '../../actions/nav/types';

export default function(state = false, action) {
    switch (action.type) {
    case t.OPEN_NAV:
        return true;
    case t.CLOSE_NAV:
        return false;
    case t.TOGGLE_NAV:
        return !state;
    default:
        return state;
    }
}

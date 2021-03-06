import t from '../../actions/nav/types';

export default function(
    state = { navExpanded: false, activeTab: '/' },
    action
) {
    switch (action.type) {
        case t.CLOSE_NAV:
            return { ...state, navExpanded: false };
        case t.TOGGLE_NAV:
            return { ...state, navExpanded: !state.navExpanded };
        case t.TOGGLE_ACTIVE_TAB:
            return { ...state, activeTab: action.payload };
        case t.LOGOUT: {
            return { navExpanded: false, activeTab: '/' };
        }
        default:
            return state;
    }
}

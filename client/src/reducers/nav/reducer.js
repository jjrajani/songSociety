import t from '../../actions/nav/types';

export default function(
    state = { navExpanded: false, activeTab: 'home' },
    action
) {
    switch (action.type) {
        case t.OPEN_NAV:
            return { ...state, navExpanded: true };
        case t.CLOSE_NAV:
            return { ...state, navExpanded: false };
        case t.TOGGLE_NAV:
            return { ...state, navExpanded: !state.navExpanded };
        case t.TOGGLE_ACTIVE_TAB:
            return { ...state, activeTab: action.payload };
        default:
            return state;
    }
}

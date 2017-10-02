import t from '../../actions/profile/types';

export default function(
    state = { profile: {}, pageView: 'projects', userId: '' },
    action
) {
    switch (action.type) {
        case t.FETCH_PROFILE:
            return { ...state, profile: action.payload };
        case t.GET_PROFILE:
            return { ...state, userId: action.payload.profile.sub };
        case t.SET_USER_ID:
            return {
                ...state,
                userId: action.payload
            };
        case t.TOGGLE_PAGE_VIEW:
            return { ...state, pageView: action.payload };
        case t.INVITE:
            let newState = {
                ...state,
                profile: {
                    ...state.profile,
                    invites: {
                        incoming: state.profile.invites.incoming,
                        outgoing: action.payload
                    }
                }
            };
            return newState;
        default:
            return state;
    }
}

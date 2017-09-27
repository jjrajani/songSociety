import t from '../../actions/profile/types';

export default function(
    state = { profile: {}, pageView: 'projects', avatar: '', userId: '' },
    action
) {
    switch (action.type) {
        case t.GET_PROFILE:
            return {
                ...state,
                profile: action.payload.profile,
                avatar: action.payload.profile.picture,
                userId: action.payload.profile.sub
            };
        case t.SET_USER_ID:
            return {
                ...state,
                userId: action.payload
            };
        case t.TOGGLE_PAGE_VIEW:
            return { ...state, pageView: action.payload };
        default:
            return state;
    }
}

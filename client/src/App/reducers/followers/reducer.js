import t from '../../actions/followers/types';

export default function(state = { list: [], currentFollower: {} }, action) {
    switch (action.type) {
        case t.FETCH_FOLLOWERS:
            return { ...state, list: action.payload };
        case t.ADD_FRIEND:
            if (typeof action.payload !== 'string') {
                return { ...state, list: [action.payload, ...state] };
            } else {
                return state;
            }
        case t.GET_FRIEND_PROFILE:
            return {
                ...state,
                currentFollower: action.payload
            };
        case t.ADD_FOLLOWER:
            return {
                ...state,
                list: [action.payload, ...state.list]
            };
        case t.LOGOUT:
            return {
                list: [],
                currentFollower: {}
            };
        default:
            return state;
    }
}

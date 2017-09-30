import t from '../../actions/friends/types';

export default function(state = { list: [], currentFriend: {} }, action) {
    switch (action.type) {
        case t.FETCH_FRIENDS:
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
                currentFriend: action.payload
            };
        default:
            return state;
    }
}

import t from '../../actions/friends/types';

export default function(state = [], action) {
    switch (action.type) {
    case t.FETCH_FRIENDS:
        return action.payload;
    default:
        return state;
    }
}

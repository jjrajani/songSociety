import t from '../../actions/users/types';

export default function(state = [], action) {
    switch (action.type) {
    case t.FETCH_USERS:
        return action.payload;
    default:
        return state;
    }
}

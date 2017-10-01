import t from '../../actions/groups/types';

export default function(state = [], action) {
    switch (action.type) {
    case t.FETCH_GROUPS:
        return action.payload;
    default:
        return state;
    }
}

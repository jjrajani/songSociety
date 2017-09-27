import t from '../../actions/projects/types';

export default function(state = [], action) {
    switch (action.type) {
    case t.FETCH_PROJECTS:
        return action.payload;
    default:
        return state;
    }
}

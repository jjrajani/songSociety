import t from '../../actions/profile/types';

export default function(state = {}, action) {
    switch (action.type) {
    case t.GET_PROFILE:
        return action.payload.profile;
    default:
        return state;
    }
}

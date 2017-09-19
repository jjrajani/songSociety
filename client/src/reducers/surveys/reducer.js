import t from '../../actions/surveys/types';

export default function(state = [], action) {
    switch (action.type) {
    case t.FETCH_SURVEYS:
        return action.payload.reverse();
    case t.DELETE_SURVEY:
        return state.filter(survey => {
            return survey._id !== action.payload;
        });
    default:
        return state;
    }
}

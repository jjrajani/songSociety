import t from '../../actions/collaborators/types';

export default function(state = { list: [], pageView: 'active' }, action) {
    switch (action.type) {
        // case t.FETCH_COLLABORATORS:
        //     return action.payload;
        case t.ADD_COLLABORATOR:
            return {
                ...state,
                list: action.payload.collaborators
            };
        case t.REMOVE_COLLABORATOR:
            return {
                ...state,
                list: action.payload
            };
        case t.FETCH_WORKSPACE:
            let newList = action.payload.collaborators.map(c => {
                return c;
            });
            return {
                ...state,
                list: newList
            };
        case t.TOGGLE_PAGE_VIEW:
            return {
                ...state,
                pageView: action.payload
            };
        case t.LOGOUT:
            return {
                list: [],
                pageView: 'active'
            };
        default:
            return state;
    }
}

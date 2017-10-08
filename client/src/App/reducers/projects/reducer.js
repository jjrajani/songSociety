import t from '../../actions/projects/types';

export default function(state = { myProjects: [], collabs: [] }, action) {
    switch (action.type) {
    case t.FETCH_PROJECTS:
        return {
            myProjects: action.payload.myProjects,
            collabs: action.payload.collabs
        };
    case t.LOGOUT: {
        return {
            myProjects: [],
            collabs: []
        };
    }
    default:
        return state;
    }
}

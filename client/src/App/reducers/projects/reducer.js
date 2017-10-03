import t from '../../actions/projects/types';

export default function(state = { myProjects: [], collabs: [] }, action) {
    switch (action.type) {
    case t.FETCH_PROJECTS:
        console.log('fetchProjects', action.payload);
        return {
            myProjects: action.payload.myProjects,
            collabs: action.payload.collabs
        };
    default:
        return state;
    }
}

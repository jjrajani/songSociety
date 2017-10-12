import t from '../../actions/workspace/types';

export default function(
    state = {
        project: { name: 'Untitled', collaborators: [] },
        editTitleMode: false,
        pageView: 'comments',
        isTouched: false
    },
    action
) {
    switch (action.type) {
        case t.EDIT_TITLE_ON:
            return {
                ...state,
                editTitleMode: true
            };
        case t.EDIT_TITLE_OFF:
            return {
                ...state,
                editTitleMode: false
            };
        case t.FETCH_WORKSPACE:
            return {
                ...state,
                project: action.payload
            };
        case t.RESET_WORKSPACE:
            return {
                project: { name: 'Untitled', collaborators: [] },
                editTitleMode: false,
                pageView: 'comments',
                isTouched: false
            };
        case t.TOGGLE_WORKSPACE_PAGE_VIEW:
            return {
                ...state,
                pageView: action.payload
            };
        case t.SUBMIT_TITLE_FORM:
            return {
                ...state,
                isTouched: false,
                project: action.payload
            };
        case t.CHANGE_TITLE_FORM:
            return {
                ...state,
                isTouched: true,
                project: { ...state.project, name: action.payload }
            };
        case t.PROMOTE_AUDIO: {
            console.log('reducer', action.payload.workspace);
            return {
                ...state,
                project: action.payload.workspace
            };
        }
        case t.LOGOUT: {
            return {
                project: { name: 'Untitled', collaborators: [] },
                editTitleMode: false,
                pageView: 'comments',
                isTouched: false
            };
        }
        default:
            return state;
    }
}

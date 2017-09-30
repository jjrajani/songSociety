import t from '../../actions/workspace/types';

export default function(
    state = {
        project: { name: 'Untitled', collaborators: [] },
        editTitleMode: false,
        currentAudio: null,
        pageView: 'comments'
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
        case t.PLAY_AUDIO:
            return {
                ...state,
                currentAudio: action.payload
            };
        case t.FETCH_WORKSPACE:
            return {
                ...state,
                project: action.payload
            };
        case t.TOGGLE_WORKSPACE_PAGE_VIEW:
            return {
                ...state,
                pageView: action.payload
            };
        default:
            return state;
    }
}

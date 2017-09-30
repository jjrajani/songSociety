import t from '../../actions/workspace/types';

export default function(
    state = {
        project: { name: 'Untitled' },
        editTitleMode: false,
        currentAudio: null
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
        default:
            return state;
    }
}

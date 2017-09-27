import t from '../../actions/workspace/types';

export default function(
    state = { editTitleMode: false, title: 'Untitled' },
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
        default:
            return state;
    }
}

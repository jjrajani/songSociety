import t from '../../actions/comments/types';

export default function(
    state = {
        list: [],
        newComment: { content: '', audio: '' },
        currentComment: {},
        currentAudio: ''
    },
    action
) {
    switch (action.type) {
        case t.FETCH_COMMENTS:
            return { ...state, list: action.payload };
        case t.COMMENT_USER_IMG:
            let newList = state.list.map(c => {
                if (c.userId === action.payload.userId) {
                    c['img'] = action.payload.img;
                    return c;
                }
                return c;
            });
            return { ...state, list: newList };
        case t.RESET_WORKSPACE:
            return {
                ...state,
                list: []
            };
        case t.UPDATE_COMMENTS_CURRENT_AUDIO: {
            console.log('update audio src', action.payload);
            return {
                ...state,
                currentAudio: action.payload
            };
        }
        case t.UPDATE_NEW_COMMENT: {
            return {
                ...state,
                newComment: {
                    ...state.newComment,
                    [action.payload.key]: action.payload.value
                }
            };
        }
        case t.ADD_COMMENT: {
            return {
                ...state,
                list: [action.payload, ...state.list]
            };
        }
        default:
            return state;
    }
}

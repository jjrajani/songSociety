import t from '../../actions/comments/types';

export default function(
    state = { list: [], currentComment: {}, currentAudio: '' },
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
            console.log('update source', action.payload);
            return {
                ...state,
                currentAudio: action.payload
            };
        }
        default:
            return state;
    }
}

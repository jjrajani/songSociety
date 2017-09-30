import t from '../../actions/comments/types';

export default function(state = { list: [], currentComment: {} }, action) {
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

        default:
            return state;
    }
}

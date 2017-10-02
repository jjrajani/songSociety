import t from '../../actions/invites/types';

export default function(
    state = { incoming: [], outgoing: [], activeTab: 'incoming' },
    action
) {
    switch (action.type) {
        case t.FETCH_INVITES:
            return {
                ...state,
                incoming: action.payload.incoming,
                outgoing: action.payload.outgoing
            };
        case t.TOGGLE_INVITES_VIEW:
            return {
                ...state,
                activeTab: action.payload
            };
        default:
            return state;
    }
}

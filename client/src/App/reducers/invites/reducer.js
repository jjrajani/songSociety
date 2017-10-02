import t from '../../actions/invites/types';

export default function(
    state = { incoming: [], outgoing: [], activeTab: 'incoming' },
    action
) {
    switch (action.type) {
        case t.FETCH_INVITES:
            return {
                ...state,
                incoming: action.payload.invites.incoming,
                outgoing: action.payload.invites.outgoing
            };
        case t.TOGGLE_INVITES_VIEW:
            return {
                ...state,
                activeTab: action.payload
            };
        case t.INVITE: {
            return {
                ...state,
                outgoing: action.payload
            };
        }
        case t.FETCH_PROFILE: {
            return {
                ...state,
                incoming: action.payload.invites.incoming,
                outgoing: action.payload.invites.outgoing
            };
        }
        case t.ACCEPT_INVITE: {
            const newIncomingInvites = state.incoming.filter(i => {
                return i.workspace._id != action.payload;
            });
            return {
                ...state,
                incoming: newIncomingInvites
            };
        }
        case t.DECLINE_INVITE: {
            const newIncomingInvites = state.incoming.filter(i => {
                return i.workspace._id != action.payload;
            });
            return {
                ...state,
                incoming: newIncomingInvites
            };
        }
        default:
            return state;
    }
}

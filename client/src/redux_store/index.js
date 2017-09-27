import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

function enableBatching(reducer) {
    return function batchingReducer(state, action) {
        switch (action.type) {
        case 'BATCH_ACTIONS':
            return action.actions.reduce(batchingReducer, state);
        default:
            return reducer(state, action);
        }
    };
}

const store = createStore(
    enableBatching(reducers),
    {},
    applyMiddleware(reduxThunk)
);

export default store;

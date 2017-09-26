import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

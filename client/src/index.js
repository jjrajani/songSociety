import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes';

import { Provider } from 'react-redux';
import { store } from './redux_store';

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

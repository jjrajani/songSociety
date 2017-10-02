import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App/App';

import { Provider } from 'react-redux';
import { store } from './App/redux_store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

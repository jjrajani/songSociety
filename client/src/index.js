import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { App } from './components';

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <Provider sotre={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

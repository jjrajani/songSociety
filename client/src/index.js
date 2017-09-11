import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { App } from './components';
import reducers from './reducers';
// import actions from './actions';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// import axios from 'axios';
// window.axios = axios;
//
// in cunjunction with importing axios and setting window.axios = axios
// Use these commented lines to test email client works
// const survey = {
//   title: 'My Title', subject: 'My Subject', recipients: 'jjrajani@gmail.com', body: 'heres the body of the email'
// }
//
// axios.post('/api/surveys', survey);

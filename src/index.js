import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Bluebird from 'bluebird';
import { Provider } from 'react-redux';
//routes
import Routes from './router'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

//redux store
import configureStore from './lib/configureStore';
//reducer
import rootReducer from './Reducers';
//Bluebird configuration
window.Promise = Bluebird;

Bluebird.config({ warnings: false });

window.addEventListener('unhandledrejection', error => {
  error.preventDefault();

  if (process.env.NODE_ENV !== 'producction') {
    console.log('unhandled promise rejection warning', error.detail);
  }
});


const store = configureStore({
  initialState: window.initialState
}, rootReducer);


render(
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

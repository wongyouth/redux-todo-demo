import 'core-js/fn/object/assign';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'

// let store = createStore(reducers);
let store = createStore(reducers,
  window.devToolsExtension ? window.devToolsExtension() : undefined);

// Render the main component into the dom
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

import * as React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from 'components/App';

const store = createStore(() => {
  return {
    msg: 'hello'
  }
});

console.log('store', store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
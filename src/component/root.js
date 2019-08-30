import * as React from 'react';
import {Provider, compose} from 'react-redux';

import {store} from '/state';
import Home from '/component/Home';

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from './reducers';
import Router from './router';

let store = createStore(Reducers);

ReactDom.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    window.document.getElementById('regex-ui')
);
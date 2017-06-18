// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import 'babel-polyfill';

/* Import our data store */
import {getStore} from './store.js'
import {getRoutes} from "./routes.js";

/* Import CSS */
// import './scss/main.scss';

// Init function
function init() {
    const store = getStore(browserHistory);
    const routes = getRoutes(store);
    const history = syncHistoryWithStore(browserHistory, store);

    ReactDOM.render(
        <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>, document.getElementById('root'));
}
// If document ready init
if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}

import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import configureStore from './store/configure.store';
const store = configureStore ();
import { Provider } from 'react-redux';

const container = document.querySelector ('app');

render ( <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
         </Provider>, container );
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppLayout from './containers/app.layout';
import Default from './containers/default.container';



export default (
    <Route path="/" component={AppLayout}>
        <IndexRoute component={ Default } />
    </Route>
);
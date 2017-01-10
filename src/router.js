import React from 'react';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';

import Layout from './app/layout-container';
import Builder from './builder/builder-container';
import Loader from './loader/loader-container';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={Layout} path="/">
                    <IndexRedirect to="builder" />
                    <Route component={Builder} path="builder" />
                    <Route component={Loader} path="loader" />
                </Route>
            </Router>
        );
    }
}

export default AppRouter;

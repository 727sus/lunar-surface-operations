import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Url from '../utils/util.url';
import * as User from '../utils/util.user';

function PrivateRoute({component: Component, ...rest}) {
    return (
        // Show the component only when user is logged in
        // Otherwise, redirect user to /signin page
        <Route {...rest} render={props => {
            return User.isAuthenticated() ? <Component {...props} /> : <Redirect to={Url.LOGIN} />
        }} />
    );
}

export default PrivateRoute;
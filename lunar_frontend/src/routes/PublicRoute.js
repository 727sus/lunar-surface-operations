import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Url from '../utils/util.url';
import * as User from '../utils/util.user';

function PublicRoute({component: Component, restricted, ...rest}) {
    return (
        // Show the component to all users
        // If restriced = true, restricted l
        <Route {...rest} render={props => {
            return (User.isAuthenticated() && restricted) ? <Redirect to={Url.ROOT} /> : <Component {...props} />;
        }} />
    );
}

export default PublicRoute;
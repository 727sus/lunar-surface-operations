import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import * as Url from './utils/util.url';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Log from './views/Log';
import User from './views/User';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute
            restricted={false}
            component={Home}
            path={Url.ROOT}
            exact
          />
          <PublicRoute
            restricted={true}
            component={Login}
            path={Url.LOGIN}
            exact
          />
          <PublicRoute
            restricted={true}
            component={Register}
            path={Url.REGISTER}
            exact
          />
          <PublicRoute component={Log} path={Url.MY_LOG} exact />
          <PrivateRoute component={User} path={Url.MY_USER} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

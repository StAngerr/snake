import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import * as React from 'react';
import { Home } from './home/Home';
import { Login } from './login/Login';
import { ProtectedRoute } from './common/hoc/ProtectedRoute.hoc';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/" component={Home} />
        <ProtectedRoute path="/home" component={Home} />
        <Route path="*" component={Login} />
        {/*<Route component={NotFound} />*/}
      </Switch>
    </BrowserRouter>
  );
};

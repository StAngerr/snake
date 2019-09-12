import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Login } from './login/components/Login';
import { ProtectedRoute } from './common/hoc/ProtectedRoute.hoc';
import { Home } from './home/Home';

export const App = () => {
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

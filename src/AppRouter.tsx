import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import * as React from 'react';
import Home from './home/Home';
import { Login } from './login/Login';
import { ProtectedRoute } from './common/hoc/ProtectedRoute.hoc';
import { UserManagement } from './user-managment/UserManagement';
import { GameField } from './home/components/GameField';
import { Chat } from './chat/Chat';
import { About } from './about/Aboout';
import { Settings } from './settings/Settings';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Home>
          <>
            <ProtectedRoute exact={true} path="/" component={GameField} />
            <ProtectedRoute path="/home" component={GameField} />
            <ProtectedRoute path="/users" component={UserManagement} />
            <ProtectedRoute path="/chat" component={Chat} />
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/settings" component={Settings} />
          </>
        </Home>

        <Route path="*" component={Login} />
        {/*<Route component={NotFound} />*/}
      </Switch>
    </BrowserRouter>
  );
};

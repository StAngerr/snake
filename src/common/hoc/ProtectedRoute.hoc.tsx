import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import React, { FunctionComponent } from 'react';

interface Props<T> {
  component: typeof React.Component | FunctionComponent<T>;
  path?: string | string[];
}

export const ProtectedRoute = <T extends {}>({ component: RouteComponent, ...routeProps }: Props<T>) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...routeProps}
      render={(componentProps: RouteComponentProps<T>) => {
        return token ? <RouteComponent {...componentProps} /> : <Redirect to="/login" />;
      }}
    />
  );
};

import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import React, { FunctionComponent } from 'react';

interface Props {
  component: typeof React.Component | FunctionComponent<any>;
  path?: string | string[];
}

export const ProtectedRoute = ({ component: RouteComponent, ...routeProps }: Props) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...routeProps}
      render={(componentProps: RouteComponentProps) => {
        return token ? <RouteComponent {...componentProps} /> : <Redirect to="/login" />;
      }}
    />
  );
};

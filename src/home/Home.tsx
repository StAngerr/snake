import * as React from 'react';

import { Navigation } from '../header/components/Navigation';
import { ReactChild, ReactFragment } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps {
  children: ReactFragment | ReactChild;
}

const Home = ({ history, children }: Props) => {
  return (
    <div className="tile is-parent container is-vertical">
      <Navigation history={history} />
      <section>{children}</section>
    </div>
  );
};

export default withRouter(Home);

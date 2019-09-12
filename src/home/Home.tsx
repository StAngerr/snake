import * as React from 'react';

import { Navigation } from '../header/components/Navigation';
import { GameField } from './components/GameField';
import { History } from 'history';

interface Props {
  history?: History;
}

export const Home = ({ history }: Props) => {
  return (
    <div className="tile is-parent container is-vertical">
      <Navigation history={history} />
      <GameField />
    </div>
  );
};

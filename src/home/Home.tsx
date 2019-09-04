import * as React from 'react';

import { Navigation } from '../header/components/Navigation';
import { GameField } from './components/GameField';

export const Home = () => {
    return <div className="tile is-parent container is-vertical">
        <Navigation />
        <GameField />
    </div>;
};

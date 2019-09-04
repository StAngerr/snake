import { BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router';

import * as React from 'react';
import { Home } from './home/Home';
import { NotFound } from './common/components/NotFound';

export const AppRouter = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>;
};

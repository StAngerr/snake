import React from 'react';
import { AppRouter } from './AppRouter';
import { Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Login} from './login/components/Login';

export const App = () => {
    if (!localStorage.getItem('login')) {
        return <BrowserRouter>
            <Route path="/login" component={Login}/>
            <Route path="*" component={Login} />
        </BrowserRouter>;
    }
    return <AppRouter/>;
};

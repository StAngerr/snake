import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as React from 'react';
import { Home } from './home/Home';
import { ReactChildren } from 'react';
import { Login } from './login/components/Login';

interface Props {
    children?: ReactChildren;
}

export const AppRouter = ({ children }: Props) => {
    return <Router>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        {children}
    </Router>;
}

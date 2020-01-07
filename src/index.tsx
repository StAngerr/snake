import './styles/main.scss';

import 'babel-polyfill';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

if (navigator.serviceWorker) {
    navigator.serviceWorker.register(`/sw.js`)
        .then(registration => {
            console.log('congrats. scope is: ', registration.scope);
        })
        .catch(error => {
            console.log('sorry', error);
        });
}

ReactDOM.render(<App/>, document.getElementById('app'));

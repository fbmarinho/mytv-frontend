import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';

import Main from './views/Main';
import Channels from './views/Channels';
import Users from './views/Users';
import UserDetail from './views/UserDetail';

import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Main} />
            <Route path="/channels" component={Channels} />
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id" component={UserDetail} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute componet={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var routes = (
  <Route path="/" component={require('./compontents/app')}>
    <IndexRoute component={require('./compontents/homePage')} />
    <Route path="authors" component={require('./compontents/authors/authorPage')}/>
    <Route path="author" component={require('./compontents/authors/manageAuthorPage')}/>
    <Route path="author/:authorId" component={require('./compontents/authors/manageAuthorPage')}/>
    <Route path="about" component={require('./compontents/about/aboutPage')}/>
  </Route>
);

module.exports = routes;
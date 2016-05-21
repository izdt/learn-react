"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app')) 

"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
          <div className="jumbotron">
            <h1>PS Admin</h1>
            <p>React, React Router, and Flux for responseive web apps.</p>
          </div>
        );
    }
});

module.exports = Home;

/*
import React, {PropTypes} from 'react';

const Home = props => {
    return (
        <div className="jumbotrom">
            <h1>PS Admin</h1>
            <p>React, React Router, and Flux for responseive web apps.</p>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;
*/
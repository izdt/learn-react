//"use strict";
var React = require('react');
var Header = require('./common/header');
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                {this.props.children}
                </div>
            </div>
        );
    }
}); 

module.exports = App;
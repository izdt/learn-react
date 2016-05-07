"use strict";

var React = require('react');
var Input = require('../common/textInput');


var AuthorForm = React.createClass({

    render: function(){
        return (
            <form>
                <h1>Manage Author</h1>
                <Input name="firstName" label="First Name" 
                value={this.props.author.firstName} onChange={this.porps.onChange} />
                <br/>
                <Input name="lastName" label="Last Name" 
                value={this.props.author.lastName} onChange={this.porps.onChange} />
                <label htmlFor="lastName">Last Name</label>
                <input type="submit" className="btn btn-default" value="Save"/>
            </form>
        );
    }
});
module.exports = AuthorForm;
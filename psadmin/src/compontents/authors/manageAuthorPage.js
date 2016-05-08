"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/AuthorApi')

var ManageAuthorPage = React.createClass({
    getInitialState:function(){
      return {
          author: {id:'',firstName:'',lastName:''}
      };  
    },
    setAuthorState: function(event){
       //console.log(event.target.name);
       var field = event.target.name;
       var value = event.target.value;
       this.state.author[field] = value;
       return this.setState({author:this.state.author});  
    },
    saveAuthor: function(event){
        console.log(event);
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
    },
    render: function(){
        return (
          <AuthorForm author={this.state.author} 
          onChange={this.setAuthorState}
          onSave={this.saveAuthor} />  
        );
    }   
});

module.exports = ManageAuthorPage;
 
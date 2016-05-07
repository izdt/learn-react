"use strict";

var React = require('react');
var Input = React.createClass({
    propTypes:{
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string
    },
    render: function(){
        var wrapperClass = 'form-group';
        if(this.prop.error && this.props.error.length >0){
            wrapperClass += " " + 'has-error';
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor="{this.props.name}">{this.props.label}</label>
                <div className="field">
                    <input type="text" name={this.prop.name} className="form-control" placeholder={this.prop.placeholder} ref={this.prop.name} 
                onChange={this.props.onChange} value={this.props.value}/>
                    <div className="input">{this.props.error}</div>                
                </div>
            </div>
        );
    }
});
module.exports = Input;
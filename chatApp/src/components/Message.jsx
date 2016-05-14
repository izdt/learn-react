import React, {Component} from 'react';
import {List, ListItem}  from 'material-ui/List';

class Message extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ListItem>
                {this.props.message}
            </ListItem>
        );
    }
}

export default Message;
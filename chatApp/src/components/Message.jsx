import React, {Component} from 'react';
import {List, ListItem}  from 'material-ui/List';
import Avatar from 'material-ui/Avatar';


class Message extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ListItem 
                leftAvatar={<Avatar src={this.props.message.avatar}/>}
                style={{fontWeight:300,color:'##2196F3'}}
            >
                {this.props.message.message}
            </ListItem>
        );
    }
}

export default Message;
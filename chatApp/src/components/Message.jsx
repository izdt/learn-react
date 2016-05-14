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
                leftAvatar={<Avatar src="https://avatars0.githubusercontent.com/u/4001992?v=3&u=9f76a26691adb57dcf0b28015282dbd92f14c1d3&s=140"/>}
            >
                {this.props.message}
            </ListItem>
        );
    }
}

export default Message;
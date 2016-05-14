import React, {Component} from 'react';
import {List, ListItem}  from 'material-ui/List';


class Channel extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ListItem >
                {this.props.channel}
            </ListItem>
        );
    }
}

export default Channel;
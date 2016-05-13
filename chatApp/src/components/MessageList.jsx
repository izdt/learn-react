import React, {Component} from 'react';
import Message from './Message.jsx';
import {Card,List}  from 'material-ui';

class MessageList extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages:[
                'hi there how are you?',
                'I am fine, and you?'
            ]
        }
    }
    render() {
       var messageNodes = this.state.messages.map((message)=>{
            return (
                <Message message={message}/>
            ); 
        });
        return (
            <Card>
                <List>{messageNodes}</List>
            </Card>
        );
    }
}

export default MessageList;
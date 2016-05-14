import React, {Component} from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

class MessageList extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages:[
                'Hi there how are you?',
                'I am fine, and you?',
                'Hello world',
                'We are chating'
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
            <Card style={{flexGrow: 2, marginLeft:30}}>
                <List>{messageNodes}</List>
            </Card>
        );
    }
}

export default MessageList;
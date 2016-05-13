import React, {Component} from 'react';
import Message from './Message.jsx';

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
            <div>
                {messageNodes}    
            </div>
        );
    }
}

export default MessageList;
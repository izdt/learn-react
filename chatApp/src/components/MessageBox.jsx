import React, {Component} from 'react';
import Card from 'material-ui/Card';
import trim from 'trim';
import Firebase from 'firebase';

class MessageBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
        this.firebaseRef = new Firebase('https://chatappio.firebaseio.com/messages');
    }
    
    onChange(evt){
        this.setState({
            message: evt.target.value
        });
    }
    
    onKeyUp(evt){
        if(evt.keyCode===13 && trim(evt.target.value) != ''){
            evt.preventDefault();
            
            this.firebaseRef.push({
                message:this.state.message
            });
            
            this.setState({
                message:''
            });
            
            //console.log('Sent a new message: '+evt.target.value);
        } 
    }
    
    render() {
        return (
            <Card style={{
                maxWidth: 1200,
                margin: '30px auto',
                padding: 10
            }}>
                <textarea
                value={this.state.message} 
                onChange={this.onChange.bind(this)}
                onKeyUp={this.onKeyUp.bind(this)} 
                style={{
                    width: '100%',
                    borderColor: '#D0D0D0',
                    resize: 'none',
                    minHeight: 50,
                    color: '#2196F3',
                    fontSize: 16,
                    border: 'none',
                    outline: 'none'
                }} placeholder="Input your message here"/>
            </Card>
        );
    }
}

export default MessageBox;
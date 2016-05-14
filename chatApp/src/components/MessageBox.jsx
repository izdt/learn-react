import React, {Component} from 'react';
import Card from 'material-ui/Card';

class MessageBox extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Card style={{
                maxWidth: 1200,
                margin: '30px auto',
                padding: 10
            }}>
                <textarea style={{
                    width: '100%',
                    borderColor: '#D0D0D0',
                    resize: 'none',
                    minHeight: 50,
                    color: '#555',
                    fontSize: 16,
                    border: 'none',
                    outline: 'none'
                }} placeholder="Input your message here"/>
            </Card>
        );
    }
}

export default MessageBox;
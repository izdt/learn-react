import React, {Component} from 'react';
import {Card, CardText}  from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Actions from '../actions';

class Login extends Component {
    
    onClick(){
        //console.log('logging in');
        Actions.login();
    }
    
    render() {
        return (
            <Card style={{
                'maxWidth':'800px',
                'margin':'30px auto',
                'padding':'50px'
            }}>
                <CardText style={{
                    'textAlign':'center'
                }}>
                To start chatting away, please log in with your Google account.
                </CardText>
                
                <RaisedButton style={{
                    display:'block'
                }} onClick={this.onClick.bind(this)} label="Log in with Google"></RaisedButton>
            </Card>
        );
    }
}

export default Login;
import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            messages:[
                'hi there how are you?',
                'I am fine, and you?'
            ]
        }
    }
    render() {
        var messageNode = this.state.messages.map((message)=>{
           return (
            <div>{message}</div>     
           );
        });
        return (
            <div>
                 {messageNode}
            </div>
        );
    }
}

export default App;
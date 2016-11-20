import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
    render() {
        return (
            <div>
                Hello from React Hello Component
            </div>
        );
    }
}

ReactDOM.render(<Hello />,document.getElementById('app'));
//export default Hello;

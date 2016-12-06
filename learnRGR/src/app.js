import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import Main from './components/Main';

ReactDOM.render(<Main />,document.getElementById('app'));
//export default Hello;

console.log(
    Relay.QL`
    query Test {
        links {
            title
        }
    }
    `
);
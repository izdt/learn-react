import React, {Component} from 'react';
import API from '../API';
import LinkStore from '../stores/LinkStore';

class Main extends Component {
    componentWillMount(){
        API.fetchLinks();
    }
    render() {
        return (
            <div>
                Hello from React Main
            </div>
        );
    }
}

export default Main;
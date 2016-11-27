import React, {Component} from 'react';
import API from '../API'

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
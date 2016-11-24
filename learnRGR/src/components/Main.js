import React, {Component} from 'react';
import API from './API'

class Main extends Component {
    componentWillMount(){
        API.fetchLinks();
    }
    componentDidMount(){
        debugger;
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
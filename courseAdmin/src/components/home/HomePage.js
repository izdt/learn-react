import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Course Admin</h1>
                <p>Reac, Redux and React Router in ES6</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;
import React, {Component} from 'react';
import API from '../API';
import LinkStore from '../stores/LinkStore';

let _getAppState = () => {
    return { links: LinkStore.getAll() };
}

class Main extends Component {
    constructor(prop){
        super(prop);
        this.state = _getAppState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        API.fetchLinks();
        LinkStore.on('change',this.onChange);
    }
    componentWillUnMount(){
        LinkStore.removeListener('change',this.onChange);
    }
    onChange(){
        this.setState(_getAppState());
    }
    render() {
        let content = this.state.links.slice(0, this.props.limit ).map(link=>{
            return <li key={link._id}>
                     <a href={link.url}>{link.title}</a>
                   </li>
        });
        return (
            <div>
                <h3>Links:</h3>
                <ul>
                    {content}
                </ul>
            </div>
        );
    }
}

Main.propTypes = {
    limit: React.PropTypes.number
}

export default Main;
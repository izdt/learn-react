import React, {Component} from 'react';
import Relay from 'react-relay';
/*
import API from '../API';
import LinkStore from '../stores/LinkStore';

let _getAppState = () => {
    return { links: LinkStore.getAll() };
}
*/
class Main extends Component {
    
    static propTypes = {
        limit: React.PropTypes.number
    }
    static defaultProps = {
        limit: 3
    }
    /*
    state = _getAppState();

    onChange = ()=>{
        this.setState(_getAppState());
    }
    
    componentWillMount(){
        API.fetchLinks();
        LinkStore.on('change',this.onChange);
    }
    componentWillUnMount(){
        LinkStore.removeListener('change',this.onChange);
    }
    */
    render() {
        //let content = this.state.links.slice(0, this.props.limit ).map(link=>{
        let content = this.props.store.links.slice(0, this.props.limit ).map(link=>{
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

Main = Relay.createContainer(Main, {
    framgments : {
        store: () => Relay.QL`
            fragment on Store {
                links {
                    _id,
                    title,
                    url
                }
            }
        `
    }
});

export default Main;
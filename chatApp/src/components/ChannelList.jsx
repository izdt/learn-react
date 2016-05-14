import React, {Component} from 'react';
import Channel from './Channel.jsx';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

class ChannelList extends Component {
    constructor(props){
        super(props);
        this.state = {
            channels:[
                'Dogs',
                'Cats'
            ]
        }
    }
    render() {
       var channelNodes = this.state.channels.map((channel)=>{
            return (
                <Channel channel={channel}/>
            ); 
        });
        return (
            <Card style={{flexGrow: 1}}>
                <List>{channelNodes}</List>
            </Card>
        );
    }
}

export default ChannelList;
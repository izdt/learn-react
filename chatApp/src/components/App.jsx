import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

const muiTheme = getMuiTheme({
  palette: {
    textColor: blue500,
  },
  appBar: {
    height: 50
  },
});

class App extends Component {
    constructor(){
        super();
        
    }
        
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
                            title="Awesome chat app"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                        />
                    <div style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        maxWidth: 1200,
                        width: '100%',
                        margin: '30px auto 30px'
                    }}>
                        <ChannelList />
                        <MessageList />
                    </div>
                    <MessageBox />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

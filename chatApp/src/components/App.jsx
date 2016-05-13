import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
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
                    <MessageList />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

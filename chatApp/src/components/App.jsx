import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



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
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                </MuiThemeProvider>
                <MessageList />
            </div>
        );
    }
}

export default App;
